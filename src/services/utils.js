export const truncateChars = (str, noChars) => {
    if(str && (noChars > 1)){
        if(str.length > noChars){
            return str.slice(0,noChars) + "..."
        } else {
            return str
        }
    }
}