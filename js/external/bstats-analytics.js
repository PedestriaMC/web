async function serverCount(projectId) {
    const url = `https://bstats.org/api/v1/plugins/${projectId}/charts/servers/data`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const latest = data.reduce((a, b) => (a[0] > b[0] ? a : b));

        return latest[1];
    } catch (error) {
        console.log(error)
        return "Unable to load Server count."
    }

}