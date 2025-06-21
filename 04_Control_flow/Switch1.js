const month="feb"
switch(month)
{
    case "jan":
        console.log("Jan")
        break;
    case "feb":
        console.log("Feb")
        break;
    case "march":
        console.log("March")
        break;
    case "april":
        console.log("April")
        break;
    default:
        console.log("default case")
        break;
}
// ***** //
// // Very Imp=>
//  if we not give break statement after any case then
//  the all below statements of the desired key are executed except default