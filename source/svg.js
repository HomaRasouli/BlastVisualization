var Base, Line, Polygon, Rect, setAttr, svgns;

  svgns = "http://www.w3.org/2000/svg";

  setAttr = function(obj, opts) {
    var name, value;
    for (name in opts) {
      value = opts[name];
      obj.setAttributeNS(null, name, value);
    }
    return obj;
  };

  Base = function(opts) {
    var svg;
    svg = document.createElementNS(svgns, 'svg');
    svg.setAttribute("width", opts.width);
    svg.setAttribute("height", opts.height);
    return svg;
  };

  Rect = function(opts) {
    var rect;
    rect = document.createElementNS(svgns, 'rect');
    return setAttr(rect, opts);
  };

  Line = function(opts) {
    var line;
    line = document.createElementNS(svgns, 'line');
    return setAttr(line, opts);
  };

  Polygon = function(opts) {
    var line;
    line = document.createElementNS(svgns, 'polygon');
    return setAttr(line, opts);
  };

  var svg = {};
  
  svg.rect = Rect;

  svg.line = Line;

  svg.polygon = Polygon;

  svg.base = Base;
