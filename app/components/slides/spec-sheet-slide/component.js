import GenericSlide from '../../generic-slide/component';
import { TweenMax } from "gsap/TweenMax";
import { action } from '@ember-decorators/object';

export default class SlidesSpecSheetSlideComponent extends GenericSlide {

  bbqData = {
    "totalServings":8,
    "servingSize": "2/3 cup (55g)",
    "calories": 230,
    "fat": {
      "q": "8",
      "p": "12",
      "saturated": {
        "q": "1",
        "p": "5"
      },
      "trans": {
        "q": "0"
      }
    },
    "chol": {
      "q": "0",
      "p": "0"
    },
    "sodium": {
      "q": "0",
      "p": "0"
    },
    "carb": {
      "q": "8",
      "p": "12",
      "fiber": {
        "q": "1",
        "p": "5"
      },
      "sugar": {
        "q": "0"
      },
      "added": {
        "q": "0",
        "p": "0"
      }
    },
    "protein": {
      "q": "0"
    },
    "vitamins": {
      "d": {
        "q": "0",
        "p": "0"
      },
      "calcium": {
        "q": "0",
        "p": "0"
      },
      "iron": {
        "q": "0",
        "p": "0"
      },
      "potassium": {
        "q": "0",
        "p": "0"
      }
    }
  };
  pestoData = {
    "totalServings":8,
    "servingSize": "2/3 cup (55g)",
    "calories": 230,
    "fat": {
      "q": "8",
      "p": "12",
      "saturated": {
        "q": "1",
        "p": "5"
      },
      "trans": {
        "q": "0"
      }
    },
    "chol": {
      "q": "0",
      "p": "0"
    },
    "sodium": {
      "q": "0",
      "p": "0"
    },
    "carb": {
      "q": "8",
      "p": "12",
      "fiber": {
        "q": "1",
        "p": "5"
      },
      "sugar": {
        "q": "0"
      },
      "added": {
        "q": "0",
        "p": "0"
      }
    },
    "protein": {
      "q": "0"
    },
    "vitamins": {
      "d": {
        "q": "0",
        "p": "0"
      },
      "calcium": {
        "q": "0",
        "p": "0"
      },
      "iron": {
        "q": "0",
        "p": "0"
      },
      "potassium": {
        "q": "0",
        "p": "0"
      }
    }
  };
  chorizoData = {
    "totalServings":8,
    "servingSize": "2/3 cup (55g)",
    "calories": 230,
    "fat": {
      "q": "8",
      "p": "12",
      "saturated": {
        "q": "1",
        "p": "5"
      },
      "trans": {
        "q": "0"
      }
    },
    "chol": {
      "q": "0",
      "p": "0"
    },
    "sodium": {
      "q": "0",
      "p": "0"
    },
    "carb": {
      "q": "8",
      "p": "12",
      "fiber": {
        "q": "1",
        "p": "5"
      },
      "sugar": {
        "q": "0"
      },
      "added": {
        "q": "0",
        "p": "0"
      }
    },
    "protein": {
      "q": "0"
    },
    "vitamins": {
      "d": {
        "q": "0",
        "p": "0"
      },
      "calcium": {
        "q": "0",
        "p": "0"
      },
      "iron": {
        "q": "0",
        "p": "0"
      },
      "potassium": {
        "q": "0",
        "p": "0"
      }
    }
  };

  animate() {
    TweenMax.to(this.buildSelector('.fade-in'), 1, {opacity:1});
  }

  isReady() {
    return this.get('productImageReady') && this.get('logoReady');
  }

  @action
  productImageReady() {
    this.set('productImageReady', true);
    this.notifyReadyChanged();
  }

  @action
  logoReady() {
    this.set('logoReady', true);
    this.notifyReadyChanged();
  }
}
