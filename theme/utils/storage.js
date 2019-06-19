define(["require", "exports"], function(require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var Storage = /** @class */ (function() {
    function Storage(name) {
      this.name = name;
    }
    Storage.prototype.get = function() {
      if (typeof window !== "undefined") {
        try {
          var item = window.localStorage.getItem(this.name);
          return typeof item === "string" ? JSON.parse(item) : null;
        } catch (err) {
          return {};
        }
      }
    };
    Storage.prototype.set = function(value) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(this.name, JSON.stringify(value));
      }
    };
    Storage.prototype.delete = function() {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(this.name);
      }
    };
    return Storage;
  })();
  exports.Storage = Storage;
});

/*export class Storage {
  public name: string
  constructor(name: string) {
    this.name = name
  }

  public get(): any {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(this.name)
        return typeof item === 'string' ? JSON.parse(item) : null
      } catch (err) {
        return {}
      }
    }
  }

  public set(value: any): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.name, JSON.stringify(value))
    }
  }

  public delete(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(this.name)
    }
  }
}
*/
