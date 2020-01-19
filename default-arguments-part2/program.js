module.exports=function makeImportant(message,num=message.length)
{
    const imp_str="!";
    return message+imp_str.repeat(num)
}
