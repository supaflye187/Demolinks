(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1270,250);


(lib.echo1 = function() {
	this.initialize(img.echo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,263);


(lib.echo2 = function() {
	this.initialize(img.echo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,233);


(lib.echo3 = function() {
	this.initialize(img.echo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,263);


(lib.game_1_unspoken = function() {
	this.initialize(img.game_1_unspoken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_3_startrek = function() {
	this.initialize(img.game_3_startrek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_4_superhot = function() {
	this.initialize(img.game_4_superhot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_5_roborecall = function() {
	this.initialize(img.game_5_roborecall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_6_rickmorty = function() {
	this.initialize(img.game_6_rickmorty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_7_wilson = function() {
	this.initialize(img.game_7_wilson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.hardware = function() {
	this.initialize(img.hardware);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,178);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFDHQgggJgZgQQgggbgMgSIgPgdIgKgjIgsAAIAGgyIAhAAIgBgOIABgOIgnAAIAGgyIAmAAQAGgZATgoQAMgRAggbQAZgRAggJQAfgIAmAAQAmAABJAUIgEBTQgcgJgagGQgcgEgZAAQgTAAgQACQgQAEgMAHQgMAIgKAKQgKAMgGAQIC2AAIgKAyIi1AAIgBAOIABAOICuAAIgKAyIibAAQAHAPAJANQAKAKAMAIQANAGAQAEQAQACASAAQAZAAAcgEQAagGAcgJIAEBTQhJAUgmAAQgmAAgfgIg");
	this.shape.setTransform(944,180.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiKE7QAkgdA+hFQAsg0Ajg7QgjAJgsAAQgqAAglgQQgkgOgcgcQgcgbgPgkQgQgmAAgrQAAgjATg9QAMgcAngtQAhgeAsgQQAegKBDgGQAmAAA+ASQAsARAgAfQAgAfAQAoQARApAAAuQAAAugSA4QgQA3gfA5QgdA4gnA0QgmA0gqAngAgni5QgSAIgNANQgOAOgGASQgHASAAAUQAAAUAHASQAHASANAOQANANATAIQATAGAVAAQAXAAATgGQASgIAOgNQANgOAHgSQAHgSAAgUQAAgUgHgSQgHgSgNgOQgOgNgSgIQgTgIgXAAQgWAAgTAIg");
	this.shape_1.setTransform(894.7,191.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXE1IAAhyIkTAAIAAh4IEUmAICKAAIAAGAIBbAAIgEB4IhXAAIAABygAhpBLICAAAIAAiyIgCAAg");
	this.shape_2.setTransform(839,191.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXE1IAAhyIkTAAIAAh4IEUmAICKAAIAAGAIBbAAIgEB4IhXAAIAABygAhpBLICAAAIAAiyIgCAAg");
	this.shape_3.setTransform(783,191.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(751.5,137.1,217.2,116.5), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAeIgLgDIADgOQAEACAGACIALABIAGgBQAEgCAAgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIgFgCIgKgCQgIgDgDgCIgFgDQgBgDAAgEQAAgFACgEIAFgGQAEgCAEgBQAFgCAEABQAGgBAFACIALADIgDAOQgEgDgFgCIgKgBIgFABQgDACABADQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAEACIALADIAFACIAGACIAEAFQACADAAADQAAAFgDAFQgCADgEACQgEACgFACIgKABIgMgBg");
	this.shape.setTransform(67.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAcQgEgBgCgEQgDgDgBgFQgBgEAAgGIAAgiIAQAAIAAAgQAAAHACADIAEACIAFABIAFgBQACgBACgCQACgCAAgEIABgGIAAgdIAQAAIAAA5IgPAAIAAgIIgBAAIgEAEIgFADQgDADgGAAQgGAAgEgCg");
	this.shape_1.setTransform(60.9,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAtIAAhZIAPAAIAABZg");
	this.shape_2.setTransform(55.9,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAsIAAhXIAlAAQAGAAAGADQAFACADADQAEAFACAEQACAGAAAGQAAAGgCAGQgCAEgEAEQgDAEgFABQgGADgGAAIgUAAIAAAegAgPAAIASAAIAGgBIAEgCQACgCAAgDIABgGIgBgFQAAgDgCgCIgEgEIgGAAIgSAAg");
	this.shape_3.setTransform(50.7,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_4.setTransform(41.1,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHArIAAg4IAPAAIAAA4gAgGgaQgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(36.9,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAeIgHgCQgFgCgFgEQgDgEgCgGQgDgGAAgGQAAgFADgGQACgFADgEQAFgEAFgDIAHgBIAGgBQAGgBAHADQAHADADAEQAFAEABAFQACAGAAAFQAAAGgCAGQgBAGgFAEQgDAEgHACQgHADgGAAgAgGgOIgEADIgDAGIgBAFIABAHIADAFQABACADABQADACADAAQAEAAADgCIAEgDQACgCABgDIABgHIgBgFIgDgGIgEgDIgHgCIgGACg");
	this.shape_6.setTransform(31.8,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAdIgXg5IARAAIANApIAOgpIASAAIgYA5g");
	this.shape_7.setTransform(25,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBQADgCAEgBIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_8.setTransform(18.2,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAsQgHgCgGgDIADgPQAGADAHABQAHACAHABIAFgBIAGgCIAEgDIACgGQAAgDgCgCQgCgCgDgCIgPgFIgJgDIgHgDQgEgEgCgEQgCgEAAgGIABgHIACgFQADgFAFgDIALgEQAFgBAGgBQAHAAAHACQAHACAFADIgDAPQgFgDgGgCQgGgBgGAAQgIAAgDACIgEADIgBAFQAAADACACQACACADACIAPAEIAJAEIAHADQAEADABAEQACAEAAAGIAAAHIgDAGIgDAFIgFAEQgFACgGACQgGACgGgBQgIAAgIgBg");
	this.shape_9.setTransform(11.3,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAeIAAggQAAgGgCgDIgEgDIgFgBIgFABIgEAEIgEAGIgBAGIAAAcIgPAAIAAg5IAOAAIABAKIAFgFIAFgEQAEgDAGAAQAGAAAEACQAEACACADQADADABAEIABALIAAAig");
	this.shape_10.setTransform(0.7,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIA8AAIAAAPIgsAAIAAAVIAoAAIAAAOIgoAAIAAAWIAtAAIAAAPg");
	this.shape_11.setTransform(-6.6,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-12.7,0,85.1,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(150.7,-127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(91.6,-162.7,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC2IAAiTQAAgQgDgMQgEgMgGgKQgHgJgLgFQgNgFgQAAQgRAAgQAGQgRAHgMAMQgOAMgIASQgHAUAAAYIAAB1IgZAAIAAlrIAZAAIAACBIgBAyIACAAIANgVQAJgKAKgHQAMgJAOgEQAQgFASABQAVAAARAGQAQAHAKANQAKANAFARQAFAOgBAVIAACUg");
	this.shape.setTransform(216,165.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYB0QgXgHgRgPQgRgPgIgXQgHgQgDgoQAAgVAKgiQAIgXARgPQARgPAXgIQAXgGAbAAQAQAAAUADQAVAFAQAIIgBAZQgSgJgUgEQgUgFgPAAQgWAAgRAGQgSAGgNAMQgOAMgGATQgIATAAAZQAAAZAIAUQAGASAOANQANAMASAGQARAGAWAAQAPAAAUgFQAUgFASgJIABAZQgQAJgVAEQgUAEgQAAQgbABgXgIg");
	this.shape_1.setTransform(189.6,172.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2BxQgQgHgKgNQgKgNgFgQQgEgRAAgSIAAiVIAZAAIAACQQAAAQAEAMQADAOAHAKQAHAKAMAFQAMAGARAAQARAAAQgHQAQgHAMgOQAMgOAHgTQAHgWAAgZIAAhtIAZAAIAADqIgYAAIAAgyIgBAAQgQAcgPAKQgMAJgOAEQgPAFgSABQgXgBgQgHg");
	this.shape_2.setTransform(164,172.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyByQgXgJgQgSQgPgQgJgXQgIgXAAgZQAAgYAIgXQAJgWAPgRQAQgSAXgJQAXgKAbABQAcgBAXAKQAWAJARASQAPARAIAWQAJAXAAAYQAAAZgJAXQgIAXgPAQQgRASgWAJQgXAKgcgBQgbABgXgKgAgqhbQgSAHgMAPQgMAOgGASQgFARAAAUQAAAUAFASQAGASAMAOQAMAOASAHQATAJAXAAQAYAAATgJQASgHAMgOQALgOAGgSQAGgSAAgUQAAgUgGgRQgGgSgLgOQgMgPgSgHQgTgIgYAAQgXAAgTAIg");
	this.shape_3.setTransform(134.2,172.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAACVQgJgGgFgOQgFgMgBgVIgCgwIAAhsIgxAAIABgYIAwAAIAAhHIAYAAIAABHIBFAAIgBAYIhEAAIAAB7QAAApAFAMQADAIAGAEQAGAFALAAQAWAAAQgGIAAAXQgQAGgaAAQgRAAgMgHg");
	this.shape_4.setTransform(111.8,168.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAACVQgJgGgFgOQgFgMgBgVIgCgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIAAAYIhFAAIAAB7QAAApAFAMQADAIAGAEQAGAFALAAQAWAAARgGIAAAXQgQAGgbAAQgRAAgMgHg");
	this.shape_5.setTransform(57.1,168.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVC1IAAjTIgwAAIAAgXIAwAAIAAgzQAAgVAEgQQADgOAIgJQAGgJALgDQAKgEANAAQAUAAAQAEIAAAZQgPgFgUAAQgSAAgHAMQgHALAAAdIAAAzIA2AAIgBAXIg1AAIAADTg");
	this.shape_6.setTransform(41.7,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCsIAAjqIAZAAIAADqgAgOiIQgGgFAAgKQABgIAEgGQAFgGAKgBQAJABAGAGQAGAGAAAIQAAAKgGAFQgGAHgJAAQgJgBgFgGg");
	this.shape_7.setTransform(27.3,166.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7B4IAAjqIAaAAIAAAyIABAAQAMgXAQgOQAJgJALgEQANgGANABIASACIgBAbQgKgDgLAAQgQAAgNAHQgMAIgKAOQgJANgGARQgFASAAATIAAB1g");
	this.shape_8.setTransform(13.3,171.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOBTIAAhNIhFAAIAAgXIBFAAIAAhBIAYAAIAABBIBKAAIAAAXIhKAAIAABNg");
	this.shape_9.setTransform(85.2,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(1.3,134.9,231.2,62.8), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AapIYQhjgdhQhDIBZh4QAyAnA4AWQAoAPAoAEQAmAGAmgGQAagCAZgMQATgIAOgQQAKgPADgSQABgTgKgRQgMgSgUgKQgZgQgagGIhBgQQgxgLgygOQgygSgpgiQgmgggOgwQgQg0AOg0QALgrAdgiQAlguA5gWQAqgRAsgHQA5gHA8AJQBmAQBWA9IhVByQg0ggg+gNQgogIgqADQgVACgTAIQgPAFgLALQgLAGgFAKQgHAJgBALQgDAWANAQQARARAWAJQATAHAWAHIAwAKIA3AOQAbAIAbAKQAxATAmAfQAoAhAVAzQAOAtgHAvQgHA5gkAuQgbAigmAYQgzAdg8AKQgtAHgugBQg6gCg4gQgAuhIqQg4gDgzgSQg1gSgrggQgsghghgtQgegtgRg1QgQgzgDg2QgCg3ALg2QALg1AaguQA0hkBngxQAxgYA1gGQA3gLA2AIQBvAKBYBGIhnCAQgzgig9gIQghgEgjAGQgZADgZANQg6AWgeA4QgNAbgHAeQgFAfACAdQABAeAKAeQAIAcASAZQAmAzA6AUQAeAIAeACQAeAAAdgGQA8gOAugqIB0B5QgnAngvAaQgwAZg2ALQgqAJgqAAIgXAAgA9zIMQhEgcgzg0Qg1g3gZhDQgahEAAhKQAAhKAahEQAchCAzg3QA0g0BEgZQBEgbBJAAQBKAABEAbQBCAbA1A2QA0A0AZBDQAbBFAABKQAABJgcBDQgZBFg0A2Qg0A0hFAbQhEAahJAAQhJAAhEgbgA8OgTQgTAEgTAJQgSAGgRAKQgQAKgNAOQgNANgLAPQgLATgHARQgHATgDAVQgFAUgBAWQAAAXAEAUQAEAUAIAUQAHASAKASQALAQAMANQAOAMARANQAQAJASAIQASAHAVAEQATAFAVgBQAVABAVgFQAUgEATgGIAjgSQAPgLAOgNQANgOALgQQAKgRAHgRQAIgVADgUQAFgUAAgXQAAgUgFgWQgDgWgIgRQgHgSgKgRQgLgRgNgNQgMgOgQgLQgRgKgRgGQgUgIgUgEQgUgEgWAAQgVAAgUADgAPKIiQhKgHg8gmQg6gmgkhFQgQghgIghQgIgjgDgkIgDg8IgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAHAkARAfQAXAmAmASQAmASApgCQAsABAmgTQAlgSAYglQATgeAGgjQADgSACgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICoAAIAALBIiTAAIgEhFQgaAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAkIIiQhKgHg7gmQg7gmgkhFQgQghgIghQgIgjgCgkQgDgegBgeIgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAGAkASAfQAXAmAnASQAlASAqgCQArABAngTQAkgSAYglQAUgeAFgjQAEgSABgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICnAAIAALBIiSAAIgFhFQgZAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAFeIWIAAw/ICpAAIAAQ/g");
	this.shape.setTransform(-171.2,321.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(-384.3,266.3,426.3,110.9), null);


(lib.logo_LoneEcho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#278A90").s().p("AEJIpIBdheIA/AAIhdBegAqeGsIBeheIA+AAIhdBegAIDnKIBdheIA/AAIhdBegAoFnKIBdheIA/AAIhdBeg");
	this.shape.setTransform(692,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#518D6B").s().p("AB0IqIBghhIA/AAIhgBhgAscIqIBghhIA/AAIhgBhgAGDGsIBehfIA+AAIhdBfgAsvGsIBehfIA/AAIheBfgAIYlPIBehdIA/AAIheBdgAqBlPIBeheIA+AAIhdBegAKTnLIBeheIA/AAIheBegAqWnLIBeheIA+AAIhdBeg");
	this.shape_1.setTransform(692.1,83.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2EC6C9").s().p("AG/IqIDcjcIA/AAIjcDcgAvqIqIDcjcIA/AAIjcDcgALSlPIDajaIA/AAIjaDagAtOlPIDZjaIA/AAIjZDag");
	this.shape_2.setTransform(686.1,83.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6A6E74").s().p("AhkGnQBYhXAuhvQAuhvABh7QgBh5gshtQgohlhLhSIAOgOQBNBVAqBoQAuBxABB9QAABUgWBQQgWBPgpBIQgpBHg9A8g");
	this.shape_3.setTransform(1382.2,84);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(706.7,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_LoneEcho, new cjs.Rectangle(0,0,1413.4,165.6), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIgCADIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(147,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAWIgIgCIACgGIAGADIAIABIAEgBIADgBIADgDIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDgCIgIgDQgHgBgCgBIgDgDIgBgFQAAgDABgDQABgCADgCIAFgCIAEgBIAIABIAHADIgCAFIgGgDIgHgBQgDAAgDACIgCACIgBAEIABADIADACIAIADIAFABIAEABIADADIACAFQAAAEgCADIgEAEIgFACIgGABIgIgBg");
	this.shape_1.setTransform(143.7,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAVQgDgBgCgDIgDgFIgBgHIAAgaIAGAAIAAAZIAAAFIACAEIAEADIAFABIAFgBIAFgDQACgDABgEIABgHIAAgUIAGAAIAAAqIgFAAIAAgJIgBAAIgFAHIgFACIgFABQgEAAgDgBg");
	this.shape_2.setTransform(139.1,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_3.setTransform(135.5,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAWQgFgCgDgDQgDgCgCgFIgCgKIACgJIAFgHQADgDAFgBQADgCAFAAIAHABIAGADIAAAFIgHgDIgGgBIgHABIgFAEQgCACgCADQgBAEAAADQAAAFABADQACADACADQACACADABIAHABIAGgBIAHgCIAAAFIgGACIgHABIgIgBg");
	this.shape_4.setTransform(132.2,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIAAgaIgBgFIgCgEIgDgCIgFgBQgDAAgCABIgGADQgCADgBADQgCADABAEIAAAVIgGAAIAAgqIAGAAIAAAJIACgEIAEgDIAEgCIAGgBQADAAAEABIAEAEQACACABADIABAHIAAAag");
	this.shape_5.setTransform(127.3,8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_6.setTransform(123.6,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOAWIAAgaIgBgFIgCgEIgDgCIgFgBQgDAAgCABIgGADQgCADgBADQgBADAAAEIAAAVIgGAAIAAgqIAGAAIAAAJIACgEIAEgDIAFgCIAFgBQADAAADABIAGAEQACACAAADIABAHIAAAag");
	this.shape_7.setTransform(117.6,8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAVIgHgFQgCgDgCgEQgCgEABgFQgBgEACgEQACgEACgDQAEgDADgCIAJgCIAJACQAFACACADQADADACAEQABAEABAEQgBAFgBAEQgCAEgDADIgHAFIgJACIgJgCgAgHgPQgDABgCADIgDAFIgBAGIABAHIADAGQACACADABQADACAEAAQAEAAADgCQADgBADgCIADgGIABgHIgBgGIgDgFIgGgEQgDgCgEAAQgEAAgDACg");
	this.shape_8.setTransform(112.3,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AANAWIAAgaIAAgFIgCgEIgDgCIgFgBQgDAAgCABIgFADQgDADgBADQgCADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAEgEIADgDIAFgCIAEgBQAFAAADABIAFAEQABACABADIABAHIAAAag");
	this.shape_9.setTransform(107,8.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAVIgNgTIgNATIgGAAIARgVIgQgUIAHAAIALAQIAMgQIAHAAIgQAUIARAVg");
	this.shape_10.setTransform(99.9,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAVQgDgBgCgDIgDgFIgBgHIAAgaIAGAAIAAAZIAAAFIACAEIAEADIAFABIAFgBIAFgDQACgDABgEIABgHIAAgUIAGAAIAAAqIgFAAIAAgJIgBAAIgFAHIgFACIgFABQgEAAgDgBg");
	this.shape_11.setTransform(95.1,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_12.setTransform(90.1,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIArIAAgGIAGABIACgBIABgCIABgIIAAgwIAGAAIAAAxIgBAHIgCAFIgDADIgEAAIgGAAgAACgjQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgDIADgBIADABIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_13.setTransform(86,8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAWIgIgCIACgGIAGADIAIABIAEgBIADgBIADgDIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDgCIgIgDQgHgBgCgBIgDgDIgBgFQAAgDABgDQABgCADgCIAFgCIAEgBIAIABIAHADIgCAFIgGgDIgHgBQgDAAgDACIgCACIgBAEIABADIADACIAIADIAFABIAEABIADADIACAFQAAAEgCADIgEAEIgFACIgGABIgIgBg");
	this.shape_14.setTransform(81,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AANAWIAAgaIAAgFIgCgEIgDgCIgFgBQgDAAgCABIgFADQgDADgBADQgCADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAEgEIADgDIAFgCIAEgBQAFAAADABIAFAEQABACABADIABAHIAAAag");
	this.shape_15.setTransform(76.4,8.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_16.setTransform(72.7,7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAWIgFgDQgDgBgBgDQgBgDAAgEIABgGIADgDIAGgCIAGgBIAQACIAAgEIgBgEIgDgEIgEgCIgFgBIgIABIgHADIgBgGIAIgCIAIgBIAHABIAGADIAEAFQABAEAAAEIAAAbIgFAAIAAgKIgBAAIgDAFIgEADIgFACIgEABIgFgBgAgGABIgEABIgCADIgBADIABAFIACADIAEABIAEABIAFgBIAFgDQADgCABgDIACgIIgPgBg");
	this.shape_17.setTransform(69,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIADACIACABIAIgBIAAAFIgIABIgGgBg");
	this.shape_18.setTransform(65.1,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLAWIAAgqIAGAAIAAAJIABAAQABgEADgDIAEgCIAEgBIAEAAIgBAGIgEgBIgFACIgDAEIgDAFIgBAGIAAAVg");
	this.shape_19.setTransform(62.1,8.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_20.setTransform(57.8,8.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBAhIgHgCIgHgCIgEgFIgEgEIgCgHIgBgGIgBgHIABgGIABgHIACgFIAEgGIAEgDIAHgEIAHgCIAGAAIAMABQAGABAFACIAAAGQgGgCgFgBIgMgCIgFABIgGACIgFACIgEADIgCAFIgCAEQgDAIAAADQABAIACAEIACAFIACADIAEAEIAFADIAGABIAFABIAMgBIALgFIAAAGQgFADgGAAQgFACgHAAIgGgBg");
	this.shape_21.setTransform(52.1,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(46.7,0,103.6,14.8), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgDACAAQADAAACADQACACAAACQAAADgCACQgCADgDAAQgCAAgCgDg");
	this.shape.setTransform(743.8,-31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAiQgHgCgEgEQgGgEgCgIQgCgEgBgMQAAgGADgKQADgHAFgFQAEgEAHgCQAFgCAGAAQAIAAAFACQAGACAEAEQAEAFADAHQACAHAAAJIAAAEIg4AAQABAGACAFQABAFAFADQADADAFABIALACIAMgCIANgEIAAAJIgNADIgMACQgIAAgHgDgAAYgDQAAgGgBgFQgCgEgDgDQgDgEgFgCQgEgBgFAAIgIABQgEACgDADQgEADgCAEQgDAFAAAHIAvAAIAAAAg");
	this.shape_1.setTransform(737.4,-34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAyQgHgCgEgEQgGgEgCgIQgCgEgBgMQAAgHADgJQADgHAFgFQAEgEAGgCQAGgCAGAAQAIAAAFACQAGACAEAEQAFAFACAHQACAGAAAJIAAAFIg4AAQABAGACAFQABAFAFADQADADAFABIALACIAMgCIANgEIAAAJIgNADIgMACQgIAAgHgDgAAYAMQAAgGgBgFQgCgDgDgDQgDgEgFgCQgEgBgFAAIgIABQgEACgDADQgEADgCADQgDAFAAAHIAvAAIAAAAgAgCgcIAPgYIAKACIgTAWg");
	this.shape_2.setTransform(728.8,-36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAtQgCgCgCgEIgCgKIgBgOIAAgfIgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIAVAAIAAAIIgVAAIAAAjQAAALACAEIACAEIAGABQAGAAAFgCIAAAIQgFACgIAAQgGAAgDgCg");
	this.shape_3.setTransform(721.6,-35.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDA0IAAhGIAIAAIAABGgAgEgnQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgCACgDAAQgCAAgCgCg");
	this.shape_4.setTransform(716.9,-36.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAtAkIAAgrIgBgHQAAgEgCgDQgCgDgDgCQgEgBgEAAQgFAAgFACQgEACgEADIgFAJIgCAJIAAAmIgIAAIAAgrIAAgHQgBgEgCgDQgCgDgDgCQgEgBgFAAQgFAAgEABQgFACgDAEQgDAEgCAFQgBAGAAAGIAAAjIgJAAIAAhGIAIAAIAAAPIABAAIAEgHIAFgEQAEgDAEgBIAIgBIAJABQAEABADADIADAFIADAIQACgEADgDIAGgGIAIgEIAJgBQAGAAAFACQAEACADAEQADADABAGQABAFAAAFIAAAsg");
	this.shape_5.setTransform(708,-34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDA0IAAhGIAIAAIAABGgAgEgnQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgCACgDAAQgCAAgCgCg");
	this.shape_6.setTransform(699.2,-36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA3IAAhtIAJAAIAABtg");
	this.shape_7.setTransform(695.2,-36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAiQgHgCgFgEQgEgEgEgIQgBgEgBgMQAAgGADgKQADgHAEgFQAFgEAGgCQAGgCAHAAQAGAAAGACQAGACAEAEQAEAFACAHQADAHAAAJIAAAEIg4AAQABAGABAFQACAFAEADQAEADAFABIAKACIANgCIAMgEIABAJIgMADIgOACQgHAAgHgDgAAYgDQAAgGgCgFQgBgEgDgDQgDgEgEgCQgEgBgGAAIgIABQgEACgEADQgDADgCAEQgCAFgBAHIAvAAIAAAAg");
	this.shape_8.setTransform(684.7,-34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOA1QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgHQADgGAFgFQAFgEAGgDQAGgCAHAAIAIABIAIADQAFADAHAIIAAgOIAAgnIAJAAIAABtIgJAAIAAgOIgGAHIgHAFIgHADIgIABQgHAAgGgDgAgKgHQgFACgDADQgEADgCAFQgCAGAAAHQAAAGACAGQACAFAEAEQADAEAFABQAFACAFAAQAGAAAFgCQAFgCAEgEQAEgEACgFQACgGAAgGQAAgGgDgFQgCgFgEgDQgEgEgFgCQgFgCgFAAQgFAAgFACg");
	this.shape_9.setTransform(675.3,-36.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAiQgGgDgFgFQgFgFgCgHQgDgGAAgIQAAgHADgGQACgIAFgFQAFgEAGgDIAPgDQAGAAAKADQAGADAFAEQAFAFACAIQADAGAAAHQAAAIgDAGQgCAHgFAFQgFAFgGADQgKADgGAAQgKgBgFgCgAgLgaQgFADgEADQgDAEgCAFQgCAGAAAFQAAAGACAFQACAFADAEQAEAEAFACQAFACAGABQAHgBAFgCQAGgCADgEIAFgJQACgFAAgGIgCgLIgFgJQgDgDgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_10.setTransform(666,-34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDA0IAAhGIAIAAIAABGgAgEgnQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgCACgDAAQgCAAgCgCg");
	this.shape_11.setTransform(659.3,-36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRAkIAAhGIAIAAIAAAPIAAAAQAEgHAFgEIAFgEIAIgBIAFAAIAAAKIgHgBQgEAAgFACQgCACgDAEQgDAEgCAFQgBAFAAAFIAAAjg");
	this.shape_12.setTransform(654.8,-34.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKAyQgHgCgEgEQgGgEgCgIQgCgEgBgMQAAgHADgJQADgHAFgFQAEgEAHgCQAFgCAGAAQAIAAAFACQAGACAEAEQAEAFADAHQACAGAAAJIAAAFIg4AAQABAGACAFQABAFAEADQAEADAFABIALACIAMgCIAMgEIABAJIgNADIgMACQgIAAgHgDgAAYAMQAAgGgBgFQgCgDgDgDQgDgEgFgCQgEgBgFAAIgIABQgEACgEADQgDADgCADQgDAFAAAHIAvAAIAAAAgAgCgcIAPgYIAKACIgTAWg");
	this.shape_13.setTransform(647.3,-36.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjA2IAAhpIAJAAIAAAOIAAAAIAFgHIAHgFIAIgDIAIgBQAIAAAGADQAGACAFAFQAEAFACAGQADAHAAAJQAAAJgDAHQgCAFgEAFQgFAFgGADQgGACgIAAIgIgBIgIgDIgHgFIgFgHIAAAAIAAAOIAAAkgAgKgrQgFADgEAEQgDAEgCAFQgCAFAAAGQAAAGACAGQABAEAFAEQADAEAGACQAFACAFAAQAGAAAFgCQAEgCAEgEQADgDADgFQABgFAAgHQAAgHgBgFQgDgFgDgEQgEgEgEgCQgFgCgGAAQgGAAgFACg");
	this.shape_14.setTransform(638.3,-33.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKAiQgHgCgFgEQgFgEgDgIQgBgEgBgMQAAgGADgKQADgHAEgFQAFgEAGgCQAGgCAHAAQAGAAAGACQAGACAEAEQAEAFACAHQADAHAAAJIAAAEIg4AAQAAAGACAFQADAFAEADQADADAFABIAKACIANgCIANgEIAAAJIgMADIgOACQgHAAgHgDgAAYgDQAAgGgCgFQgBgEgDgDQgDgEgEgCQgFgBgFAAIgIABQgEACgDADQgEADgCAEQgDAFAAAHIAvAAIAAAAg");
	this.shape_15.setTransform(624.7,-34.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWAkIAAgrIgBgIIgDgGIgFgFQgEgBgFAAIgJABQgEACgEAEQgEAEgCAFQgCAGAAAGIAAAjIgJAAIAAhGIAJAAIAAAPIAAAAIAEgGIAGgFIAIgEIAIgBQAHAAAFACQAFACADADQADAEABAFQACAFAAAGIAAAsg");
	this.shape_16.setTransform(615.9,-34.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAiQgFgCgDgEQgDgEgBgFIgBgLIAAgrIAIAAIAAAqIABAIIADAHIAGAEQADACAFAAQAFAAAEgCQAFgCADgEQAEgEACgGQACgGAAgGIAAghIAIAAIAABFIgIAAIAAgPQgGAJgEADIgHAEQgFABgEAAQgHAAgFgCg");
	this.shape_17.setTransform(606.9,-34.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAtQgCgCgCgEIgCgKIgBgOIAAgfIgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIAVAAIAAAIIgVAAIAAAjQAAALACAEIACAEIAGABQAGAAAFgCIAAAIQgFACgIAAQgGAAgDgCg");
	this.shape_18.setTransform(595.3,-35.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWAkIAAgrIgBgIIgDgGIgFgFQgEgBgFAAIgJABQgEACgEAEQgEAEgCAFQgCAGAAAGIAAAjIgJAAIAAhGIAJAAIAAAPIAAAAIAEgGIAGgFIAIgEIAIgBQAHAAAFACQAFACADADQADAEABAFQACAFAAAGIAAAsg");
	this.shape_19.setTransform(588.1,-34.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAjIgIgEQgEgDgCgEQgCgFAAgGQAAgFACgEQACgEAEgCIAIgEIALgBIAZACIAAgFQAAgEgBgEIgEgGIgHgDIgJgBIgMACIgNADIAAgIIANgDIANgCQAHAAAFACQAFABAEAEQAEADACAFQACAFAAAGIAAAtIgIAAIAAgPIgBAAQgCAFgDADIgHAFIgIADIgHABQgFAAgEgCgAgKABIgGACQgDACgBACQgBADAAAEQAAAEABADIAEAEQACACAEABIAHABQAEAAAEgCQAFgBADgEQAEgDADgFQACgFABgHIgZgCg");
	this.shape_20.setTransform(579,-34.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOA1QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgHQADgGAFgFQAFgEAGgDQAGgCAHAAIAIABIAIADQAFADAHAIIAAgOIAAgnIAJAAIAABtIgJAAIAAgOIgGAHIgHAFIgHADIgIABQgHAAgGgDgAgKgHQgFACgDADQgEADgCAFQgCAGAAAHQAAAGACAGQACAFAEAEQADAEAFABQAFACAFAAQAGAAAFgCQAFgCAEgEQAEgEACgFQACgGAAgGQAAgGgDgFQgCgFgEgDQgEgEgFgCQgFgCgFAAQgFAAgFACg");
	this.shape_21.setTransform(569.9,-36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWAkIAAgrIgBgIIgDgGIgFgFQgEgBgFAAIgJABQgEACgEAEQgEAEgCAFQgCAGAAAGIAAAjIgJAAIAAhGIAJAAIAAAPIAAAAIAEgGIAGgFIAIgEIAIgBQAHAAAFACQAFACADADQADAEABAFQACAFAAAGIAAAsg");
	this.shape_22.setTransform(560.7,-34.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKAiQgHgCgEgEQgGgEgCgIQgCgEgBgMQAAgGADgKQADgHAFgFQAEgEAGgCQAGgCAGAAQAIAAAFACQAGACAEAEQAEAFADAHQACAHAAAJIAAAEIg4AAQABAGACAFQABAFAFADQADADAFABIALACIAMgCIANgEIAAAJIgNADIgMACQgIAAgHgDgAAYgDQAAgGgBgFQgCgEgDgDQgDgEgFgCQgEgBgFAAIgIABQgEACgDADQgEADgCAEQgDAFAAAHIAvAAIAAAAg");
	this.shape_23.setTransform(552,-34.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjA1IAAhpIAmAAQAIAAAGACQAGADAFAEQAEAFACAGQACAGAAAHQAAAIgCAGQgCAFgEAEQgFAFgGACQgGADgIAAIgdAAIAAAngAgaAFIAdAAQAGAAAFgCQAEgBADgDQADgDABgFQACgEAAgGQAAgFgCgFIgEgIQgDgDgEgCQgFgCgGAAIgdAAg");
	this.shape_24.setTransform(543,-36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(533.7,-49.5,217.1,26), null);


(lib.hardware_touch_RT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.hardware, null, new cjs.Matrix2D(0.78,0,0,0.78,-33.9,-107)).s().p("AlSE/IAAp9IIHAAIAABiICeAAIAAIbg");
	this.shape.setTransform(33.8,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_RT, new cjs.Rectangle(-0.1,-1.1,67.8,63.8), null);


(lib.hardware_touch_LT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.hardware, null, new cjs.Matrix2D(0.78,0,0,0.78,-184.2,-108.9)).s().p("AjwEsIAApXIHhAAIAAJXg");
	this.shape.setTransform(21.9,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_LT, new cjs.Rectangle(-2.2,-3.3,48.2,60.1), null);


(lib.hardware_rift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.hardware, null, new cjs.Matrix2D(0.78,0,0,0.78,-120.8,-46.5)).s().p("AoRHSIAAg9IhxAAIAAg1IhhAAIAAsxIXHAAIAAL9ImHAAIAACmg");
	this.shape.setTransform(66.6,46.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_rift, new cjs.Rectangle(-7.4,-0.3,148,93.1), null);


(lib.game_wilsons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_7_wilson();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_wilsons, new cjs.Rectangle(0,0,131,131), null);


(lib.game_unspoken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_1_unspoken();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_unspoken, new cjs.Rectangle(0,0,131,131), null);


(lib.game_superhot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_4_superhot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_superhot, new cjs.Rectangle(0,0,131,131), null);


(lib.game_startrek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_3_startrek();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_startrek, new cjs.Rectangle(0,0,131,131), null);


(lib.game_roborecall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_5_roborecall();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_roborecall, new cjs.Rectangle(0,0,131,131), null);


(lib.game_rickmorty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_6_rickmorty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_rickmorty, new cjs.Rectangle(0,0,131,131), null);


(lib.echo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.echo2, null, new cjs.Matrix2D(1,0,0,1,-100.6,-119.2)).s().p("AuCRyIAIgEQAqgVAvgCIAXgBQAMgBAKgDIAGgCQAMgDAOgGQAggUARgHQAMgFAWgFIAigJQAKgEAmgUQAegPATgDIAcgDQAOgCAKgFIAEAAQAXgDAQgHQAIgDALgIIATgLQAYgIAMgGIAUgMQAXgJAKgHQAMgJAGgOQAFgLABgKIACgFQAHgMABgOQgBgOgGgMQgKgVgkgVQgcgQgkgRIgXgKQgMgHgIgGIgNgNQgIgIgHgDQgFgDgLgCIgQgEQgKgDgUgNIgngcQgZgTgOgGIgMgFQgOgJgUgGQgagKgUACIgUAGQgMADgHAAQgIgBgOgGIhYghQgbgJgdgEIgGgVIgMggQgGgLgJgIQgCgIgDgGIgEgGIABgKQAAgMgCgNIgHgYQgIgVgGgIIgGgHQgBgDAAgJQABgUgBgUQgBgSgCgFQgEgMgNgNIgBgBIgCgGQABgFADgHQADgHADgDIAJgEQALgEALgHIAOgJQANADAQAAIAhAAQAPAAAGADQAPAEAQAWQAQAZAJAHQANAMASACIAIAAIAKABQAhAAASABIAYADIAHAGQAYAXATAPQALAJALAHQAIAgAZA3QAJATAHAJQALAPAUALQANAGAbAKQA+AWAdAFQAZAFAFADQAHADAHAGIANAJQALAJAZANQArAWAXADQATABAQgGIAHgDIABgBQAMgDAJgKQAJgJAEgMQABgHAAgHIABgBQAFgJAFgSIARg6QADgIADgDIAJgIQAJgKADgTIACggIAEgRIAAgEIACgVQAAgfgHgaIgFgUQABgPAAgYIAAhWQAAgUABgJIAHgVIAIgXIAEgPIADgGQAGgMAAgZQAAgSgDgVIAAgCIADgDQAQgLARgeQAMgXADgPIAEgTIAIgSQACgGADgPQADgUACgOQAJgPABgVQAAgKgBgIQgBgIgCgIQgCgFgDgEQgEgIgIgGQgOgLgaAAQgUAAghAHIgPAFIgDAAQgXAGgQAYQgIANgLAhQgRACgbALQgfAOgNADIgWAEIgGACQgNgFgVAAQgNABgKACIgLgMQgIgHgHgFIAAgBQAFgNgDgNIgCgHQgEgOgMgJIgFgCIgGgGIgfgdIgdgeIgwgrIgMgJQgGgIgKgLIgvgvQgNgMgKgJIgVgSIgLgMIgJgKIgKgQIgTgfQgVglgIgaIgBgEIgDgaQgBgLAAgaQABgYgBgNIgDgWIADgXQABgTACgGQACgJAJgPIAMgVQARgdACgSIABgFQAKgLAFgOQAJgKADgOIACgJQALgNAggUIA3ghQAYgOAQgMQAbgXAQgJQAJgFAVgIIA1gUQARgHALgGIAQgEQAUgFAegBIAygDIAUgDIAUAHQAXAIAMADQASAEAOAAIAIAGQALAHAbANIADACIAPALIBlBbQARAPAMAIIAGADIADAEQACAIAFAIQAGAKAOAKIALAHIABAGQADAKAHAJIgBAIIAAAJIgCAGQgEAJABAJQgCAIAAAJQACARALANIAIAHIgDAIIgBAMIgCACQgIAGgFAKIgDAGQgFAQAFAPIACAGIAAABQgFAPAEAPQACAGAEAFIgBAPQgLAHgFALQgIAOABAWQgBAWAEANQAFAMAPARQAVAbARAFQAIADALgBIAGAGQALAIANACQAOACAUgFIAjgHIAKgBQAHAHAJADIAUAHIARAKIAvAZQAjASAdAVIADADQAHAKANAPIAvA3QALAMAJAIQAEAEAFAEIAMAFQAIADAGAAIAEABIAMAAQAiAAAIABQAQAEAJAAQASgBAJACIAXALQALAHALADIAGAGQANAOANASIAuBPQACAUANAbQANAcAOAXIAVAoIASApIARAZQAMAUAPAsQAKAWALANIAACrQgEAFgCAGIgHAUIgKASQgEAJgBASQgBAKgIAQIgOAaQgLASgEAJIgIAXIgIARIgCAHQgIAIgIANQgGAMgGAFIgOAJQgbASgcAsQgKAPgEANIgHAGQgXAZgLAZQgIAUgCAQQgGAMgBATQAAAZAHAXQAFAWALAPIgMAOIgHAJIgOAIQgOAJgXAWQgaAWgMAJIgUANQgMAIgHAGQgHAGgMAPQg3BGgUApIgCAHg");
	this.shape.setTransform(97.4,113.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo2_mc, new cjs.Rectangle(0,0,194.7,227.6), null);


(lib.echo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.echo1, null, new cjs.Matrix2D(1,0,0,1,-64.6,-131.5)).s().p("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");
	this.shape.setTransform(63.4,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo1_mc, new cjs.Rectangle(0,0,126.8,263), null);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_2.setTransform(63.3,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAA0QgEgCgCgEQgCgEgBgIIAAgQIAAgiIgRAAIAAgMIARAAIAAgaIAMAAIAAAaIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_3.setTransform(56.3,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_4.setTransform(48.4,-4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(41.5,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJArIgJgDQgHgDgGgHQgGgFgCgIQgDgIAAgJQAAgHADgJQACgHAGgGQAGgGAHgDIAJgDIAJgBQAHAAALAEQAIADAGAGQAFAGADAHQADAJAAAHQAAAJgDAIQgDAIgFAFQgGAHgIADQgLADgHAAgAgMgbQgFADgEAEQgDAEgCAGQgCAFAAAFQAAAGACAGQACAFADAEQAEAEAFADQAGACAGAAQAHAAAGgCQAFgDAEgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgEgEgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_6.setTransform(34.4,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA/IAAh6IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgBQAJAAAIACQAHAEAFAFQAFAGADAIQADAIAAAKQAAAJgDAJQgDAGgFAGQgFAGgHADQgIACgJAAIgJgBQgEAAgEgDIgHgGIgGgHIgBAAIAAAPIAAAqgAgLguQgFACgEAEQgEAFgCAFQgCAFAAAHQAAAGACAGQACAGAEACQAEAFAGACQAFACAFAAQAHAAAFgCQAFgCAEgEQAEgDABgGQACgFAAgHQAAgHgCgGQgBgGgEgEQgEgDgFgDQgFgCgHAAQgFABgGACg");
	this.shape_7.setTransform(24.2,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA/IgPgEIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgDQAEgEACgFQACgHABgIIAAgQIAAAAQgJAKgFADQgEADgFAAIgJABQgHAAgIgCQgHgDgGgGQgFgGgDgGQgDgJAAgJQAAgKADgIQADgIAFgGQAGgFAHgEQAIgCAHAAIAJABQAEABAEACIAIAFIAHAIIAAAAIAAgPIAOAAIAABQIgBALIgDAJIgEAIIgFAGQgHAFgIADQgIACgJAAIgRgBgAgLgwQgFADgDADQgEAEgCAGQgCAGAAAHQAAAHACAFQACAGAEADQADAEAFACQAGACAFAAQAGAAAGgCQAFgCAEgFQADgCADgGQACgGAAgGQAAgHgCgFQgCgFgEgFQgEgEgFgCQgFgCgHgBQgFAAgGACg");
	this.shape_9.setTransform(-0.8,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-8,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA0QgDgCgDgEQgCgEgBgIIgBgQIAAgiIgQAAIAAgMIAQAAIAAgaIAOAAIAAAaIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_12.setTransform(-27.3,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_13.setTransform(-34.3,-4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAHAAQAJAAAHADQAGACAFAFQAFAGADAIQADAIAAAKIAAAGIg/AAQABAGADAFQACAFADADQAFADAFABQAFABAGAAIAOgBQAIgBAHgDIABANQgHACgJACIgOABQgKAAgHgCgAAZgFQAAgGgDgFQgBgEgDgEQgDgDgFgBQgDgCgGAAQgEAAgFACQgEABgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAIAAQAIAAAGADQAHACAGAFQAEAGADAIQADAIAAAKIAAAGIg+AAQAAAGACAFQADAFAEADQADADAGABQAFABAGAAIAPgBQAHgBAGgDIACANQgGACgJACIgPABQgJAAgJgCgAAYgFQAAgGgCgFQgBgEgDgEQgDgDgEgBQgFgCgFAAQgEAAgEACQgFABgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_17.setTransform(-74.7,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-18.2,163.2,24.4);


(lib.Tween7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAhQgHgCgFgFQgEgEgDgHQgBgEgCgLQABgFACgKQADgGAEgFQAFgEAHgCQAHgCAHgBIALACIAMADIgCALQgEgDgHgBIgKgBQgFAAgEACQgFABgDADQgDADgBAFQgDAEAAAGQAAAGADAFQABAEADADQADAEAFABQAEACAFAAIAKgCQAHgBAEgCIACALQgFACgHABIgLABQgHAAgHgCg");
	this.shape.setTransform(97,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_1.setTransform(89.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_2.setTransform(82.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_3.setTransform(74.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_4.setTransform(64.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAwQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgGACgJQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgBQAGgCAGgCIAAALIgMADIgMABQgIAAgGgCgAAVAKIgCgJQgBgDgDgDIgGgDIgIgBIgGABIgHADIgFAGQgCAEAAAFIAoAAIAAAAgAgCgbIAOgXIALACIgSAVg");
	this.shape_5.setTransform(57.1,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAArQgDgBgCgEIgCgKIAAgNIAAgcIgOAAIAAgKIAOAAIAAgVIAKAAIAAAVIATAAIAAAKIgTAAIAAAeQAAAKABAEIAEADIAEABIAKgCIAAAKQgGACgHAAQgFAAgEgCg");
	this.shape_6.setTransform(50.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_7.setTransform(46.6,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_8.setTransform(43.3,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_9.setTransform(37.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJAwQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgGADgJQACgGAEgFQAFgEAHgCQAFgCAGgBQAHABAGACQAFACAEAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGACAEQABADADADQADACAFACIAJABIAMgBQAHgCAEgCIABALIgMADIgMABQgHAAgHgCgAAUAKIgBgJQgCgDgCgDIgGgDIgIgBIgHABIgGADIgFAGQgCAEAAAFIAnAAIAAAAgAgDgbIAOgXIAMACIgSAVg");
	this.shape_10.setTransform(30,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAiIAAhBIALAAIAAAMIAAAAQAEgGADgEIAHgDQACgCAFAAIAFACIAAALIgIgBQgDAAgFACQgDACgBADIgFAIIgBAIIAAAhg");
	this.shape_11.setTransform(23.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_12.setTransform(14.1,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_13.setTransform(7.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_14.setTransform(1.6,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_15.setTransform(-1.7,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAEgFQAFgEAHgCQAGgCAFgBQAIABAFACQAFACAFAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_16.setTransform(-7.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_17.setTransform(-14.6,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAgQgEgCgDgEQgDgDgBgFQgBgFAAgGIAAgoIAMAAIAAAmIAAAIQABADACADQACACADACQADABAEAAQADAAAFgCQADgCADgDIAFgJQABgEAAgGIAAgfIAMAAIAABBIgLAAIAAgMIgBAAQgFAIgEACIgHADIgHABQgHAAgFgCg");
	this.shape_18.setTransform(-22.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAiIgHgCQgGgCgGgFQgEgFgCgGQgDgHAAgHQAAgHADgGQACgHAEgEQAGgFAGgCIAHgDIAHgBQAGABAJADQAGACAFAFQAFAEACAHQACAGAAAHQAAAHgCAHQgCAGgFAFQgFAFgGACQgJADgGAAgAgKgWQgEACgDADQgCAEgCAEQgCAEABAFQgBAFACAEIAEAIQADAEAEACQAFACAFAAQAGAAAFgCQAEgCADgEIAEgIQABgEAAgFQAAgFgBgEQgCgEgCgEQgDgDgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(-30.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAiIAAgnIgBgHIgCgGQgCgDgDAAQgDgCgEAAQgEAAgEACQgEABgDADIgFAIQgCAGAAAEIAAAhIgMAAIAAhBIAMAAIAAAMIAAAAIAFgGIAFgEIAHgDIAIgCQAGABAFACQAEACADADQADAEABAEQACAGAAAFIAAApg");
	this.shape_20.setTransform(-38.5,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_21.setTransform(-49.9,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAzQgGgDgEgFQgEgEgDgHQgCgGAAgIQAAgIACgHQADgFAEgFQAFgFAFgCQAGgDAHAAIAIABIAHADQAEACAGAIIABAAIAAgMIAAglIALAAIAABnIgLAAIAAgMIgGAGIgGAFIgHACIgHABQgHAAgGgCgAgIgFIgIAFQgDADgBAEQgCAFAAAGQAAAFACAFQABAFADADQAEADAEACQAEACAEAAQAFAAAFgCQAEgCADgEQAEgDABgFQACgEAAgFQAAgGgCgEIgFgIQgDgDgFgBQgEgCgFAAQgEAAgEABg");
	this.shape_22.setTransform(-58.2,-1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgbAhIAAgHIAmgwIglAAIABgKIA0AAIAAAGIgmAyIAoAAIgBAJg");
	this.shape_23.setTransform(-69.1,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAEgFQAFgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQAAAGADAEQABADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_24.setTransform(-76,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_25.setTransform(-83.4,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_26.setTransform(-88.6,-1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAzIgnhlIANAAIAfBVIAghVIAOAAIgoBlg");
	this.shape_27.setTransform(-95.1,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,204.6,20.8);


(lib.text2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOA/IAAgsQAAgHgCgEIgFgEIgGgBQgDAAgDABQgDACgCADIgDAHIgBAJIAAAmIgbAAIAAh9IAbAAIAAAtIAAAMIAAAAQAEgGAKgGQAGgDAHAAQAIAAAFACQAGACADAFQAEAEACAHQABAGAAAJIAAAwg");
	this.shape.setTransform(50.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAoQgJgDgHgFQgGgGgDgIQgCgFgCgNQABgGADgLQADgIAGgGQAHgFAJgDQAGgCANgBQALAAASAEIgCAYQgGgCgHgCIgNgBIgKABQgDACgCADQgDACgBAEQgBADAAAEQAAAEABAEQABAEADACQACADADABQAFACAFAAIANgCIANgDIACAYQgGACgHABIgQABQgNgBgGgCg");
	this.shape_1.setTransform(41.2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAoQgGgDgDgEQgEgFgBgGQgCgHAAgJIAAgvIAcAAIAAArQAAAJADADIAEADIAGABIAGgBQADgBABgCQAEgGAAgIIAAgpIAcAAIAABRIgbAAIgBgKIgHAGIgHAEQgEACgHAAQgIAAgGgCg");
	this.shape_2.setTransform(32.1,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAqIgJgCQgJgDgFgGQgGgGgDgIQgCgIAAgJQAAgIACgIQADgIAGgGQAFgGAJgDIAJgDIAKAAQAIAAAMADQAIADAGAGQAFAGADAIQAEAIAAAIQAAAJgEAIQgDAIgFAGQgGAGgIADQgMADgIAAgAgHgRIgFAEIgDAGIgBAHIABAIIADAGQACADADABQADACAEAAQAEAAADgCQAEgBABgDIADgGIABgIIgBgHIgDgGIgFgEQgDgCgEAAQgEAAgDACg");
	this.shape_3.setTransform(22.2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNA+IAAhhIgmAAIAAgaIBnAAIAAAaIgmAAIAABhg");
	this.shape_4.setTransform(11.9,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAtIAAgjIgjAAIAAgSIAjAAIAAgjIASAAIAAAjIAjAAIAAASIgjAAIAAAjg");
	this.shape_5.setTransform(-3.4,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAA3QgGgCgDgFQgDgEgDgGQgBgHAAgJIAAgbIgPAAIAAgWIAPAAIAAgcIAaAAIAAAcIAVAAIAAAWIgVAAIAAAZQAAAHAEADQACACAGAAIAKgBIAAAXQgMACgIAAQgIAAgEgBg");
	this.shape_6.setTransform(-17.4,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPA/IAAg8IgQAAIAAgVIAQAAIAAgIIABgPQABgHADgEQAEgFAGgCQAFgDAJAAIASACIAAAWIgJgBQgGAAgDAEQgDADAAAHIAAAHIATAAIAAAVIgTAAIAAA8g");
	this.shape_7.setTransform(-23.8,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNA+IAAhRIAbAAIAABRgAgGgeIgEgDQgFgFAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAEgHAAQgDAAgDgBg");
	this.shape_8.setTransform(-29.3,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAPA+IgZgqIgMAAIAAAqIgcAAIAAh7IA7AAQAJAAAHADQAHADAGAGQAFAFACAIQADAHAAAJQAAAHgCAHQgCAGgDAEQgEAFgFAEQgFADgHACIAfAsgAgWgEIAZAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgFgHAAIgZAAg");
	this.shape_9.setTransform(-36.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-12.2,102.9,24.4);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAhQgHgCgFgFQgEgEgDgHQgBgEgCgLQABgFACgKQADgGAEgFQAFgEAHgCQAHgCAHgBIALACIAMADIgCALQgEgDgHgBIgKgBQgFAAgEACQgFABgDADQgDADgBAFQgDAEAAAGQAAAGADAFQABAEADADQADAEAFABQAEACAFAAIAKgCQAHgBAEgCIACALQgFACgHABIgLABQgHAAgHgCg");
	this.shape.setTransform(97,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_1.setTransform(89.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_2.setTransform(82.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_3.setTransform(74.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_4.setTransform(64.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAwQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgGACgJQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgBQAGgCAGgCIAAALIgMADIgMABQgIAAgGgCgAAVAKIgCgJQgBgDgDgDIgGgDIgIgBIgGABIgHADIgFAGQgCAEAAAFIAoAAIAAAAgAgCgbIAOgXIALACIgSAVg");
	this.shape_5.setTransform(57.1,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAArQgDgBgCgEIgCgKIAAgNIAAgcIgOAAIAAgKIAOAAIAAgVIAKAAIAAAVIATAAIAAAKIgTAAIAAAeQAAAKABAEIAEADIAEABIAKgCIAAAKQgGACgHAAQgFAAgEgCg");
	this.shape_6.setTransform(50.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_7.setTransform(46.6,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_8.setTransform(43.3,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_9.setTransform(37.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJAwQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgGADgJQACgGAEgFQAFgEAHgCQAFgCAGgBQAHABAGACQAFACAEAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGACAEQABADADADQADACAFACIAJABIAMgBQAHgCAEgCIABALIgMADIgMABQgHAAgHgCgAAUAKIgBgJQgCgDgCgDIgGgDIgIgBIgHABIgGADIgFAGQgCAEAAAFIAnAAIAAAAgAgDgbIAOgXIAMACIgSAVg");
	this.shape_10.setTransform(30,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAiIAAhBIALAAIAAAMIAAAAQAEgGADgEIAHgDQACgCAFAAIAFACIAAALIgIgBQgDAAgFACQgDACgBADIgFAIIgBAIIAAAhg");
	this.shape_11.setTransform(23.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_12.setTransform(14.1,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_13.setTransform(7.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_14.setTransform(1.6,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_15.setTransform(-1.7,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAEgFQAFgEAHgCQAGgCAFgBQAIABAFACQAFACAFAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_16.setTransform(-7.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_17.setTransform(-14.6,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAgQgEgCgDgEQgDgDgBgFQgBgFAAgGIAAgoIAMAAIAAAmIAAAIQABADACADQACACADACQADABAEAAQADAAAFgCQADgCADgDIAFgJQABgEAAgGIAAgfIAMAAIAABBIgLAAIAAgMIgBAAQgFAIgEACIgHADIgHABQgHAAgFgCg");
	this.shape_18.setTransform(-22.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAiIgHgCQgGgCgGgFQgEgFgCgGQgDgHAAgHQAAgHADgGQACgHAEgEQAGgFAGgCIAHgDIAHgBQAGABAJADQAGACAFAFQAFAEACAHQACAGAAAHQAAAHgCAHQgCAGgFAFQgFAFgGACQgJADgGAAgAgKgWQgEACgDADQgCAEgCAEQgCAEABAFQgBAFACAEIAEAIQADAEAEACQAFACAFAAQAGAAAFgCQAEgCADgEIAEgIQABgEAAgFQAAgFgBgEQgCgEgCgEQgDgDgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(-30.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAiIAAgnIgBgHIgCgGQgCgDgDAAQgDgCgEAAQgEAAgEACQgEABgDADIgFAIQgCAGAAAEIAAAhIgMAAIAAhBIAMAAIAAAMIAAAAIAFgGIAFgEIAHgDIAIgCQAGABAFACQAEACADADQADAEABAEQACAGAAAFIAAApg");
	this.shape_20.setTransform(-38.5,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_21.setTransform(-49.9,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAzQgGgDgEgFQgEgEgDgHQgCgGAAgIQAAgIACgHQADgFAEgFQAFgFAFgCQAGgDAHAAIAIABIAHADQAEACAGAIIABAAIAAgMIAAglIALAAIAABnIgLAAIAAgMIgGAGIgGAFIgHACIgHABQgHAAgGgCgAgIgFIgIAFQgDADgBAEQgCAFAAAGQAAAFACAFQABAFADADQAEADAEACQAEACAEAAQAFAAAFgCQAEgCADgEQAEgDABgFQACgEAAgFQAAgGgCgEIgFgIQgDgDgFgBQgEgCgFAAQgEAAgEABg");
	this.shape_22.setTransform(-58.2,-1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgbAhIAAgHIAmgwIglAAIABgKIA0AAIAAAGIgmAyIAoAAIgBAJg");
	this.shape_23.setTransform(-69.1,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAEgFQAFgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQAAAGADAEQABADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_24.setTransform(-76,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_25.setTransform(-83.4,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_26.setTransform(-88.6,-1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAzIgnhlIANAAIAfBVIAghVIAOAAIgoBlg");
	this.shape_27.setTransform(-95.1,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,204.6,20.8);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap42();
	this.instance.parent = this;
	this.instance.setTransform(-141,-2,1.009,1.009);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-141,-2,1281.8,252.3), null);


(lib.legal = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{ON:1,OFF:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// shop now
	this.instance = new lib.msg_shopnow();
	this.instance.parent = this;
	this.instance.setTransform(128.5,-5.3,1,1,0,0,0,29.9,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape.setTransform(127.9,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242424").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_1.setTransform(127.9,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494949").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_2.setTransform(127.9,-4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6D6D").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_3.setTransform(127.9,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#929292").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_4.setTransform(127.9,-4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6B6B6").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_5.setTransform(127.9,-4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBDBDB").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_6.setTransform(127.9,-4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_7.setTransform(127.9,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.5,-20.7,120.7,32.1);


(lib.echo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_LoneEcho();
	this.instance.parent = this;
	this.instance.setTransform(150.3,4.3,0.22,0.22,0,0,0,706.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo3_mc, new cjs.Rectangle(-5.1,-13.9,310.8,36.4), null);


// stage content:
(lib.oculus_echo_970x250_FR = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(485,112.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:1002.4,y:406.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(178));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,112.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:4.8,y:413.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(175));

	// roborecall
	this.instance_2 = new lib.game_roborecall();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:74.4,y:-161.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(172));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(485,113.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:1107.6,y:-164},32,cjs.Ease.get(-1)).to({_off:true},1).wait(169));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(485.1,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:1132.8,y:356.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(485,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:663.2,y:418.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("EAlNAISIBDAAIAAA3IhDAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EAlMAIRIBFAAIAAA5IhFAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EAlHAILIBQAAIAABBIhQAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EAlAAIBIBgAAIAABPIhgAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EAk2AHzIB3AAIAABiIh3AAg");
	var mask_graphics_29 = new cjs.Graphics().p("EAkqAHiICUAAIAAB6IiUAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EAkaAHMIC4AAIAACYIi4AAg");
	var mask_graphics_31 = new cjs.Graphics().p("EAkIAGzIDiAAIAAC6IjiAAg");
	var mask_graphics_32 = new cjs.Graphics().p("EAjyAGWIEUAAIAADiIkUAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EAjaAF1IFLAAIAAEQIlLAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EAi/AFQIGJAAIAAFDImJAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EAiiAEnIHNAAIAAF7InNAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EAiBAD6IIYAAIAAG5IoYAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EAheADKIJpAAIAAH7IppAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EAg3ACVILCAAIAAJEIrCAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EAgOABdIMhAAIAAKRIshAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AfjAgIOFAAIAALlIuFAAg");
	var mask_graphics_41 = new cjs.Graphics().p("Ae0gfIPxAAIAAM8IvxAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AeChjIRjAAIAAOaIxjAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AdOirITbAAIAAP9IzbAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AcXj3IVaAAIAARmI1aAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AbclHIXhAAIAATUI3hAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AagmbIZsAAIAAVHI5sAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AZgnyIb/AAIAAW/I7/AAg");
	var mask_graphics_48 = new cjs.Graphics().p("AYdpOIeZAAIAAY+I+ZAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AXYqtMAg4AAAIAAbBMgg4AAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AWQsQMAjeAAAIAAdJMgjeAAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AVFt3MAmLAAAIAAfXMgmLAAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AT3viMAo/AAAMAAAAhqMgo/AAAg");
	var mask_graphics_53 = new cjs.Graphics().p("ASmxRMAr5AAAMAAAAkDMgr5AAAg");
	var mask_graphics_54 = new cjs.Graphics().p("ARSzEMAu5AAAMAAAAmhMgu5AAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AP80iMAyAAAAMAAAApFMgyAAAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AP40kMAyFAAAMAAAApJMgyFAAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AP00mMAyLAAAMAAAApNMgyLAAAg");
	var mask_graphics_58 = new cjs.Graphics().p("APw0oMAyQAAAMAAAApRMgyQAAAg");
	var mask_graphics_59 = new cjs.Graphics().p("APs0rMAyVAAAMAAAApXMgyVAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("APp0tMAyaAAAMAAAApbMgyaAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("APl0vMAyfAAAMAAAApfMgyfAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("APh0xMAykAAAMAAAApjMgykAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("APd0zMAyqAAAMAAAApnMgyqAAAg");
	var mask_graphics_64 = new cjs.Graphics().p("APZ01MAyvAAAMAAAAprMgyvAAAg");
	var mask_graphics_65 = new cjs.Graphics().p("APV03MAy0AAAMAAAApvMgy0AAAg");
	var mask_graphics_66 = new cjs.Graphics().p("APR06MAy6AAAMAAAAp1Mgy6AAAg");
	var mask_graphics_67 = new cjs.Graphics().p("APN08MAy/AAAMAAAAp5Mgy/AAAg");
	var mask_graphics_68 = new cjs.Graphics().p("APJ0+MAzEAAAMAAAAp9MgzEAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("APG1AMAzJAAAMAAAAqBMgzJAAAg");
	var mask_graphics_70 = new cjs.Graphics().p("APC1CMAzOAAAMAAAAqFMgzOAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("AO+1EMAzTAAAMAAAAqJMgzTAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("AO61GMAzZAAAMAAAAqNMgzZAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("AO21JMAzeAAAMAAAAqTMgzeAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("AOy1LMAzjAAAMAAAAqXMgzjAAAg");
	var mask_graphics_75 = new cjs.Graphics().p("AOu1NMAzoAAAMAAAAqbMgzoAAAg");
	var mask_graphics_76 = new cjs.Graphics().p("AOq1PMAzuAAAMAAAAqfMgzuAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("AOm1RMAzzAAAMAAAAqjMgzzAAAg");
	var mask_graphics_78 = new cjs.Graphics().p("AOj1TMAz3AAAMAAAAqnMgz3AAAg");
	var mask_graphics_79 = new cjs.Graphics().p("AOf1VMAz9AAAMAAAAqrMgz9AAAg");
	var mask_graphics_80 = new cjs.Graphics().p("AOb1YMA0CAAAMAAAAqxMg0CAAAg");
	var mask_graphics_81 = new cjs.Graphics().p("AOX1aMA0HAAAMAAAAq1Mg0HAAAg");
	var mask_graphics_82 = new cjs.Graphics().p("AOT1cMA0NAAAMAAAAq5Mg0NAAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AOP1eMA0SAAAMAAAAq9Mg0SAAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AOL1gMA0XAAAMAAAArBMg0XAAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AOH1iMA0dAAAMAAAArFMg0dAAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AOD1kMA0iAAAMAAAArJMg0iAAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AOA1nMA0mAAAMAAAArPMg0mAAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AN81pMA0sAAAMAAAArTMg0sAAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AN41rMA0xAAAMAAAArXMg0xAAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AN01tMA02AAAMAAAArbMg02AAAg");
	var mask_graphics_91 = new cjs.Graphics().p("ANw1vMA08AAAMAAAArfMg08AAAg");
	var mask_graphics_92 = new cjs.Graphics().p("ANs1xMA1BAAAMAAAArjMg1BAAAg");
	var mask_graphics_93 = new cjs.Graphics().p("ANo1zMA1GAAAMAAAArnMg1GAAAg");
	var mask_graphics_94 = new cjs.Graphics().p("ANk12MA1MAAAMAAAArtMg1MAAAg");
	var mask_graphics_95 = new cjs.Graphics().p("ANg14MA1RAAAMAAAArxMg1RAAAg");
	var mask_graphics_96 = new cjs.Graphics().p("ANd16MA1VAAAMAAAAr1Mg1VAAAg");
	var mask_graphics_97 = new cjs.Graphics().p("ANZ18MA1bAAAMAAAAr5Mg1bAAAg");
	var mask_graphics_98 = new cjs.Graphics().p("ANV1+MA1gAAAMAAAAr9Mg1gAAAg");
	var mask_graphics_99 = new cjs.Graphics().p("ANR2AMA1lAAAMAAAAsBMg1lAAAg");
	var mask_graphics_100 = new cjs.Graphics().p("ANN2CMA1rAAAMAAAAsFMg1rAAAg");
	var mask_graphics_101 = new cjs.Graphics().p("ANJ2FMA1wAAAMAAAAsLMg1wAAAg");
	var mask_graphics_102 = new cjs.Graphics().p("ANF2HMA11AAAMAAAAsPMg11AAAg");
	var mask_graphics_103 = new cjs.Graphics().p("ANB2JMA17AAAMAAAAsTMg17AAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AM92LMA2AAAAMAAAAsXMg2AAAAg");
	var mask_graphics_105 = new cjs.Graphics().p("AM62NMA2EAAAMAAAAsbMg2EAAAg");
	var mask_graphics_106 = new cjs.Graphics().p("AM22PMA2KAAAMAAAAsfMg2KAAAg");
	var mask_graphics_107 = new cjs.Graphics().p("AMy2RMA2PAAAMAAAAsjMg2PAAAg");
	var mask_graphics_108 = new cjs.Graphics().p("AMu2UMA2UAAAMAAAAspMg2UAAAg");
	var mask_graphics_109 = new cjs.Graphics().p("AMq2WMA2ZAAAMAAAAstMg2ZAAAg");
	var mask_graphics_110 = new cjs.Graphics().p("AMm2YMA2fAAAMAAAAsxMg2fAAAg");
	var mask_graphics_111 = new cjs.Graphics().p("AMi2aMA2kAAAMAAAAs1Mg2kAAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AMe2cMA2pAAAMAAAAs5Mg2pAAAg");
	var mask_graphics_113 = new cjs.Graphics().p("AMb2eMA2uAAAMAAAAs9Mg2uAAAg");
	var mask_graphics_114 = new cjs.Graphics().p("AMX2gMA2zAAAMAAAAtBMg2zAAAg");
	var mask_graphics_115 = new cjs.Graphics().p("AMT2iMA24AAAMAAAAtFMg24AAAg");
	var mask_graphics_116 = new cjs.Graphics().p("AMQ2kMA27AAAMAAAAtJMg27AAAg");
	var mask_graphics_117 = new cjs.Graphics().p("AMH2nMA3EAAAMAAAAtPMg3EAAAg");
	var mask_graphics_118 = new cjs.Graphics().p("AL42tMA3TAAAMAAAAtbMg3TAAAg");
	var mask_graphics_119 = new cjs.Graphics().p("ALj22MA3nAAAMAAAAttMg3nAAAg");
	var mask_graphics_120 = new cjs.Graphics().p("ALI3AMA4BAAAMAAAAuBMg4BAAAg");
	var mask_graphics_121 = new cjs.Graphics().p("AKn3NMA4hAAAMAAAAubMg4hAAAg");
	var mask_graphics_122 = new cjs.Graphics().p("AKB3dMA5GAAAMAAAAu7Mg5GAAAg");
	var mask_graphics_123 = new cjs.Graphics().p("AJU3vMA5yAAAMAAAAvfMg5yAAAg");
	var mask_graphics_124 = new cjs.Graphics().p("AIh4DMA6jAAAMAAAAwHMg6jAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("AHp4ZMA7aAAAMAAAAwzMg7aAAAg");
	var mask_graphics_126 = new cjs.Graphics().p("AGq4yMA8XAAAMAAAAxlMg8XAAAg");
	var mask_graphics_127 = new cjs.Graphics().p("AFm5OMA9ZAAAMAAAAydMg9ZAAAg");
	var mask_graphics_128 = new cjs.Graphics().p("AEb5rMA+hAAAMAAAAzXMg+hAAAg");
	var mask_graphics_129 = new cjs.Graphics().p("ADL6LMA/vAAAMAAAA0XMg/vAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("AB06uMBBEAAAMAAAA1dMhBEAAAg");
	var mask_graphics_131 = new cjs.Graphics().p("AAY7TMBCdAAAMAAAA2nMhCdAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("AhK76MBD8AAAMAAAA31MhD8AAAg");
	var mask_graphics_133 = new cjs.Graphics().p("Aiy8kMBFhAAAMAAAA5JMhFhAAAg");
	var mask_graphics_134 = new cjs.Graphics().p("Akg9QMBHLAAAMAAAA6hMhHLAAAg");
	var mask_graphics_135 = new cjs.Graphics().p("AmU9+MBI8AAAMAAAA79MhI8AAAg");
	var mask_graphics_136 = new cjs.Graphics().p("AoP+vMBKzAAAMAAAA9fMhKzAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("AqP/iMBMwAAAMAAAA/FMhMwAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("EgMVggXMBOyAAAMAAABAvMhOyAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("EgOhghPMBQ5AAAMAAABCfMhQ5AAAg");
	var mask_graphics_140 = new cjs.Graphics().p("EgQzgiJMBTHAAAMAAABETMhTHAAAg");
	var mask_graphics_141 = new cjs.Graphics().p("EgTLgjGMBVbAAAMAAABGNMhVbAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("EgVpgkFMBXzAAAMAAABILMhXzAAAg");
	var mask_graphics_143 = new cjs.Graphics().p("EgYPglIMBaYAAAMAAABKRMhaYAAAg");
	var mask_graphics_144 = new cjs.Graphics().p("Ega1gmMMBc8AAAMAAABMZMhc8AAAg");
	var mask_graphics_145 = new cjs.Graphics().p("EgdbgnPMBfhAAAMAAABOfMhfhAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("EggBgoTMBiFAAAMAAABQnMhiFAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("EgingpWMBkqAAAMAAABStMhkqAAAg");
	var mask_graphics_148 = new cjs.Graphics().p("EglNgqaMBnOAAAMAAABU1MhnOAAAg");
	var mask_graphics_149 = new cjs.Graphics().p("EgnzgrdMBpyAAAMAAABW7MhpyAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("EgqYgshMBsWAAAMAAABZDMhsWAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("Egs+gtkMBu6AAAMAAABbJMhu6AAAg");
	var mask_graphics_152 = new cjs.Graphics().p("EgvkguoMBxfAAAMAAABdRMhxfAAAg");
	var mask_graphics_153 = new cjs.Graphics().p("EgyKgvrMB0DAAAMAAABfXMh0DAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("Eg0wgwvMB2nAAAMAAABhfMh2nAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:244.8,y:58.5}).wait(1).to({graphics:mask_graphics_25,x:244.9,y:58.6}).wait(1).to({graphics:mask_graphics_26,x:245.5,y:58.8}).wait(1).to({graphics:mask_graphics_27,x:246.4,y:59.2}).wait(1).to({graphics:mask_graphics_28,x:247.7,y:59.7}).wait(1).to({graphics:mask_graphics_29,x:249.4,y:60.4}).wait(1).to({graphics:mask_graphics_30,x:251.4,y:61.2}).wait(1).to({graphics:mask_graphics_31,x:253.8,y:62.1}).wait(1).to({graphics:mask_graphics_32,x:256.6,y:63.2}).wait(1).to({graphics:mask_graphics_33,x:259.7,y:64.5}).wait(1).to({graphics:mask_graphics_34,x:263.2,y:65.9}).wait(1).to({graphics:mask_graphics_35,x:267.1,y:67.4}).wait(1).to({graphics:mask_graphics_36,x:271.3,y:69.1}).wait(1).to({graphics:mask_graphics_37,x:275.9,y:70.9}).wait(1).to({graphics:mask_graphics_38,x:280.9,y:72.9}).wait(1).to({graphics:mask_graphics_39,x:286.3,y:75}).wait(1).to({graphics:mask_graphics_40,x:292,y:77.3}).wait(1).to({graphics:mask_graphics_41,x:298.1,y:79.7}).wait(1).to({graphics:mask_graphics_42,x:304.5,y:82.3}).wait(1).to({graphics:mask_graphics_43,x:311.3,y:85}).wait(1).to({graphics:mask_graphics_44,x:318.5,y:87.9}).wait(1).to({graphics:mask_graphics_45,x:326.1,y:90.9}).wait(1).to({graphics:mask_graphics_46,x:334,y:94}).wait(1).to({graphics:mask_graphics_47,x:342.3,y:97.3}).wait(1).to({graphics:mask_graphics_48,x:351,y:100.8}).wait(1).to({graphics:mask_graphics_49,x:360,y:104.4}).wait(1).to({graphics:mask_graphics_50,x:369.4,y:108.1}).wait(1).to({graphics:mask_graphics_51,x:379.2,y:112}).wait(1).to({graphics:mask_graphics_52,x:389.4,y:116}).wait(1).to({graphics:mask_graphics_53,x:399.9,y:120.2}).wait(1).to({graphics:mask_graphics_54,x:410.7,y:124.5}).wait(1).to({graphics:mask_graphics_55,x:422,y:126.5}).wait(1).to({graphics:mask_graphics_56,x:422.1,y:126.5}).wait(1).to({graphics:mask_graphics_57,x:422.3,y:126.5}).wait(1).to({graphics:mask_graphics_58,x:422.4,y:126.5}).wait(1).to({graphics:mask_graphics_59,x:422.5,y:126.5}).wait(1).to({graphics:mask_graphics_60,x:422.7,y:126.5}).wait(1).to({graphics:mask_graphics_61,x:422.8,y:126.5}).wait(1).to({graphics:mask_graphics_62,x:422.9,y:126.5}).wait(1).to({graphics:mask_graphics_63,x:423.1,y:126.5}).wait(1).to({graphics:mask_graphics_64,x:423.2,y:126.5}).wait(1).to({graphics:mask_graphics_65,x:423.3,y:126.5}).wait(1).to({graphics:mask_graphics_66,x:423.5,y:126.5}).wait(1).to({graphics:mask_graphics_67,x:423.6,y:126.5}).wait(1).to({graphics:mask_graphics_68,x:423.7,y:126.4}).wait(1).to({graphics:mask_graphics_69,x:423.9,y:126.4}).wait(1).to({graphics:mask_graphics_70,x:424,y:126.4}).wait(1).to({graphics:mask_graphics_71,x:424.1,y:126.4}).wait(1).to({graphics:mask_graphics_72,x:424.3,y:126.4}).wait(1).to({graphics:mask_graphics_73,x:424.4,y:126.4}).wait(1).to({graphics:mask_graphics_74,x:424.5,y:126.4}).wait(1).to({graphics:mask_graphics_75,x:424.6,y:126.4}).wait(1).to({graphics:mask_graphics_76,x:424.8,y:126.4}).wait(1).to({graphics:mask_graphics_77,x:424.9,y:126.4}).wait(1).to({graphics:mask_graphics_78,x:425,y:126.4}).wait(1).to({graphics:mask_graphics_79,x:425.2,y:126.4}).wait(1).to({graphics:mask_graphics_80,x:425.3,y:126.4}).wait(1).to({graphics:mask_graphics_81,x:425.4,y:126.4}).wait(1).to({graphics:mask_graphics_82,x:425.6,y:126.4}).wait(1).to({graphics:mask_graphics_83,x:425.7,y:126.4}).wait(1).to({graphics:mask_graphics_84,x:425.8,y:126.4}).wait(1).to({graphics:mask_graphics_85,x:426,y:126.4}).wait(1).to({graphics:mask_graphics_86,x:426.1,y:126.4}).wait(1).to({graphics:mask_graphics_87,x:426.2,y:126.4}).wait(1).to({graphics:mask_graphics_88,x:426.4,y:126.4}).wait(1).to({graphics:mask_graphics_89,x:426.5,y:126.4}).wait(1).to({graphics:mask_graphics_90,x:426.6,y:126.4}).wait(1).to({graphics:mask_graphics_91,x:426.8,y:126.4}).wait(1).to({graphics:mask_graphics_92,x:426.9,y:126.3}).wait(1).to({graphics:mask_graphics_93,x:427,y:126.3}).wait(1).to({graphics:mask_graphics_94,x:427.2,y:126.3}).wait(1).to({graphics:mask_graphics_95,x:427.3,y:126.3}).wait(1).to({graphics:mask_graphics_96,x:427.4,y:126.3}).wait(1).to({graphics:mask_graphics_97,x:427.6,y:126.3}).wait(1).to({graphics:mask_graphics_98,x:427.7,y:126.3}).wait(1).to({graphics:mask_graphics_99,x:427.8,y:126.3}).wait(1).to({graphics:mask_graphics_100,x:428,y:126.3}).wait(1).to({graphics:mask_graphics_101,x:428.1,y:126.3}).wait(1).to({graphics:mask_graphics_102,x:428.2,y:126.3}).wait(1).to({graphics:mask_graphics_103,x:428.4,y:126.3}).wait(1).to({graphics:mask_graphics_104,x:428.5,y:126.3}).wait(1).to({graphics:mask_graphics_105,x:428.6,y:126.3}).wait(1).to({graphics:mask_graphics_106,x:428.8,y:126.3}).wait(1).to({graphics:mask_graphics_107,x:428.9,y:126.3}).wait(1).to({graphics:mask_graphics_108,x:429,y:126.3}).wait(1).to({graphics:mask_graphics_109,x:429.1,y:126.3}).wait(1).to({graphics:mask_graphics_110,x:429.3,y:126.3}).wait(1).to({graphics:mask_graphics_111,x:429.4,y:126.3}).wait(1).to({graphics:mask_graphics_112,x:429.5,y:126.3}).wait(1).to({graphics:mask_graphics_113,x:429.7,y:126.3}).wait(1).to({graphics:mask_graphics_114,x:429.8,y:126.3}).wait(1).to({graphics:mask_graphics_115,x:429.9,y:126.3}).wait(1).to({graphics:mask_graphics_116,x:429.9,y:126.2}).wait(1).to({graphics:mask_graphics_117,x:429.9,y:126.2}).wait(1).to({graphics:mask_graphics_118,x:429.9,y:126.2}).wait(1).to({graphics:mask_graphics_119,x:429.8,y:126.2}).wait(1).to({graphics:mask_graphics_120,x:429.7,y:126.2}).wait(1).to({graphics:mask_graphics_121,x:429.6,y:126.2}).wait(1).to({graphics:mask_graphics_122,x:429.5,y:126.1}).wait(1).to({graphics:mask_graphics_123,x:429.4,y:126.1}).wait(1).to({graphics:mask_graphics_124,x:429.2,y:126.1}).wait(1).to({graphics:mask_graphics_125,x:429.1,y:126}).wait(1).to({graphics:mask_graphics_126,x:428.9,y:126}).wait(1).to({graphics:mask_graphics_127,x:428.7,y:125.9}).wait(1).to({graphics:mask_graphics_128,x:428.4,y:125.9}).wait(1).to({graphics:mask_graphics_129,x:428.2,y:125.8}).wait(1).to({graphics:mask_graphics_130,x:428,y:125.8}).wait(1).to({graphics:mask_graphics_131,x:427.7,y:125.7}).wait(1).to({graphics:mask_graphics_132,x:427.4,y:125.6}).wait(1).to({graphics:mask_graphics_133,x:427.1,y:125.5}).wait(1).to({graphics:mask_graphics_134,x:426.7,y:125.5}).wait(1).to({graphics:mask_graphics_135,x:426.4,y:125.4}).wait(1).to({graphics:mask_graphics_136,x:426,y:125.3}).wait(1).to({graphics:mask_graphics_137,x:425.7,y:125.2}).wait(1).to({graphics:mask_graphics_138,x:425.3,y:125.1}).wait(1).to({graphics:mask_graphics_139,x:424.8,y:125}).wait(1).to({graphics:mask_graphics_140,x:424.4,y:124.9}).wait(1).to({graphics:mask_graphics_141,x:424,y:124.8}).wait(1).to({graphics:mask_graphics_142,x:423.4,y:124.7}).wait(1).to({graphics:mask_graphics_143,x:423.3,y:124.3}).wait(1).to({graphics:mask_graphics_144,x:423.1,y:123.9}).wait(1).to({graphics:mask_graphics_145,x:423,y:123.6}).wait(1).to({graphics:mask_graphics_146,x:422.8,y:123.2}).wait(1).to({graphics:mask_graphics_147,x:422.7,y:122.8}).wait(1).to({graphics:mask_graphics_148,x:422.5,y:122.5}).wait(1).to({graphics:mask_graphics_149,x:422.3,y:122.1}).wait(1).to({graphics:mask_graphics_150,x:422.2,y:121.7}).wait(1).to({graphics:mask_graphics_151,x:422,y:121.4}).wait(1).to({graphics:mask_graphics_152,x:421.9,y:121}).wait(1).to({graphics:mask_graphics_153,x:421.7,y:120.6}).wait(1).to({graphics:mask_graphics_154,x:421.5,y:120.3}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_6 = new lib.echo3_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(486.3,115.3,0.021,0.021,0,0,0,158.7,19.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({regX:156,regY:18,scaleX:0.94,scaleY:0.94,x:691.1,y:236.3},31,cjs.Ease.get(-1)).wait(60).to({regX:155.9,regY:18.1,scaleX:1.59,scaleY:1.59,x:570.9,y:276.3},27,cjs.Ease.get(-1)).to({scaleX:2.18,scaleY:2.18,x:469,y:297.3,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_7 = new lib.echo1_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(488.3,114.3,0.021,0.021,0,0,0,64.9,132.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({regX:63.4,regY:131.5,scaleX:1,scaleY:1,x:781.1,y:126.1},31,cjs.Ease.get(-1)).to({regX:63.5,regY:131.4,scaleX:1.1,scaleY:1.1,rotation:4.7,x:801.9,y:125.9},60).to({regX:63.6,scaleX:1.76,scaleY:1.76,rotation:12.8,x:780.3,y:155.6},27,cjs.Ease.get(-1)).to({regY:131.2,scaleX:2.37,scaleY:2.37,rotation:27,x:688.8,y:170.6,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_8 = new lib.echo2_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(485,114.7,0.021,0.021,0,0,0,98.5,115.4);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regX:97.4,regY:113.8,scaleX:1,scaleY:1,x:623.4,y:144},31,cjs.Ease.get(-1)).to({regX:97.3,scaleX:1.1,scaleY:1.1,rotation:-3.2,x:609.6,y:146.4},60).to({regX:97.4,scaleX:1.76,scaleY:1.76,rotation:-7,x:432.8,y:172.9},27,cjs.Ease.get(-1)).to({regX:97.3,scaleX:2.37,scaleY:2.37,rotation:-1.2,x:268,y:188.5,alpha:0},12).to({_off:true},1).wait(56));

	// game_BG
	this.instance_9 = new lib.Tween4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(486.2,114.3,0.021,0.021);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(684,126.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:684,y:126.5},31,cjs.Ease.get(-1)).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},31,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,x:684.3,y:126.3},60).to({scaleX:1.76,scaleY:1.76,x:565.9,y:124.7},27,cjs.Ease.get(-1)).to({scaleX:2.37,scaleY:2.37,x:463.5,y:120.3,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("EglyADXIAAmtMBLlAAAIAAGtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:255.5,y:93.6}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance_11 = new lib.text1_mc("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(248.9,134.7,1.854,1.854,0,0,0,0.1,0.1);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween7copy("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(248.9,93.7,1.854,1.854,0,0,0,0.1,0);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({_off:true,regY:0,y:93.7},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},9).wait(57).to({startPosition:0},0).to({regX:0,scaleX:3.82,scaleY:3.82,x:-71.7,y:52.4},23,cjs.Ease.get(-1)).to({scaleX:6.18,scaleY:6.18,x:-491.8,y:3.6,alpha:0},8).to({_off:true},1).wait(64));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("EglyADXIAAmsMBLlAAAIAAGsg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:255.5,y:136.2}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_13 = new lib.text2_mc("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(248.9,177.1,1.854,1.854,0,0,0,0.1,0);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween9("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-491.8,163.9,6.181,6.181);
	this.instance_14.alpha = 0;

	var maskedShapeInstanceList = [this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},54).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},52).to({state:[{t:this.instance_13}]},23).to({state:[{t:this.instance_14}]},8).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(54).to({_off:false},0).to({regY:0.1,y:134.7},9).wait(52).to({startPosition:0},0).to({regX:0,regY:0,scaleX:3.82,scaleY:3.82,x:-71.7,y:138},23,cjs.Ease.get(-1)).to({_off:true,scaleX:6.18,scaleY:6.18,x:-491.8,y:163.9,alpha:0},8).wait(65));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(849,118.5,1.207,1.207,0,0,0,127.8,-4.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(149).to({_off:false},0).wait(62));

	// Layer 2
	this.instance_15 = new lib.legal_limitedtime();
	this.instance_15.parent = this;
	this.instance_15.setTransform(644.8,158.5,0.799,0.799,0,0,0,644.1,-38);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(163).to({_off:false},0).to({y:148.5,alpha:1},8).wait(40));

	// legal
	this.instance_16 = new lib.legal_withpurchase();
	this.instance_16.parent = this;
	this.instance_16.setTransform(648.4,172.2,1.296,1.296,0,0,0,117.9,8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(167).to({_off:false},0).to({y:163,alpha:1},8).wait(36));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_153 = new cjs.Graphics().p("AtqHeIAAu7IbVAAIAAO7g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_3_graphics_153,x:648.2,y:95.7}).wait(58));

	// price
	this.instance_17 = new lib.newPrice();
	this.instance_17.parent = this;
	this.instance_17.setTransform(154.8,123.6,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(153).to({_off:false},0).to({y:28.6},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_153 = new cjs.Graphics().p("Ay/DwIAAnfMAl/AAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_4_graphics_153,x:173.8,y:128}).wait(58));

	// oculus
	this.instance_18 = new lib.logo_oculus();
	this.instance_18.parent = this;
	this.instance_18.setTransform(215.5,121.7,0.234,0.234,0,0,0,156.8,111.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(153).to({_off:false},0).to({y:80.7},10,cjs.Ease.get(1)).wait(48));

	// Layer 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_153 = new cjs.Graphics().p("Ay/DwIAAnfMAl/AAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_5_graphics_153,x:151.8,y:178}).wait(58));

	// Layer 1
	this.instance_19 = new lib.logo_rifttouch();
	this.instance_19.parent = this;
	this.instance_19.setTransform(120.6,211.9,0.679,0.679,0,0,0,86.8,166.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(153).to({_off:false},0).to({y:170.9},10,cjs.Ease.get(1)).wait(48));

	// stadium
	this.instance_20 = new lib.logo_stadium();
	this.instance_20.parent = this;
	this.instance_20.setTransform(98,237.9,0.585,0.585,0,0,0,81.4,66);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(153).to({_off:false},0).to({y:196.9},10,cjs.Ease.get(1)).wait(48));

	// touch RT
	this.instance_21 = new lib.hardware_touch_RT();
	this.instance_21.parent = this;
	this.instance_21.setTransform(459.5,113.8,0.176,0.176,0,0,0,32.5,29.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(142).to({_off:false},0).to({regY:30.1,scaleX:1.12,scaleY:1.12,x:320.1,y:165.8},17,cjs.Ease.get(-1)).wait(52));

	// touch LT
	this.instance_22 = new lib.hardware_touch_LT();
	this.instance_22.parent = this;
	this.instance_22.setTransform(482.1,112.7,0.176,0.176,0,0,0,23.1,23.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(142).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,x:485.6,y:163.4},17,cjs.Ease.get(-1)).wait(52));

	// rift
	this.instance_23 = new lib.hardware_rift();
	this.instance_23.parent = this;
	this.instance_23.setTransform(471.9,102.3,0.176,0.176,0,0,0,69,42.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(142).to({_off:false},0).to({regY:42,scaleX:1.12,scaleY:1.12,x:418.6,y:97.2},17,cjs.Ease.get(-1)).wait(52));

	// bg
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(274.4,125,1.022,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(142).to({x:256.4},0).to({scaleX:1.06,x:179.8},17).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(462.1,123,1309.4,252.3);
// library properties:
lib.properties = {
	id: 'B85580C26B5E4A549B43F193819D955D',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap42.jpg", id:"Bitmap42"},
		{src:"images/echo1.jpg", id:"echo1"},
		{src:"images/echo2.jpg", id:"echo2"},
		{src:"images/echo3.jpg", id:"echo3"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_5_roborecall.jpg", id:"game_5_roborecall"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"},
		{src:"images/hardware.png", id:"hardware"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B85580C26B5E4A549B43F193819D955D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;