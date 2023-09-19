function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(activity1="go to the office"){
    return `This Monday, I will ${activity1}.`;
}
function wrapAdjective(string = "*"){
    return function(param = "special"){
        return `You are ${string}${param}${string}!`
    }
}
const encouragingPromptFunction = wrapAdjective("%")("a dedicated programmer")