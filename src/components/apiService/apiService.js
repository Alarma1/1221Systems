const apiUrl = 'https://jsonplaceholder.typicode.com';

export const apiService = {

    async postList() {
        try {
            const response = await fetch(apiUrl + '/posts', {
                method: 'GET',
            })
            return await response.json();
        } catch (error) {
            console.error('Ошибка в запросе Списка постов', error);
        }
    },

    async postBody(postId) {
        try {
            const response = await fetch(apiUrl + '/posts/' + postId, {
                method: 'GET',
            })
            return await response.json();
        } catch (error) {
            console.error('Ошибка в запросе данных выбранного поста', error);
        }
    },

    async aboutAuthor(userId) {
        try {
            const response = await fetch(apiUrl + '/users/' + userId, {
                method: 'GET',
            })
            return await response.json();
        } catch (error) {
            console.error('Ошибка в запросе данных об авторе', error);
        }
    }
}
