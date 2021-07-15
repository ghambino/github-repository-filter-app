import AsyncStorage from "@react-native-async-storage/async-storage";

 class AuthStorage {
    constructor(namespace = 'auth'){
        this.namespace = namespace
    }

    async getAccessToken(){
        const token = await AsyncStorage.getItem(`${this.namespace} Token`);
        return token ? JSON.parse(token): []
    }

    async setAccessToken(accessToken){
        const existingToken = await this.getAccessToken()
        const currentToken = [...existingToken, accessToken];

        await AsyncStorage.setItem(`${this.namespace} Token`, JSON.stringify(currentToken))
        return currentToken
    }

    async removeAccessToken(){
        await AsyncStorage.removeItem(`${this.namespace} Token`)
    }
}

export default AuthStorage;