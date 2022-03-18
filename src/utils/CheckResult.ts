export const checkResult = (result:Record<string,any>) => {
    if (result && result != null) {
        return result.success
    }
    return false
}


