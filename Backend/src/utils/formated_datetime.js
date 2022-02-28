function getCurrentTime()
{
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth() + 1).toString().padStart(2, "0")+'/'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes()

    return date+' '+time;
}

module.exports = {getCurrentTime}