export function addDate() {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    
    return `${year}.${month}.${day}`
  }

 export function addTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`
}