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



(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,321);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,321);


(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1270,250);


(lib.flare = function() {
	this.initialize(img.flare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,200);


(lib.game_1_unspoken = function() {
	this.initialize(img.game_1_unspoken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_2_loneecho = function() {
	this.initialize(img.game_2_loneecho);
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


(lib.Tween7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAA1QgDgCgCgFQgDgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIANAAIAAAZIAYAAIAAAMIgYAAIAAAlQAAAMACAEQABADADABIAFABQAIAAAFgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape.setTransform(118.5,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_1.setTransform(110.6,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_2.setTransform(101.4,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(95.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_4.setTransform(88.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_5.setTransform(73.9,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAEADAGABQAFACAGgBIAOgBQAIgCAHgCIAAANQgFADgKABIgOABQgKAAgHgCgAAZgFQAAgGgCgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(64.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAxAqIAAgwIAAgIIgDgIQgCgCgEgCQgDgCgEAAQgGAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgEgBQgDgCgFAAQgGAAgEACQgFACgDAEQgDAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIAOAAIAAAQIAAAAIAGgIIAHgFQADgCAFgCIAJgBQAFAAAFABQAEACADADQACACACAEIAEAIQABgEAEgEIAIgGIAIgFQAFgBAFAAQAHAAAFACQAGADADAEQADAFACAGQABAGAAAIIAAAxg");
	this.shape_7.setTransform(52.2,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAxAqIAAgwIAAgIIgDgIQgCgCgEgCQgDgCgFAAQgFAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgDgBQgEgCgFAAQgFAAgFACQgEACgDAEQgEAEgCAFQgBAHgBAGIAAAoIgOAAIAAhRIAOAAIAAAQIAAAAIAGgIIAGgFQAEgCAEgCIAJgBQAHAAADABQAFACADADQACACACAEIADAIQACgEAEgEIAIgGIAIgFQAEgBAGAAQAHAAAFACQAFADAEAEQADAFACAGQABAGAAAIIAAAxg");
	this.shape_8.setTransform(37,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_9.setTransform(24.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASA/IgmgqIgCAAIAAAqIgOAAIAAh9IAOAAIAABNIACAAIAjggIASAAIgmAjIAqAtg");
	this.shape_10.setTransform(15.4,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_11.setTransform(2.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_12.setTransform(-6.7,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_13.setTransform(-16.5,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmA+IAAh7IBNAAIAAAOIg/AAIAAApIA7AAIAAANIg7AAIAAA3g");
	this.shape_14.setTransform(-25.5,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAGIAAgLIAxAAIAAALg");
	this.shape_15.setTransform(-34.2,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AARA/IgkgqIgDAAIAAAqIgOAAIAAh9IAOAAIAABNIADAAIAiggIATAAIgnAjIAqAtg");
	this.shape_16.setTransform(-41.2,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_17.setTransform(-50.7,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAqIAAhRIANAAIAAAQIAAAAQAFgIAEgEIAHgFQAFgBAEAAIAHABIAAAPIgJgBQgFAAgFACQgEABgCAEQgDAFgCAFQgCAFAAAGIAAAog");
	this.shape_18.setTransform(-58.1,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHA+IAAhtIgpAAIAAgOIBiAAIAAAOIgrAAIAABtg");
	this.shape_19.setTransform(-66.9,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAGIAAgLIAyAAIAAALg");
	this.shape_20.setTransform(-75.3,1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgWAqIAAhRIANAAIAAAQIAAAAQAFgIAEgEIAHgFQAEgBAFAAIAIABIgBAPIgJgBQgGAAgEACQgEABgCAEQgDAFgCAFQgBAFgBAGIAAAog");
	this.shape_21.setTransform(-81.3,1.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_22.setTransform(-89.8,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQAAAMACAEQACADACABIAFABQAIAAAFgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_23.setTransform(-97.3,0.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWA+QgLgCgJgFIAEgOQAJAFAKACQAJADAIAAQAGAAAFgCQAGgBAEgDQAEgDACgEQADgEAAgFQAAgGgDgEQgDgEgFgCIgLgFIgLgEIgNgEQgHgCgEgDQgFgEgDgGQgDgGAAgIQAAgJAEgGQADgHAHgEQAFgEAIgCQAIgCAHAAQAKAAAJACQAKADAJAGIgDANIgRgHQgJgDgJAAIgJABIgJADQgEADgCADQgDAEAAAFQAAAGADAEQADAEAFACQAGAEARAEIAMAFQAHABAEAEQAFAEADAFQADAGAAAJIgBAJIgDAHQgEAHgGAFQgHAEgIACQgIACgIAAQgKAAgKgCg");
	this.shape_24.setTransform(-105.4,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AACAVQAFgOAGgcIARAAIgHAVIgIAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape_25.setTransform(-114.5,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.2,-12.2,248.3,24.4);


(lib.Tween5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("ApaHPIAAj/IonAAIAAofIm+AAIAAh/MAx/AAAIAAB/Im8AAIAAIfIsQAAIAAD/g");
	this.shape.setTransform(0,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.Bitmap16, null, new cjs.Matrix2D(1,0,0,1,-160,-187.5)).s().p("A4/U3MAAAgptIG+AAIAAIhIInAAIAAD+IPOAAIAAj+IMQAAIAAohIG8AAMAAAAptg");
	this.shape_1.setTransform(0,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-96.6,320,279.6);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAfIgNgWIgJAAIAAAWIgMAAIAAg9IAcAAQAEAAADACQAEABADADQACACACAEQABAEAAAEIgBAHIgDAFIgEAEIgHACIARAXgAgMAAIANAAIAFgBIACgCIACgDIABgEIgBgEIgCgDIgCgCIgFgBIgNAAg");
	this.shape.setTransform(26.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAfIgZg9IANAAIAQAuIARguIANAAIgZA9g");
	this.shape_1.setTransform(20.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAfQgEgCgDgDIgDgHIgCgIIACgJQABgDACgCIAHgFQADgCAFAAQADAAAEACQADACADADIAAAAIAAgGIAAgWIALAAIAAA+IgLAAIAAgGIAAAAQgDAEgDACQgEABgDAAQgFAAgDgBgAgEAAIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAABABAAQAAAAABAAQAAABAAAAIAEABIAFgBIAEgDIABgDIABgFIgBgFIgBgEIgEgCIgFAAIgEAAg");
	this.shape_2.setTransform(14.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_3.setTransform(9.4,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_4.setTransform(4.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_5.setTransform(1.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfIAAg8IALAAIAAAHIADgEIADgCIAFgCIACAAQAFAAAEABQAEACADADQACADABAEQACAEgBAEQABAFgCAEQgBADgCADQgDADgEABQgEACgEAAQgEAAgDgCIgHgFIAAAGIAAAUgAgEgUIgDADIgDAEIgBAEIABAFIADAEIADABIAEABIAEgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIACgEIABgFIgBgEIgCgEIgEgDIgEgBIgEABg");
	this.shape_6.setTransform(-2.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAfIgGgCIgEgCIgEgCIgDgEIgCgFIgBgFIgBgGIAAgjIAMAAIAAAiIABAHIADAGIAFACIAFABIAGgBIAEgCQADgCABgEIABgHIAAgiIAMAAIAAAjIgBAGIgBAFIgCAFIgDAEIgEACIgFACIgFACIgGABg");
	this.shape_7.setTransform(-8.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_8.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,54.5,14.2);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAVIAAgWQAAgEgCgCIgCgCIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIALAAIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACADAAADIABAHIAAAYg");
	this.shape.setTransform(17.9,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgCgDgDQgDgCgBgFIgBgIIABgIQABgEADgCIAHgFIAFgBIAEgBIAJACQAFACADADQACACACAEQABAFAAADQAAAEgBAEIgEAHQgDADgFACIgJACgAgEgKIgDACIgCAFIgBADIABAFIACADIADADIAEABIAFgBIADgDIACgDIAAgFIAAgDIgCgFIgDgCIgFgBIgEABg");
	this.shape_1.setTransform(12.9,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAfIgIgBIABgKIAHACIAIABIAFgBIAEgCIAEgDIABgGIAAgHIgBAAQgDAEgDACQgEABgDAAIgIgBQgEgCgCgDIgEgGQgBgEgBgEQABgFABgEQACgEACgCIAGgFIAIgCQADAAAEACIAHAFIAAgGIAKAAIAAApIAAAGIgBAEIgDAEIgDADIgIADIgIABIgJgBgAgEgUIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAIAFABIAEgBIAEgCIACgDIABgFIgBgFIgCgEIgEgCIgEgBIgFABg");
	this.shape_2.setTransform(7.8,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgCgDgDQgDgCgBgFIgBgIIABgIQABgEADgCIAHgFIAFgBIAEgBIAJACQAFACADADQACACACAEQABAFAAADQAAAEgBAEIgEAHQgDADgFACIgJACgAgEgKIgDACIgCAFIgBADIABAFIACADIADADIAEABIAFgBIADgDIACgDIAAgFIAAgDIgCgFIgDgCIgFgBIgEABg");
	this.shape_5.setTransform(-3.8,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAZAAQAFAAADACQAEABADADIAEAGIABAIQAAAFgBAEIgEAFQgDADgEABQgDACgFAAIgOAAIAAAVgAgLAAIANAAIAEAAIADgCIACgDIAAgFIAAgEIgCgDIgDgCIgEgBIgNAAg");
	this.shape_6.setTransform(-8.8,-11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.1,46,14.2);


(lib.text2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(60.2,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(54.3,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_2.setTransform(48,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_3.setTransform(39.2,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(29.4,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJA/IAAhFIgQAAIAAgMIAQAAIAAgPIABgNQABgGADgDQADgEADgBQAEgCAGAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_5.setTransform(22.4,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXA9IAQgnIghhSIAQAAIAYBCIAZhCIAPAAIghBQIgOApg");
	this.shape_6.setTransform(10.8,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(1.6,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_8.setTransform(-8.3,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAyAqIAAgwIgBgIIgDgIQgCgCgDgCQgEgCgFAAQgFAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgDgBQgEgCgFAAQgGAAgEACQgEACgDAEQgEAEgCAFQgCAHABAGIAAAoIgPAAIAAhRIAOAAIAAAQIABAAIAEgIIAHgFQAEgCAEgCIAJgBQAHAAADABQAFACADADQACACACAEIADAIQADgEADgEIAHgGIAJgFQAFgBAFAAQAHAAAGACQAEADAEAEQADAFABAGQACAGAAAIIAAAxg");
	this.shape_9.setTransform(-20.3,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAqIAAhRIAOAAIAAAQIAAAAQAFgIAEgEIAIgFQADgBAFAAIAIABIgBAPIgJgBQgGAAgEACQgEABgCAEQgDAFgCAFQgBAFgBAGIAAAog");
	this.shape_10.setTransform(-35,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-43.7,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJA/IAAhFIgQAAIAAgMIAQAAIAAgPIABgNQACgGACgDQADgEAEgBQADgCAHAAIANACIAAAMIgLgBQgGAAgDAEQgCADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_12.setTransform(-51.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-12.2,127.2,24.4);


(lib.rays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-42.1,64.5,0,-42.1,64.5,148.6).s().p("ACjrIQDZBaCxChIxZSWg");
	this.shape.setTransform(199.4,167.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-61.4,68.6,0,-61.4,68.6,148.6).s().p("AGHrzQDnBkCnCuI4pTVg");
	this.shape_1.setTransform(225.9,156);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-58.5,51.5,0,-58.5,51.5,148.6).s().p("AHQoNQCoClBpDYI3BKfg");
	this.shape_2.setTransform(222.2,177.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],71.3,68.3,0,71.3,68.3,187.3).s().p("ArtnXQC1jrD+ikIQobNg");
	this.shape_3.setTransform(78.6,152.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],70.1,92.8,0,70.1,92.8,187.3).s().p("ArXr+QDGj5EKiTMAPfAkVg");
	this.shape_4.setTransform(72.8,116.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],48.1,81.9,0,48.1,81.9,187.3).s().p("Am8seQEAiXEng4IFSfbg");
	this.shape_5.setTransform(100.2,129.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-42.1,64.5,0,-42.1,64.5,148.6).s().p("ACjrIQDZBaCxChIxZSWg");
	this.shape_6.setTransform(199.4,167.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-61.4,68.6,0,-61.4,68.6,148.6).s().p("AGHrzQDnBkCnCuI4pTVg");
	this.shape_7.setTransform(225.9,156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-58.5,51.5,0,-58.5,51.5,148.6).s().p("AHQoNQCoClBpDYI3BKfg");
	this.shape_8.setTransform(222.2,177.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],71.2,68.3,0,71.2,68.3,187.3).s().p("ArtnXQC1jrD+ikIQobNg");
	this.shape_9.setTransform(78.6,152.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],70,92.8,0,70,92.8,187.3).s().p("ArXr+QDGj5EKiTMAPfAkVg");
	this.shape_10.setTransform(72.8,116.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],48.1,81.9,0,48.1,81.9,187.3).s().p("Am8seQEAiXEng4IFSfbg");
	this.shape_11.setTransform(100.2,129.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rays, new cjs.Rectangle(0,0,304.8,239.1), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape.setTransform(66.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgCgDIgEgDIgFAAIgFAAIgEAEIgEAGIgBAHIAAAcIgPAAIAAhZIAPAAIAAAgIAAAKIAFgFIAFgEQAFgDAFAAQAGAAAEACQAEACACADQADADABAEIABAKIAAAjg");
	this.shape_1.setTransform(60.5,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_2.setTransform(53.7,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAeg2IASAAIAABXg");
	this.shape_3.setTransform(44.7,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_4.setTransform(32.3,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(26.9,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgDgDIgDgDIgFAAIgFAAIgFAEIgCAGIgBAHIAAAcIgQAAIAAhZIAQAAIAAAgIAAAKIAEgFIAFgEQAFgDAFAAQAGAAAEACQADACADADQACADABAEIABAKIAAAjg");
	this.shape_6.setTransform(20.8,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBQADgCAEgBIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_7.setTransform(13.7,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgCgDIgEgDIgFAAIgFAAIgEAEIgEAGIgBAHIAAAcIgPAAIAAhZIAPAAIAAAgIAAAKIAFgFIAFgEQAEgDAGAAQAGAAAEACQAEACACADQADADABAEIABAKIAAAjg");
	this.shape_8.setTransform(7,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIAAAKQAEgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgDACIgEADIgCAFIgBAGIAAAcg");
	this.shape_9.setTransform(1.4,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIA8AAIAAAPIgsAAIAAAVIAoAAIAAAOIgoAAIAAAWIAtAAIAAAPg");
	this.shape_10.setTransform(-5,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-12.8,0,85.3,18.4), null);


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


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap16, null, new cjs.Matrix2D(1,0,0,1,-159.9,-67.3)).s().p("AmcJwIAAkJIrxAAIAAvWMAkaAAAIAAPhIskAAIAABqIoRAAIAACUg");
	this.shape.setTransform(116.6,67.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,4.9,233.1,124.9), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIgCADIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(191.7,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAWIAAgaIgBgFIgCgEIgDgCIgFgBQgDAAgCABIgGADQgCADgBADQgCADABAEIAAAVIgGAAIAAgqIAGAAIAAAJIACgEIAEgDIAEgCIAGgBQADAAADABIAFAEQADACAAADIABAHIAAAag");
	this.shape_1.setTransform(187.9,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_2.setTransform(182.9,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIADACIADABIAHgBIAAAFIgIABIgGgBg");
	this.shape_3.setTransform(178.8,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_4.setTransform(176.2,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAWIgFgDQgDgBgBgDQgBgDAAgEIABgGIADgDIAGgCIAGgBIAQACIAAgEIgBgEIgDgEIgEgCIgFgBIgIABIgHADIgBgGIAIgCIAIgBIAHABIAGADIAEAFQABAEAAAEIAAAbIgFAAIAAgKIgBAAIgDAFIgEADIgFACIgEABIgFgBgAgGABIgEABIgCADIgBADIABAFIACADIAEABIAEABIAFgBIAFgDQADgCABgDIACgIIgPgBg");
	this.shape_5.setTransform(172.5,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAiIAAgbIAAgGIgCgCIgDgDIgFgBQgDAAgCACIgFACQgDACgBAEQgBADgBAEIAAAWIgFAAIAAhDIAFAAIAAAYIAAAJIABAAIACgDIAEgEIAEgCIAFgBQAFAAADABIAEAEQACACABADIABAHIAAAbg");
	this.shape_6.setTransform(167.5,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAcIgCgEIgCgGIAAgJIAAgTIgIAAIAAgEIAIAAIAAgOIAFAAIAAAOIAMAAIAAAEIgMAAIAAAWIABAJIACACIACABIAHgBIAAAFIgIABIgFgBg");
	this.shape_7.setTransform(163.4,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOAWIAAgaIgBgFIgCgEIgDgCIgFgBQgDAAgCABIgGADQgCADgBADQgCADABAEIAAAVIgGAAIAAgqIAGAAIAAAJIACgEIAEgDIAEgCIAGgBQADAAAEABIAEAEQACACABADIABAHIAAAag");
	this.shape_8.setTransform(159.2,7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_9.setTransform(154.2,7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAcIgCgEIgCgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAFAAIAAAOIAMAAIAAAEIgMAAIAAAWIABAJIABACIADABIAHgBIAAAFIgIABIgFgBg");
	this.shape_10.setTransform(147.8,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAiIAAgbIAAgGIgCgCIgDgDIgFgBQgDAAgCACIgFACQgDACgBAEQgBADgBAEIAAAWIgFAAIAAhDIAFAAIAAAYIAAAJIABAAIACgDIAEgEIAEgCIAFgBQAFAAADABIAEAEQACACABADIABAHIAAAbg");
	this.shape_11.setTransform(143.7,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAWQgFgCgDgDQgDgCgCgFIgCgKIACgJIAFgHQADgDAFgBQADgCAFAAIAHABIAGADIAAAFIgHgDIgGgBIgHABIgFAEQgCACgCADQgBAEAAADQAAAFABADQACADACADQACACADABIAHABIAGgBIAHgCIAAAFIgGACIgHABIgIgBg");
	this.shape_12.setTransform(138.9,7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_13.setTransform(135.4,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIAAgaIgBgFIgCgEIgDgCIgFgBQgDAAgCABIgGADQgCADgBADQgCADABAEIAAAVIgGAAIAAgqIAGAAIAAAJIACgEIAEgDIAEgCIAGgBQADAAAEABIAEAEQACACABADIABAHIAAAag");
	this.shape_14.setTransform(131.8,7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIAgQgEgBgDgDQgDgDgCgEQgBgFAAgFQAAgFABgEQACgEADgDIAHgEQADgCAFAAIAEACIAFACQADABAEAGIABAAIAAgJIAAgYIAFAAIAABCIgFAAIAAgJIgBAAIgDAFIgEADIgFABIgEABQgFAAgDgCgAgGgEQgDABgCADIgEAEIgBAHIABAIIAEAFIAFAEIAGABIAHgBQADgBACgDIAEgGIABgHQAAgDgCgEQgBgDgCgBQgDgDgDgBQgDgBgDAAQgDAAgDABg");
	this.shape_15.setTransform(123.9,6.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAOAWIAAgaIgBgFIgCgEIgDgCIgFgBQgDAAgCABIgGADQgCADgBADQgCADABAEIAAAVIgGAAIAAgqIAGAAIAAAJIACgEIAEgDIAEgCIAGgBQADAAADABIAGAEQACACAAADIABAHIAAAag");
	this.shape_16.setTransform(118.6,7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBg");
	this.shape_17.setTransform(114.9,6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIAWIgIgCIACgGIAGADIAIABIAEgBIADgBIADgDIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDgCIgIgDQgHgBgCgBIgDgDIgBgFQAAgDABgDQABgCADgCIAFgCIAEgBIAIABIAHADIgCAFIgGgDIgHgBQgDAAgDACIgCACIgBAEIABADIADACIAIADIAFABIAEABIADADIACAFQAAAEgCADIgEAEIgFACIgGABIgIgBg");
	this.shape_18.setTransform(111.8,7.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_19.setTransform(105,7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_20.setTransform(101.4,6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_21.setTransform(97.9,7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_22.setTransform(94.3,6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAhIAAhAIAFAAIAAAJIAEgEIAEgEIAFgBIAEgBQAFAAAEABQAEACACADQADADACAEQABAFAAAFQAAAFgBAEQgCADgDADQgCAEgEABQgEABgFAAIgEAAIgFgCIgEgDIgDgEIgBAAIAAAJIAAAVgAgGgZIgFADIgEAGIgBAHQAAAEACADQABADACACIAGADIAGABIAGgBIAFgDQADgCABgDIABgHIgBgHQgBgEgDgCQgCgDgDAAQgDgCgDAAQgDAAgEACg");
	this.shape_23.setTransform(90.5,8.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAhQgGgBgFgEIACgFIAKAEIAJABIAGgBQADAAACgCQADgCABgCQABgDAAgCQAAgEgBgCIgEgEIgGgCIgGgDIgHgBIgGgDIgEgFQgCgDAAgFQAAgEACgDIAFgGIAHgDIAHgBIAJABIALAFIgBAGIgKgGIgJgBIgFABIgFACIgEAEIgBAFQAAADACADQABACADABIALAFIAHACIAGADIAEAEQACADAAAFQAAAFgCAEQgCADgDADIgHADIgIABIgKgBg");
	this.shape_24.setTransform(85,6.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_25.setTransform(77.6,7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAhIgIgBIAAgGIAIACIAJAAIAGAAIAFgDQADgCABgEQACgDAAgFIAAgJIAAAAIgHAHIgGACIgEABQgEAAgEgCQgEgBgDgDQgDgDgBgDQgCgFAAgFQAAgFACgEQABgFADgDIAHgEQAEgCAEAAIAEACIAFABIAEADIAEAFIAAAAIAAgJIAFAAIAAApIgCALIgCAEIgCADQgDADgFACIgIABIgJgBgAgGgaQgDABgCADIgEAFIAAAHIAAAIIAEAEIAFAEIAGABIAHgBIAFgEIAEgEQABgDAAgFIgBgHQgCgDgCgCQgCgCgDgCQgEgBgDAAQgDAAgDABg");
	this.shape_26.setTransform(72.3,8.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_27.setTransform(68.4,6.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AANAWIAAgaIAAgFIgCgEIgDgCIgFgBQgDAAgCABIgFADQgDADgBADQgCADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAEgEIADgDIAFgCIAEgBQAFAAACABIAGAEQABACABADIABAHIAAAag");
	this.shape_28.setTransform(64.8,7.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_29.setTransform(61.1,6.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAhIAAhBIAoAAIAAAGIgiAAIAAAZIAgAAIAAAEIggAAIAAAZIAjAAIAAAFg");
	this.shape_30.setTransform(57.4,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(52.4,-1.3,142.6,14.8), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgDACAAQADAAACADQACACAAACQAAADgCACQgCADgDAAQgCAAgCgDg");
	this.shape.setTransform(698.1,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAtQgCgCgCgEIgCgKIgBgOIAAgfIgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIAVAAIAAAIIgVAAIAAAjQAAALACAEIACAEIAGABQAGAAAFgCIAAAIQgFACgIAAQgGAAgDgCg");
	this.shape_1.setTransform(693.7,-37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDA0IAAhGIAIAAIAABGgAgEgnQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgCACgDAAQgCAAgCgCg");
	this.shape_2.setTransform(689.5,-37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAiQgHgCgEgEQgGgEgCgIQgCgEgBgMQAAgGADgKQACgHAGgFQAEgEAHgCQAFgCAGAAQAIAAAFACQAGACAEAEQAEAFADAHQACAHAAAJIAAAEIg4AAQABAGACAFQABAFAEADQAEADAFABIALACIAMgCIAMgEIABAJIgNADIgMACQgIAAgHgDgAAYgDQAAgGgBgFQgCgEgDgDQgDgEgFgCQgEgBgFAAIgIABQgEACgEADQgDADgCAEQgDAFAAAHIAvAAIAAAAg");
	this.shape_3.setTransform(683.7,-36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoA1IAAgHIBDhaIhCAAIAAgIIBOAAIAAAHIhDBaIBEAAIAAAIg");
	this.shape_4.setTransform(674.9,-37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAiQgHgCgFgEQgEgEgDgIQgCgEgBgMQAAgGADgKQACgHAFgFQAFgEAHgCQAGgCAFAAQAIAAAFACQAGACAEAEQAEAFACAHQADAHAAAJIAAAEIg4AAQAAAGADAFQACAFADADQAEADAFABIAKACIANgCIAMgEIABAJIgMADIgOACQgHAAgHgDgAAYgDQAAgGgCgFQgBgEgDgDQgDgEgFgCQgDgBgGAAIgIABQgEACgEADQgDADgCAEQgCAFgBAHIAvAAIAAAAg");
	this.shape_5.setTransform(662.4,-36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAtQgCgCgCgEIgCgKIgBgOIAAgfIgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIAVAAIAAAIIgVAAIAAAjQAAALACAEIACAEIAGABQAGAAAFgCIAAAIQgFACgIAAQgGAAgDgCg");
	this.shape_6.setTransform(655.7,-37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAjIAAgFIAqg4IgoAAIAAgIIA1AAIAAAFIgqA4IAsAAIgBAIg");
	this.shape_7.setTransform(650,-36.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAkIAAgrIgBgIIgDgGIgFgFQgEgBgFAAIgJABQgEACgEAEQgEAEgCAFQgCAGAAAGIAAAjIgJAAIAAhGIAJAAIAAAPIAAAAIAEgGIAGgFIAIgEIAIgBQAHAAAFACQAFACADADQADAEABAFQACAFAAAGIAAAsg");
	this.shape_8.setTransform(642.6,-36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAiQgHgCgFgEQgEgEgEgIQgBgEgBgMQAAgGADgKQACgHAFgFQAFgEAHgCQAFgCAHAAQAGAAAGACQAGACAEAEQAEAFACAHQADAHAAAJIAAAEIg4AAQABAGABAFQADAFADADQAEADAFABIAKACIANgCIAMgEIABAJIgMADIgOACQgHAAgHgDgAAYgDQAAgGgCgFQgBgEgDgDQgDgEgFgCQgDgBgGAAIgIABQgEACgEADQgDADgCAEQgCAFgBAHIAvAAIAAAAg");
	this.shape_9.setTransform(634.4,-36.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAkIAAhGIAIAAIAAAPIABAAQADgHAFgEIAFgEIAIgBIAGAAIgBAKIgHgBQgEAAgFACQgCACgDAEQgDAEgBAFQgCAFAAAFIAAAjg");
	this.shape_10.setTransform(628.1,-36.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPA2IgOgDIABgIIANADIAOAAQAFAAAFgBQAGgCAEgDQAEgDACgGQACgGAAgHIAAgPIAAAAQgHAJgFADIgIADQgEABgEAAQgHAAgGgCQgHgDgEgEQgFgFgCgGQgDgHAAgJQAAgIADgIQACgGAFgFQAEgEAHgDQAGgDAHABIAIAAIAHADIAIAFIAFAHIAAAAIAAgOIAJAAIAABFQAAAGgDALIgDAGIgFAGQgFAEgHADQgHACgIAAIgNgBgAgKgrQgFACgEADQgDAEgCAFQgCAFAAAHQAAAHACAFQACAFADADQAEAFAFABQAFACAFAAQAFAAAGgCQAEgCAFgEQAEgDABgFQACgGAAgGQAAgFgCgGQgCgFgDgEQgEgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_11.setTransform(620.5,-34.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAiQgHgCgEgEQgGgEgDgIQgBgEgBgMQAAgGADgKQACgHAGgFQAEgEAGgCQAHgCAGAAQAGAAAGACQAGACAEAEQAFAFACAHQACAHAAAJIAAAEIg4AAQAAAGACAFQACAFAFADQADADAFABIALACIAMgCIANgEIAAAJIgNADIgMACQgIAAgHgDgAAYgDQAAgGgBgFQgCgEgDgDQgDgEgEgCQgFgBgFAAIgIABQgEACgDADQgEADgCAEQgDAFAAAHIAvAAIAAAAg");
	this.shape_12.setTransform(611.9,-36.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA3IgIgDIgGgFIgGgHIgBAAIAAAOIgIAAIAAhtIAIAAIAAAnIAAAOIABAAIAFgGIAGgFIAIgDIAIgBQAIAAAGACQAHACAEAFQAFAFADAGQACAHAAAIQAAAJgCAHQgDAHgFAFQgEAFgHACQgGADgIAAIgHgBgAgJgHQgGACgDAEQgEADgDAFQgCAFAAAGQAAAGACAGQACAFAEAEQAEAEAFACQAGACAEAAQAGAAAFgCQAFgBADgEQAEgEACgFQACgGAAgHQAAgGgCgGQgCgFgEgDQgDgDgFgCQgFgCgGAAQgEAAgFACg");
	this.shape_13.setTransform(603.5,-38);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAkIAAhGIAIAAIAAAPIABAAQADgHAFgEIAFgEIAIgBIAGAAIgBAKIgGgBQgFAAgEACQgDACgDAEQgDAEgBAFQgCAFAAAFIAAAjg");
	this.shape_14.setTransform(592.8,-36.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAxQgFgCgDgEQgDgEgBgFIgBgKIAAgsIAIAAIAAAqIABAJIADAGIAGAFQADABAFAAQAFAAAEgCQAFgCADgEQAEgEACgGQACgFAAgIIAAggIAIAAIAABGIgIAAIAAgQQgGAJgEADIgHAEQgFABgEAAQgHAAgFgCgAAJgmQgCgCAAgDQAAgDACgCQACgCADAAQAEAAACACQACACAAADQAAADgCACQgCACgEAAQgDAAgCgCgAgTgmQgCgCAAgDQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_15.setTransform(585.5,-37.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHA2IAAg9IgNAAIAAgIIANAAIAAgPQAAgGACgFQABgEADgDQABgDADgBIAHgBQAGAAAGABIAAAIIgLgBQgGAAgBAEQgDADAAAIIAAAPIAQAAIAAAIIgQAAIAAA9g");
	this.shape_16.setTransform(579.3,-38);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAkIAAhGIAIAAIAAAPIABAAQADgHAFgEIAFgEIAIgBIAGAAIgBAKIgGgBQgFAAgFACQgCACgDAEQgDAEgBAFQgCAFAAAFIAAAjg");
	this.shape_17.setTransform(570.8,-36.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAiQgFgCgDgEQgDgEgBgFIgBgLIAAgrIAIAAIAAAqIABAIIADAHIAGAEQADACAFAAQAFAAAEgCQAFgCADgEQAEgEACgGQACgGAAgGIAAghIAIAAIAABFIgIAAIAAgPQgGAJgEADIgHAEQgFABgEAAQgHAAgFgCg");
	this.shape_18.setTransform(563.6,-36);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAiA1IhEhbIAABbIgJAAIAAhpIAKAAIBEBbIAAhbIAJAAIAABpg");
	this.shape_19.setTransform(553.6,-37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(543.5,-50.8,161.1,26), null);


(lib.kirk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap14, null, new cjs.Matrix2D(0.944,0,0,0.944,-151.9,-236.6)).s().p("AKQKPQgBgFAAgKIgBgQQgDgPgQgKQgJgGgJgBIAAgCIAAgEIgBgDIAAgDIgBgFIgBgCIgDgFIgCgDIgGgDIgJgDIAAACIgKABIgGADIgDADIgCAFIgCACIAAAFIgBADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAABIxnAAIAAgBIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIgBgDIAAgEIAAgDIAAgEIABgDIgBgEIAAgEIgBgDIgBgEIgCgEIgDgCIgBgBIAAgBQAEgGgDgIQgDgGgHgCQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCAAQgDAAgEAFQgIAGgCAGIgBAHIgDACIgCAEIgCADIAAABIgHAAIgGACIgBAAIAAAAIgBABIgBAAQgFABgDAFIgGAJQgCADgHADIgGAAQgIABgGAHQgDAEgCAGQgFACgEAIQgDAHACAGQABAKAIAFIAAABIgBAXQAAANACAIIAGAMIAFAMIACANImAAAQALgQACgPQABgSACgIQACgHAIgKIARgXQAIgKAGgEIADgDIAWACQAuAGASgVQALgMgDgSIAAgCIADgNQAEgMAPgUIA/hOIAxg8QAOgSAJgHIAigVQATgNAFgPQACgGABgLQABgMACgFIAPgVQAFgIAFgNIAHgVIANgaQAJgRADgJQAMgdgKgTIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgCIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIgBgEIAAgDIAAgEIAAgDIAAgDIAAgDQAGgCAMgBQASgCAegIQAhgJAOgBQAOgCAjgBQAYAAAQgDQARAEASgDQAWgCALgMQAKgNgCgSQAAgMgFgJIgBgDQACgGAAgIQABgLgEgKIgCgEIACgFQAHgHAGgIQAJgOAEgNQAHgHAFgCIAYgJQAPgFAFgJQACgCACgIQABgHACgDIAOgLQAEgEADgFQAKACAMAAQAYAAAQgEQAGgCARgHIAEgCIAHABIAZAHIAQACIALAGIAUAOQAIAFAOAUQAKANAJAKQAJAKACAGQACAGAAALQAAALACAGIAEAMQAAAEgFAJQgRAeALAYQAFAQASAGQAQAFAPgHIAUABIBHAAQBHABAdAEIASADIAMADQAVADAigCQApgCAOABIAoAFQAYADAiACQAcABALADIAaAIQATAFAXgBIABABQAPAHAMADIAEAMIAAADIAAADIAAAEIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAADIAAAEIAAADIAAADIAAAFIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAABIAAADIAAADIABACQgFAHgDAHIgBAEIgEAEIgDADIgDAEIgCAEIgCADIAAAEIAAADIAAADIgCAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAACIAAACQAAAFACAGIAAACIAAABIACAEIACADIABABIACACIAAABIAGAGIABAAIAEAEIAIAEIADAAIAOAGIATANIAYATIAcAZQARANARAGIAaAJIATAKQAQAGAdgBIANAAIATABQAIABASAJIAWAMIAKAHIAMAGIAPACQAOAFAIATIAHAPQAEAIAFAGQAGAHAKAEIADAAIAEALIAGAbQAEAPAMAWQAGAIACAGIABAQIABADg");
	this.shape.setTransform(104,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kirk, new cjs.Rectangle(0,0,208.1,131), null);


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


(lib.game_loneecho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_2_loneecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_loneecho, new cjs.Rectangle(0,0,131,131), null);


(lib.flare2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.flare, null, new cjs.Matrix2D(1,0,0,1,-52.5,-164)).s().p("AoMFoIAArPIQZAAIAALPg");
	this.shape.setTransform(52.5,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.549)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,54.6).s().p("AiLIKQjYg6hwjCQhwjBA6jYQA7jYDBhwQDChvDXA6QDYA6BwDBQBvDCg6DXQg5DYjCBwQh/BJiKAAQhGAAhKgTg");
	this.shape_1.setTransform(56.9,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare2, new cjs.Rectangle(0,-21.8,111,108.3), null);


(lib.flare1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.flare, null, new cjs.Matrix2D(1,0,0,1,-52.5,-64)).s().p("AoMKAIAAz/IQZAAIAAT/g");
	this.shape.setTransform(52.5,64);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.549)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,54.6).s().p("AiLIKQjYg6hwjCQhwjBA7jYQA6jYDBhwQDBhvDXA6QDZA6BwDBQBwDCg7DXQg6DYjBBwQh/BJiKAAQhGAAhKgTg");
	this.shape_1.setTransform(52.7,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare1, new cjs.Rectangle(-1.5,0,108.3,128.8), null);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap42();
	this.instance.parent = this;
	this.instance.setTransform(-142,-2,1.02,1.02);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-142,-2,1295.5,255), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHEOQgsgMgigXQgqgkgQgYIgVgoIgOgvIg7AAIAHhDIAtAAIgBgUIABgTIg0AAIAHhEIA0AAQAHgiAcg1QAQgYAqgkQAigYAsgLQAqgMAzAAQA0AABkAbIgHBxQglgNgkgGQgmgIgiABQgZgBgVAEQgVAGgSAJQgRAKgNAPQgNAQgJAVID3AAIgNBEIj2AAIgBATIABAUIDtAAIgOBDIjSAAQAJAVANAQQANAOARAKQARAKAWAFQAUADAZAAQAiABAmgIQAkgGAlgNIAHBxQhkAbg0AAQgzgBgqgKg");
	this.shape.setTransform(1022.2,149.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai8GrQAxgnBVheQA7hGAwhQQgwALg7AAQg5AAgzgUQgxgUgmgmQglglgVgwQgVgzAAg7QAAgwAZhSQAQgnA1g8QAtgpA8gWQAogOBcgIQAyAABWAZQA7AXAsArQAqApAXA3QAWA3AAA+QAAA/gYBMQgWBKgpBOQgoBMg1BGQg0BGg5A2gAg1j7QgZAKgSATQgSASgJAYQgKAZAAAbQAAAbAKAZQAKAYARATQATASAZAKQAaAKAdAAQAfAAAagKQAYgKATgSQARgTAKgYQAJgZAAgbQAAgbgJgZQgKgYgRgSQgTgTgYgKQgagLgfAAQgeAAgaALg");
	this.shape_1.setTransform(955.4,163.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfGjIAAibIl1AAIAAiiIF2oJIC7AAIAAIJIB8AAIgGCiIh2AAIAACbgAiPBmICuAAIAAjyIgDAAg");
	this.shape_2.setTransform(879.9,164.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfGjIAAibIl1AAIAAiiIF2oJIC7AAIAAIJIB8AAIgGCiIh2AAIAACbgAiPBmICuAAIAAjyIgDAAg");
	this.shape_3.setTransform(804,164.5);

	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(20.5,302.2,1.465,1.465,0,0,0,37.6,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(761.2,90.2,294.3,165.6), null);


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


(lib.flare_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.flare1();
	this.instance.parent = this;
	this.instance.setTransform(-64.4,-70,1,1,-45,0,0,52.6,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:63.9,scaleX:1,scaleY:1,rotation:39.4,x:99.7,y:56.4},14,cjs.Ease.get(1)).to({regX:52.5,regY:64,scaleX:1,scaleY:1,rotation:135,x:227.5,y:227,alpha:0.18},15,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.flare2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,209,1,1,-15,0,0,52.6,36);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:30,y:209.1,alpha:1},14).to({regX:52.5,rotation:90,x:6.5,y:209,alpha:0},15).wait(1));

	// Layer 3
	this.instance_2 = new lib.rays();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.2,90.6,1,1,0,0,0,152.4,119.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.719},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-152.3,318.5,423.1);


// stage content:
(lib.oculus_trek_970x250_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(485,112.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:1132.4,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(177));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,112.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-175.2,y:243.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(174));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485,113.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-168,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(171));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(485,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:74.4,y:-161.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(168));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(485,113.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:1017.6,y:-164},32,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(485.1,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:176.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(485,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:663.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,-60.9,0,61).s().p("A3lJiIAAzDMAvLAAAIAATDg");
	this.shape.setTransform(709,190);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.059)"],[0,0.98],0,-63.6,0,63.6).s().p("A3lJ8IAAz3MAvLAAAIAAT3g");
	this.shape_1.setTransform(709,187.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.118)"],[0,0.957],0,-66.2,0,66.2).s().p("A3lKWIAA0rMAvLAAAIAAUrg");
	this.shape_2.setTransform(709,184.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],0,-68.8,0,68.8).s().p("A3lKxIAA1gMAvLAAAIAAVgg");
	this.shape_3.setTransform(709,182.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.239)"],[0,0.914],0,-71.4,0,71.4).s().p("A3lLLIAA2VMAvLAAAIAAWVg");
	this.shape_4.setTransform(709,179.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)"],[0,0.894],0,-74,0,74).s().p("A3lLlIAA3JMAvLAAAIAAXJg");
	this.shape_5.setTransform(709,177);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],0,-76.6,0,76.6).s().p("A3lL/IAA38MAvLAAAIAAX8g");
	this.shape_6.setTransform(709,174.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.42)"],[0,0.851],0,-79.3,0,79.2).s().p("A3lMZIAA4xMAvLAAAIAAYxg");
	this.shape_7.setTransform(709,171.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.478)"],[0,0.827],0,-81.9,0,81.8).s().p("A3lMzIAA5lMAvLAAAIAAZlg");
	this.shape_8.setTransform(709,169.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3lNNIAA6ZMAvLAAAIAAaZg");
	this.shape_9.setTransform(709,166.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3nNNIAA6ZMAvPAAAIAAaZg");
	this.shape_10.setTransform(709,166.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3pNNIAA6ZMAvTAAAIAAaZg");
	this.shape_11.setTransform(709,166.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3rNNIAA6ZMAvXAAAIAAaZg");
	this.shape_12.setTransform(709,166.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A3tNNIAA6ZMAvbAAAIAAaZg");
	this.shape_13.setTransform(709,166.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3vNNIAA6ZMAvfAAAIAAaZg");
	this.shape_14.setTransform(708.9,166.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3xNNIAA6ZMAvjAAAIAAaZg");
	this.shape_15.setTransform(708.9,166.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3zNNIAA6ZMAvnAAAIAAaZg");
	this.shape_16.setTransform(708.9,166.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A31NNIAA6ZMAvsAAAIAAaZg");
	this.shape_17.setTransform(708.9,166.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A34NNIAA6ZMAvxAAAIAAaZg");
	this.shape_18.setTransform(708.9,166.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A36NNIAA6ZMAv0AAAIAAaZg");
	this.shape_19.setTransform(708.9,166.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A38NNIAA6ZMAv5AAAIAAaZg");
	this.shape_20.setTransform(708.9,166.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3+NNIAA6ZMAv9AAAIAAaZg");
	this.shape_21.setTransform(708.9,166.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4ANNIAA6ZMAwBAAAIAAaZg");
	this.shape_22.setTransform(708.9,166.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4CNNIAA6ZMAwFAAAIAAaZg");
	this.shape_23.setTransform(708.9,166.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4ENNIAA6ZMAwJAAAIAAaZg");
	this.shape_24.setTransform(708.9,166.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4HNNIAA6ZMAwOAAAIAAaZg");
	this.shape_25.setTransform(708.9,166.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4INNIAA6ZMAwRAAAIAAaZg");
	this.shape_26.setTransform(708.9,166.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4KNNIAA6ZMAwWAAAIAAaZg");
	this.shape_27.setTransform(708.9,166.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4NNNIAA6ZMAwbAAAIAAaZg");
	this.shape_28.setTransform(708.8,166.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4PNNIAA6ZMAwfAAAIAAaZg");
	this.shape_29.setTransform(708.8,166.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4RNNIAA6ZMAwjAAAIAAaZg");
	this.shape_30.setTransform(708.8,166.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4TNNIAA6ZMAwnAAAIAAaZg");
	this.shape_31.setTransform(708.8,166.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4VNNIAA6ZMAwrAAAIAAaZg");
	this.shape_32.setTransform(708.8,166.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4XNNIAA6ZMAwvAAAIAAaZg");
	this.shape_33.setTransform(708.8,166.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4ZNNIAA6ZMAwzAAAIAAaZg");
	this.shape_34.setTransform(708.8,166.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4bNNIAA6ZMAw3AAAIAAaZg");
	this.shape_35.setTransform(708.8,166.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4dNNIAA6ZMAw7AAAIAAaZg");
	this.shape_36.setTransform(708.8,166.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4gNNIAA6ZMAxBAAAIAAaZg");
	this.shape_37.setTransform(708.8,166.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4hNNIAA6ZMAxDAAAIAAaZg");
	this.shape_38.setTransform(708.8,166.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4jNNIAA6ZMAxHAAAIAAaZg");
	this.shape_39.setTransform(708.8,166.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4mNNIAA6ZMAxNAAAIAAaZg");
	this.shape_40.setTransform(708.7,166.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4oNNIAA6ZMAxRAAAIAAaZg");
	this.shape_41.setTransform(708.7,166.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4qNNIAA6ZMAxVAAAIAAaZg");
	this.shape_42.setTransform(708.7,166.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4sNNIAA6ZMAxZAAAIAAaZg");
	this.shape_43.setTransform(708.7,166.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4uNNIAA6ZMAxdAAAIAAaZg");
	this.shape_44.setTransform(708.7,166.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4wNNIAA6ZMAxhAAAIAAaZg");
	this.shape_45.setTransform(708.7,166.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A4yNNIAA6ZMAxlAAAIAAaZg");
	this.shape_46.setTransform(708.7,166.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A40NNIAA6ZMAxpAAAIAAaZg");
	this.shape_47.setTransform(708.7,166.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A42NNIAA6ZMAxtAAAIAAaZg");
	this.shape_48.setTransform(708.7,166.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A45NNIAA6ZMAxyAAAIAAaZg");
	this.shape_49.setTransform(708.7,166.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A47NNIAA6ZMAx3AAAIAAaZg");
	this.shape_50.setTransform(708.7,166.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A49NNIAA6ZMAx7AAAIAAaZg");
	this.shape_51.setTransform(708.7,166.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A4/NNIAA6ZMAx/AAAIAAaZg");
	this.shape_52.setTransform(708.7,166.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5BNNIAA6ZMAyDAAAIAAaZg");
	this.shape_53.setTransform(708.7,166.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A5DNNIAA6ZMAyHAAAIAAaZg");
	this.shape_54.setTransform(708.6,166.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5FNNIAA6ZMAyLAAAIAAaZg");
	this.shape_55.setTransform(708.6,166.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5HNNIAA6ZMAyPAAAIAAaZg");
	this.shape_56.setTransform(708.6,166.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5JNNIAA6ZMAyUAAAIAAaZg");
	this.shape_57.setTransform(708.6,166.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5LNNIAA6ZMAyXAAAIAAaZg");
	this.shape_58.setTransform(708.6,166.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5ONNIAA6ZMAycAAAIAAaZg");
	this.shape_59.setTransform(708.6,166.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A5QNNIAA6ZMAyhAAAIAAaZg");
	this.shape_60.setTransform(708.6,166.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5SNNIAA6ZMAylAAAIAAaZg");
	this.shape_61.setTransform(708.6,166.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5UNNIAA6ZMAypAAAIAAaZg");
	this.shape_62.setTransform(708.6,166.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5WNNIAA6ZMAytAAAIAAaZg");
	this.shape_63.setTransform(708.6,166.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5YNNIAA6ZMAyxAAAIAAaZg");
	this.shape_64.setTransform(708.6,166.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5aNNIAA6ZMAy1AAAIAAaZg");
	this.shape_65.setTransform(708.6,166.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A5gNNIAA6ZMAzBAAAIAAaZg");
	this.shape_66.setTransform(708.5,166.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A5rNNIAA6ZMAzWAAAIAAaZg");
	this.shape_67.setTransform(708.4,166.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A55NNIAA6ZMAzzAAAIAAaZg");
	this.shape_68.setTransform(708.3,166.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A6LNNIAA6ZMA0XAAAIAAaZg");
	this.shape_69.setTransform(708.1,166.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A6hNNIAA6ZMA1DAAAIAAaZg");
	this.shape_70.setTransform(708,166.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A68NNIAA6ZMA15AAAIAAaZg");
	this.shape_71.setTransform(707.7,166.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A7bNNIAA6ZMA23AAAIAAaZg");
	this.shape_72.setTransform(707.5,166.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A79NNIAA6ZMA37AAAIAAaZg");
	this.shape_73.setTransform(707.2,166.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A8kNNIAA6ZMA5JAAAIAAaZg");
	this.shape_74.setTransform(706.9,166.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A9PNNIAA6ZMA6fAAAIAAaZg");
	this.shape_75.setTransform(706.5,166.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A9+NNIAA6ZMA79AAAIAAaZg");
	this.shape_76.setTransform(706.1,166.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A+xNNIAA6ZMA9jAAAIAAaZg");
	this.shape_77.setTransform(705.7,166.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("A/oNNIAA6ZMA/RAAAIAAaZg");
	this.shape_78.setTransform(705.2,166.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("EggkANNIAA6ZMBBJAAAIAAaZg");
	this.shape_79.setTransform(704.8,166.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("EghjANNIAA6ZMBDHAAAIAAaZg");
	this.shape_80.setTransform(704.2,166.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("EgimANNIAA6ZMBFNAAAIAAaZg");
	this.shape_81.setTransform(703.7,166.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("EgjuANNIAA6ZMBHcAAAIAAaZg");
	this.shape_82.setTransform(703.1,166.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("Egk5ANNIAA6ZMBJzAAAIAAaZg");
	this.shape_83.setTransform(702.5,166.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("EgmJANNIAA6ZMBMTAAAIAAaZg");
	this.shape_84.setTransform(701.8,166.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("EgncANNIAA6ZMBO5AAAIAAaZg");
	this.shape_85.setTransform(701.1,166.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("Ego0ANNIAA6ZMBRpAAAIAAaZg");
	this.shape_86.setTransform(700.4,166.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-84.5,-0.1,84.4).s().p("EgqQANNIAA6ZMBUhAAAIAAaZg");
	this.shape_87.setTransform(699.6,166.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.494)"],[0,0.824],-0.1,-82.6,-0.1,82.4).s().p("EgslAM5IAA5yMBZLAAAIAAZyg");
	this.shape_88.setTransform(700.9,168.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.447)"],[0,0.839],-0.1,-80.6,-0.1,80.5).s().p("Egu6AMmIAA5LMBd1AAAIAAZLg");
	this.shape_89.setTransform(702.3,170.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.404)"],[0,0.855],-0.2,-78.6,-0.2,78.6).s().p("EgxPAMSIAA4jMBigAAAIAAYjg");
	this.shape_90.setTransform(703.6,172.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],-0.1,-76.6,-0.1,76.6).s().p("EgzlAL/IAA38MBnLAAAIAAX8g");
	this.shape_91.setTransform(704.9,174.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.314)"],[0,0.886],-0.2,-74.7,-0.2,74.7).s().p("Eg16ALrIAA3VMBr1AAAIAAXVg");
	this.shape_92.setTransform(706.3,176.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.271)"],[0,0.906],-0.2,-72.7,-0.2,72.7).s().p("Eg4PALYIAA2vMBwfAAAIAAWvg");
	this.shape_93.setTransform(707.6,178.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.224)"],[0,0.922],-0.2,-70.8,-0.2,70.7).s().p("Eg6lALEIAA2HMB1KAAAIAAWHg");
	this.shape_94.setTransform(709,180.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],-0.2,-68.8,-0.2,68.8).s().p("Eg86AKxIAA1gMB51AAAIAAVgg");
	this.shape_95.setTransform(710.3,182.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,0.953],-0.2,-66.8,-0.2,66.9).s().p("Eg/PAKdIAA05MB+fAAAIAAU5g");
	this.shape_96.setTransform(711.6,184.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.09)"],[0,0.969],-0.3,-64.9,-0.3,64.9).s().p("EhBkAKJIAA0RMCDJAAAIAAURg");
	this.shape_97.setTransform(713,186.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.043)"],[0,0.984],-0.2,-62.9,-0.2,63).s().p("EhD5AJ1IAAzqMCHzAAAIAATqg");
	this.shape_98.setTransform(714.3,188);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.3,-60.9,-0.3,61).s().p("EhGPAJiIAAzDMCMeAAAIAATDg");
	this.shape_99.setTransform(715.6,190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[]},1).wait(60));

	// Layer 9
	this.instance_7 = new lib.flare_1("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(693.5,148,1,1,0,0,0,52.5,100);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72).to({_off:false},0).to({_off:true},38).wait(100));

	// Layer 2
	this.instance_8 = new lib.kirk();
	this.instance_8.parent = this;
	this.instance_8.setTransform(468.1,125.7,0.073,0.073,0,0,0,104.6,65.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({regX:104,regY:65.5,scaleX:1,scaleY:1,x:709,y:185.5},20).to({scaleX:1.08,scaleY:1.08,x:709.1,y:192.3},67).to({regX:103.8,regY:65.6,scaleX:1.85,scaleY:1.85,x:711.8,y:302.8},23,cjs.Ease.get(-1)).to({_off:true},1).wait(72));

	// Layer 15
	this.instance_9 = new lib.logo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(468.3,114.2,0.044,0.044,0,0,0,116.8,65.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({regY:64.9,scaleX:0.6,scaleY:0.6,x:706.3,y:38.7},20).wait(67).to({regX:117.2,regY:64.3,scaleX:0.76,scaleY:0.76,x:706.6,y:37.5},23,cjs.Ease.get(-1)).to({regX:116.9,regY:64.5,scaleX:1.43,scaleY:1.43,x:706.3,y:28.6,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 1
	this.instance_10 = new lib.Tween5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(468.1,118,0.069,0.069,0,0,0,0.7,0.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({regX:0,regY:0,scaleX:0.94,scaleY:0.94,x:708,y:79.3},20).to({regX:0.1,regY:0.1,scaleX:1.02,scaleY:1.02,x:708.1,y:77.7},67).to({regX:0,regY:0,scaleX:1.76,scaleY:1.76,x:709.9,y:104.7},23,cjs.Ease.get(-1)).to({scaleX:2.81,scaleY:2.81,x:709.5,y:124.3,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_41 = new cjs.Graphics().p("EggLAC3IAAltMBAYAAAIAAFtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_graphics_41,x:280,y:92.4}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 11
	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(274.4,127.1,1.579,1.579);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46).to({_off:false},0).to({y:94},9).wait(55).to({startPosition:0},0).to({scaleX:1.9,scaleY:1.9,x:251.5,y:91.7},23,cjs.Ease.get(-1)).to({scaleX:3.83,scaleY:3.83,x:185.4,y:55.4,alpha:0},12).to({_off:true},1).wait(64));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("EggLAC3IAAltMBAYAAAIAAFtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:280,y:130.3}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 12
	this.instance_12 = new lib.text2_mc("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(274.4,165,1.579,1.579);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween9("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(185.4,158.6,3.825,3.825);
	this.instance_13.alpha = 0;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},51).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_12}]},50).to({state:[{t:this.instance_12}]},23).to({state:[{t:this.instance_13}]},12).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(51).to({_off:false},0).to({y:128.7},9).wait(50).to({startPosition:0},0).to({scaleX:1.9,scaleY:1.9,x:251.5,y:133.6},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.83,scaleY:3.83,x:185.4,y:158.6,alpha:0},12).wait(65));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_41 = new cjs.Graphics().p("EggLAC3IAAltMBAYAAAIAAFtg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_2_graphics_41,x:280,y:166.6}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 13
	this.instance_14 = new lib.text3_mc("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(394.4,204.5,1.579,1.579);
	this.instance_14._off = true;

	this.instance_15 = new lib.text3("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(476.2,252.2,3.825,3.825);
	this.instance_15.alpha = 0;

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},56).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_14}]},45).to({state:[{t:this.instance_14}]},23).to({state:[{t:this.instance_15}]},12).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(56).to({_off:false},0).to({y:166.6},9).wait(45).to({startPosition:0},0).to({scaleX:1.9,scaleY:1.9,x:396.1,y:179.3},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.83,scaleY:3.83,x:476.2,y:252.2,alpha:0},12).wait(65));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(849,118.5,1.207,1.207,0,0,0,127.8,-4.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(144).to({_off:false},0).wait(66));

	// legal
	this.instance_16 = new lib.legal_withpurchase();
	this.instance_16.parent = this;
	this.instance_16.setTransform(648.4,163,1.296,1.296,0,0,0,117.9,8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(154).to({_off:false},0).to({alpha:1},8).wait(48));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_148 = new cjs.Graphics().p("AdFNZIAAwLIcwAAIAAQLg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(148).to({graphics:mask_3_graphics_148,x:370.1,y:85.7}).wait(62));

	// price
	this.instance_17 = new lib.newPrice();
	this.instance_17.parent = this;
	this.instance_17.setTransform(154.8,123.6,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(148).to({_off:false},0).to({y:28.6},10,cjs.Ease.get(1)).wait(52));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_148 = new cjs.Graphics().p("Ay/DwIAAnfMAl/AAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(148).to({graphics:mask_4_graphics_148,x:173.8,y:128}).wait(62));

	// oculus
	this.instance_18 = new lib.logo_oculus();
	this.instance_18.parent = this;
	this.instance_18.setTransform(215.5,121.7,0.234,0.234,0,0,0,156.8,111.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(148).to({_off:false},0).to({y:80.7},10,cjs.Ease.get(1)).wait(52));

	// Layer 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_148 = new cjs.Graphics().p("Ay/DwIAAnfMAl/AAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(148).to({graphics:mask_5_graphics_148,x:151.8,y:178}).wait(62));

	// Layer 1
	this.instance_19 = new lib.logo_rifttouch();
	this.instance_19.parent = this;
	this.instance_19.setTransform(120.6,211.9,0.679,0.679,0,0,0,86.8,166.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(148).to({_off:false},0).to({y:170.9},10,cjs.Ease.get(1)).wait(52));

	// stadium
	this.instance_20 = new lib.logo_stadium();
	this.instance_20.parent = this;
	this.instance_20.setTransform(98,237.9,0.585,0.585,0,0,0,81.4,66);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(148).to({_off:false},0).to({y:196.9},10,cjs.Ease.get(1)).wait(52));

	// touch RT
	this.instance_21 = new lib.hardware_touch_RT();
	this.instance_21.parent = this;
	this.instance_21.setTransform(459.5,113.8,0.176,0.176,0,0,0,32.5,29.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(137).to({_off:false},0).to({regY:30.1,scaleX:1.12,scaleY:1.12,x:320.1,y:165.8},17,cjs.Ease.get(-1)).wait(56));

	// touch LT
	this.instance_22 = new lib.hardware_touch_LT();
	this.instance_22.parent = this;
	this.instance_22.setTransform(482.1,112.7,0.176,0.176,0,0,0,23.1,23.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(137).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,x:485.6,y:163.4},17,cjs.Ease.get(-1)).wait(56));

	// rift
	this.instance_23 = new lib.hardware_rift();
	this.instance_23.parent = this;
	this.instance_23.setTransform(471.9,102.3,0.176,0.176,0,0,0,69,42.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(137).to({_off:false},0).to({regY:42,scaleX:1.12,scaleY:1.12,x:418.6,y:97.2},17,cjs.Ease.get(-1)).wait(56));

	// bg
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(256.4,125,1.022,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(443.1,123,1323.4,255);
// library properties:
lib.properties = {
	id: 'DC775C8791F14132A29885F76D2AD9D8',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap14.jpg", id:"Bitmap14"},
		{src:"images/Bitmap16.jpg", id:"Bitmap16"},
		{src:"images/Bitmap42.jpg", id:"Bitmap42"},
		{src:"images/flare.png", id:"flare"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
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
an.compositions['DC775C8791F14132A29885F76D2AD9D8'] = {
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