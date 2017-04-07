export class NumberFormatterValueConverter {
  toView(value) {
    if (value) {
      return value;
    } else {
      return value;
    }
  }

  fromView(value) {
    if (value) {
      let check = value * 1;
      if (isNaN(check)) {
        return value;
      } else {
        return value * 1;
      }

    } else {
      return value;
    }
  }
}

export class BooleanFormatterValueConverter {
  toView(value) {
    if (value) {
      return value;
    } else {
      return value;
    }
  }

  fromView(value) {

    if (typeof value === 'string') {
      value = value.toLowerCase();
      switch (value) {
        case 'true':
          value = true;
          break;
        case 'false':
          value = true;
          break;
        default:
          value = false;
      }
    }


    return value;
  }
}