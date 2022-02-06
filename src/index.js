module.exports = function check(str, bracketsConfig) {
  var tmp = [];
  var flag = true;
  for (var i = 0; i < str.length; i++) {
    if (str[i] != ")" && str[i] != "]" && str[i] != "}") {
      tmp.push(str[i]);
    } else {
      if (str[i] == ")" && tmp[tmp.length - 1] == "(")
        tmp.splice(tmp.length - 1, 1);
      else if (str[i] == "]" && tmp[tmp.length - 1] == "[")
        tmp.splice(tmp.length - 1, 1);
      else if (str[i] == "}" && tmp[tmp.length - 1] == "{")
        tmp.splice(tmp.length - 1, 1);
      else {
        flag = false;
        break;
      }
    }

    if (
      tmp[tmp.length - 1] != "(" &&
      tmp[tmp.length - 1] != "[" &&
      tmp[tmp.length - 1] != "{"
    ) {
      flag = false;
      for (var i = 0; i < bracketsConfig.length; i++)
        if (
          tmp[tmp.length - 2] == bracketsConfig[i][0] &&
          tmp[tmp.length - 1] == bracketsConfig[i][1]
        ) {
          tmp.splice(tmp.length - 2, 2);
          flag = true;
        }
    }
  }
  if (tmp.length > 0) flag = false;

  return flag;
};
