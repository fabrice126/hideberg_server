export default {
    userAdd: async (_, { data }, { models: { user } }) => {
        try {
            return await user.create(data);
        } catch (error) {
            throw new Error(error.errors['0'].message)
        }
    },
    userUpdate: async (_, { id, data }, { models: { user } }) => {
        const updateUser = await user.update(data, { where: { id: id } });
        if (!updateUser) throw new Error('Error for updating this user');
        return true;
    },
    userRemove: async (_, { id }, { models: { user } }) => {
        const destroyUser = await user.destroy({ where: { id: id } });
        if (!destroyUser) throw new Error('Error adding new user');
        return true;
    },
    userRemoveAll: async (_, args, { models: { user } }) => {
        const destroyAllUsers = await user.destroy({ where: {} });
        if (!destroyAllUsers) throw new Error('Error adding new user');
        return true;
    },
    userLogin: async (_, { email, password }, { models: { user } }) => {
        try {
            const newUser = await user.findOne({ where: { email: email.toLowerCase().trim() } });
            if (!newUser) throw new Error(graphqlError.login.errorEmailPassword);
            const valid = await bcrypt.compare(password, newUser.password);
            if (!valid) throw new Error(graphqlError.login.errorEmailPassword);
            const { id, username, role } = newUser;
            const token = jwt.sign({ id, username, email, role }, SECRET, {
                expiresIn: 60
            });
            console.log(token);
            return token;
        } catch (error) {
            throw new Error(error);
        }
    }
}