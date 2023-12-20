export const useEmailCheck = async (email: string) => {
    const client = useMedusaClient();
    const { exists } = await client.auth.exists(email);
    return exists;
}