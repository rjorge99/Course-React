export const getImagen = async () => {
    try {
        const apiKey = 'ENoQV0FKSw5F0k8oCvdImSdhJfjbgNsi';
        const resp = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();

        const { url } = data.images.original;
        console.log(url);

        return url;
    } catch (error) {
        return 'No existe';
    }
};
