export const underscoreToCapitalize = (string) => {
    return string.split("_").map(s => `${s[0].toUpperCase()}${s.slice(1, s.length)}`).join(" ");
}