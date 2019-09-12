export const getFormData = (data) => {
    return {
        type: 'GET_DATA',
        payload: data.form
    }
}