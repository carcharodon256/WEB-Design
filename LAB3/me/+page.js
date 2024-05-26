export const ssr = false;

export async function load({ fetch }) {
    try {
        return {
            user: await (await fetch('https://127.0.0.1:8080/api/secure/profile.json', { mode: 'cors', credentials: 'include' })).json()
        };
    } catch (e) {
        return { user: false };
    }
};
