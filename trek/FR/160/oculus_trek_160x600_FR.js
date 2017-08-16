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


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


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


(lib.hardware_rift = function() {
	this.initialize(img.hardware_rift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,84);


(lib.hardware_touch_LT = function() {
	this.initialize(img.hardware_touch_LT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,47);


(lib.hardware_touch_RT = function() {
	this.initialize(img.hardware_touch_RT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,60);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape.setTransform(119.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFACAGgBIAPgBQAHgCAGgCIABANQgGADgIABIgPABQgJAAgIgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_1.setTransform(110.2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHApIghhRIAQAAIAYBCIAZhCIAPAAIghBRg");
	this.shape_2.setTransform(101.2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_3.setTransform(92,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_4.setTransform(79.1,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMA7QgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgIADgLQADgIAGgFQAFgFAIgDQAHgDAIAAQAIAAAGADQAHADAGAFQAFAFACAIQADAHAAALIAAAGIg+AAQAAAGADAFQABAFAFADQAEADAFABQAFACAGAAIAPgCQAHgBAGgDIABANQgGADgIABIgPABQgJAAgJgCgAAYANQAAgHgBgEQgCgEgDgDQgDgDgEgCQgFgCgFAAQgEAAgFACQgEABgDADQgEADgCAEQgCAFAAAHIAvAAIAAAAgAgDggIARgcIAPACIgXAag");
	this.shape_5.setTransform(70.6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAA1QgEgCgBgFQgDgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQABADACABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_6.setTransform(62.8,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAFAAACAEQACACABAEQgBAFgCACQgCADgFAAQgDAAgDgDg");
	this.shape_7.setTransform(57.8,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_8.setTransform(53.7,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_9.setTransform(46.7,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLA7QgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgIADgLQADgIAGgFQAFgFAIgDQAHgDAHAAQAJAAAGADQAIADAEAFQAGAFACAIQADAHAAALIAAAGIg+AAQAAAGADAFQABAFAFADQAEADAFABQAFACAGAAIAPgCQAIgBAFgDIABANQgGADgIABIgPABQgKAAgHgCgAAYANQAAgHgBgEQgCgEgDgDQgDgDgFgCQgEgCgFAAQgEAAgFACQgEABgDADQgEADgCAEQgCAFAAAHIAvAAIAAAAgAgDggIARgcIAOACIgWAag");
	this.shape_10.setTransform(37.6,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAqIAAhRIAOAAIAAAQIABAAQAEgIAEgEIAIgFQADgBAFAAIAIABIgBAPIgJgBQgFAAgFACQgEABgCAEQgDAFgCAFQgBAFAAAGIAAAog");
	this.shape_11.setTransform(30.2,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_12.setTransform(18.3,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAEAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAIgCAHgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_13.setTransform(9.8,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(3,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_15.setTransform(-1.1,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFACAGgBIAPgBQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-7.7,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHApIghhRIAQAAIAYBCIAZhCIAPAAIghBRg");
	this.shape_17.setTransform(-16.7,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_18.setTransform(-25.8,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_19.setTransform(-35.7,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_20.setTransform(-45.7,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQACAEAEAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAwAAIAAAAg");
	this.shape_21.setTransform(-59.6,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSA9QgHgDgGgFQgFgGgDgIQgDgIAAgKQAAgJADgIQADgHAFgGQAGgGAHgDQAHgDAJAAQAEAAAFACQAEABAEACQAGADAHAJIABAAIgBgOIAAgtIAPAAIAAB9IgOAAIAAgPIgBAAIgGAIIgHAFIgJADIgIABQgJAAgHgDgAgKgGQgGACgDAEQgEADgDAGQgBAGAAAGQAAAHABAGQADAGAEAEQADAEAGACQAEACAGAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgCgGQgCgFgFgEQgEgDgFgDQgFgCgGAAQgGAAgEACg");
	this.shape_22.setTransform(-69.8,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghApIAAgJIAtg8IgsAAIAAgMIBAAAIAAAJIguA7IAxAAIgBANg");
	this.shape_23.setTransform(-83,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAEAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAIgCAHgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgFgCQgDgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_24.setTransform(-91.5,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGApIghhRIAQAAIAXBCIAYhCIARAAIgiBRg");
	this.shape_25.setTransform(-100.4,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQADgEADAAQAEAAADAEQACACAAAEQAAAFgCACQgDADgEAAQgDAAgDgDg");
	this.shape_26.setTransform(-106.7,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_27.setTransform(-114.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-12.2,248.1,24.4);


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


(lib.text2_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASBOIAAg2QAAgJgDgGQgCgDgDgBQgEgCgEAAQgEAAgEACQgDACgDAEQgCADgCAGIgBALIAAAvIgiAAIAAibIAiAAIAAA3IAAAQIAAAAQAFgHAMgIQAIgEAIAAQAKAAAHADQAHADAEAFQAEAGACAIQACAHAAAMIAAA7g");
	this.shape.setTransform(57.4,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAyQgKgEgJgHQgHgHgFgKQgCgGgBgQQAAgHADgPQAFgJAHgHQAJgHAKgEQAIgCAQgCQAPAAAUAHIgBAdQgHgDgKgCQgJgCgHAAQgHAAgFACQgDACgEADQgDADgBAFQgCAFAAAEQAAAFACAFQABAFADADQAEADADABQAFADAHAAIAQgCQAKgBAHgDIABAdQgGACgJACIgUACQgQgCgIgCg");
	this.shape_1.setTransform(45.8,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAxQgHgDgEgGQgFgFgCgIQgCgIAAgLIAAg7IAjAAIAAA2QAAAKADAFQACACADACIAIABQAEAAADgCQAEgBACgDQAEgGAAgLIAAgzIAjAAIAABkIghAAIgBgMIAAAAQgEAFgFADQgEADgFABQgFADgIAAQgLAAgHgDg");
	this.shape_2.setTransform(34.4,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNA1IgLgEQgKgEgHgHQgIgHgDgKQgDgKAAgLQAAgKADgKQADgKAIgHQAHgHAKgFIALgDIANgBQAJAAAPAEQALAFAHAHQAHAHADAKQAEAKAAAKQAAALgEAKQgDAKgHAHQgHAHgLAEQgPAFgJAAgAgIgWQgEADgDADQgCADgCAFQgBAEAAAEQAAAGABADQACAFACAEQADADAEABQAEADAEAAQAFAAAFgDQADgBACgDQADgEABgFQABgDABgGQgBgEgBgEQgBgFgDgDQgCgDgDgDQgFgCgFAAQgEAAgEACg");
	this.shape_3.setTransform(22.2,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRBMIAAh4IgvAAIAAgfICBAAIgBAfIgvAAIAAB4g");
	this.shape_4.setTransform(9.5,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLA3IAAgrIgrAAIAAgWIArAAIAAgsIAWAAIAAAsIAsAAIAAAWIgsAAIAAArg");
	this.shape_5.setTransform(-9.5,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAABDQgGgCgFgGQgEgFgDgHQgCgJAAgLIAAghIgTAAIAAgcIATAAIAAgjIAhAAIAAAjIAZAAIAAAcIgZAAIAAAeQAAAKAEADQADAEAHgBIAMgCIAAAcQgOAEgKAAQgJAAgGgDg");
	this.shape_6.setTransform(-26.8,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTBOIAAhKIgUAAIAAgbIAUAAIAAgKQAAgKACgIQABgIAEgFQAEgHAIgCQAGgEAMAAIAWACIAAAdIgMgCQgIAAgCAEQgEAEAAAJIAAAIIAYAAIgBAbIgXAAIAABKg");
	this.shape_7.setTransform(-34.8,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQBNIAAhlIAhAAIAABlgAgHgmIgGgEQgFgGgBgIQAAgIAHgGQAFgGAHABQAIgBAGAGQAFAFAAAJQAAAJgFAFQgGAGgIAAQgEgBgDgBg");
	this.shape_8.setTransform(-41.6,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASBMIgfg0IgOAAIAAA0IgjAAIAAiXIBJAAQALAAAJAEQAJADAGAHQAHAHADAJQADAJAAALQAAAJgCAIQgCAIgFAFQgEAGgHAFQgGAEgIACIAmA2gAgbgFIAfAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgGgIAAIgfAAg");
	this.shape_9.setTransform(-50.9,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-12.2,126.4,29.2);


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


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCCDQgXgFgQgLQgVgSgIgMIgKgTIgHgXIgcAAIAEghIAVAAIAAgKIAAgIIgZAAIAEghIAYAAQAEgRANgaQAIgMAVgRQAQgMAXgFQATgGAZAAQAZAAAxANIgDA3QgSgGgSgDQgSgEgRAAQgMAAgLACQgKADgJAEQgHAFgGAIQgHAHgFALIB5AAIgHAhIh3AAIAAAIIAAAKIBzAAIgHAhIhmAAQAFAKAGAIQAGAHAIAFQAIAFALACQAKACAMAAQARAAASgEQASgDASgGIADA3QgxANgZAAQgZAAgTgGg");
	this.shape.setTransform(118.1,306.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhbDQQAXgTAqguQAdgiAXgnQgXAGgdAAQgcAAgZgLQgYgJgSgSQgSgTgLgXQgKgZAAgcQABgYALgoQAIgSAageQAXgUAdgLQAUgGArgEQAZAAAqAMQAcALAWAVQAUAUAMAbQAKAbABAeQAAAfgMAkQgLAkgUAmQgUAlgZAiQgZAjgdAagAgZh6QgMAFgJAJQgJAJgFAMQgEALAAAOQAAANAEAMQAGAMAIAJQAJAJAMAFQAMAEAOAAQAPAAANgEQAMgFAJgJQAJgJAEgMQAFgMAAgNQAAgOgFgLQgEgMgJgJQgJgJgMgFQgNgFgPAAQgOAAgMAFg");
	this.shape_1.setTransform(85.5,314.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPDNIAAhMIi1AAIAAhPIC2j+IBbAAIAAD+IA8AAIgCBPIg6AAIAABMgAhFAyIBUAAIAAh1IgBAAg");
	this.shape_2.setTransform(48.6,314.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPDNIAAhMIi1AAIAAhPIC2j+IBbAAIAAD+IA8AAIgCBPIg6AAIAABMgAhFAyIBUAAIAAh1IgBAAg");
	this.shape_3.setTransform(11.6,314.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-9.2,278.2,143.6,77), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.shape.graphics.f("#000000").s().p("ADrILInVAAIhjAAQghgBghgFQghgDghgIQg5gOg0gZQg0gagtgkQg+gygshAQgrhAgXhKQgWhKgBhPQABhOAWhLQAXhJArhAQAshAA+gyQAtglA0gZQA0gaA5gNQAhgIAhgEQAhgEAhgBIBjgBIHVAAIBjABQBCABBCAQQByAbBdBKQA+AyArBAQArBAAXBJQAXBKAABPQAABPgXBKQgXBKgrBAQgrBAg+AyQhcBKhzAbQhCAPhCACIhCABIghgBgAlFitQgUAAgVADQgpAGgjAYQgkAZgTAkQgUAlAAAqQAAArAUAkQATAlAjAZQAkAXApAHQAVADAUABIAqAAII4AAIApAAQAUgBAWgDQApgHAjgXQAjgZATglQAUgkAAgrQAAgqgUglQgTgkgjgZQgjgYgpgGQgWgDgUAAIgpAAIo4AAIgVAAIgVAAg");
	this.shape.setTransform(78.1,-114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(-8.6,-166.4,173.5,104.7), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC3IAAiUQAAgQgDgNQgDgMgHgIQgIgKgLgFQgLgFgRAAQgRAAgRAGQgQAGgNANQgOAMgGATQgJATAAAYIAAB2IgZAAIAAltIAZAAIAACCIAAAyIABAAIAOgUQAJgLALgHQAMgIAOgFQAPgFARAAQAWAAARAIQAPAGALANQAKANAFAQQAEAQABATIAACWg");
	this.shape.setTransform(188.6,161.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYB1QgXgIgQgOQgRgQgJgXQgHgPgDgpQAAgVAKgiQAJgXARgQQAQgOAXgHQAXgIAbAAQARAAATAEQAVAFARAJIgCAYQgRgJgVgEQgUgFgPAAQgWAAgRAFQgSAHgNAMQgOAMgHATQgHAUAAAYQAAAaAHATQAHASAOAOQANAMASAGQARAFAWABQAPgBAUgFQAVgEARgJIACAYQgQAJgWAFQgTAEgRAAQgbAAgXgHg");
	this.shape_1.setTransform(162.1,167.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BxQgPgGgLgOQgKgMgEgRQgEgQgBgUIAAiUIAZAAIAACRQABAPADANQADANAIAKQAHAKAMAGQALAFARABQASgBAQgGQAPgIANgNQAMgPAGgTQAIgWAAgYIAAhuIAaAAIAADrIgZAAIAAgzIgBAAQgQAbgQALQgLAJgOAFQgQAFgSAAQgWAAgRgIg");
	this.shape_2.setTransform(136.5,168.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzByQgVgJgRgSQgQgQgIgXQgIgWAAgaQAAgZAIgWQAIgXAQgQQARgRAVgKQAYgKAcAAQAbAAAYAKQAWAKAQARQAQAQAIAXQAIAWAAAZQAAAagIAWQgIAXgQAQQgQASgWAJQgYAKgbAAQgcAAgYgKgAgqhbQgSAHgMAPQgMANgGATQgFARgBAUQABAUAFATQAGASAMANQAMAPASAHQATAJAYAAQAXAAAUgJQARgHAMgPQAMgNAGgSQAGgTAAgUQAAgUgGgRQgGgTgMgNQgMgPgRgHQgUgIgXAAQgYAAgTAIg");
	this.shape_3.setTransform(106.6,167.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCWQgKgGgFgOQgFgMgCgWIgBgvIAAhuIgwAAIAAgXIAwAAIAAhHIAYAAIAABHIBFAAIgBAXIhEAAIAAB8QAAApAEAMQAEAIAGAFQAGAEALAAQAWAAAQgGIAAAXQgQAGgZAAQgTAAgKgGg");
	this.shape_4.setTransform(84.1,164.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCWQgKgGgFgOQgFgMgCgWIgBgvIAAhuIgwAAIAAgXIAwAAIAAhHIAYAAIAABHIBFAAIgBAXIhEAAIAAB8QAAApAEAMQAEAIAGAFQAGAEALAAQAWAAAQgGIAAAXQgQAGgZAAQgTAAgKgGg");
	this.shape_5.setTransform(29.3,164.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWC1IAAjTIgwAAIABgXIAvAAIAAgzQAAgWAFgPQADgOAIgJQAGgJALgEQAKgEAOABQATgBARAFIAAAYQgRgEgTAAQgSAAgHAMQgHALAAAcIAAA0IA1AAIAAAXIg1AAIAADTg");
	this.shape_6.setTransform(13.8,161.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCtIAAjrIAZAAIAADrgAgPiIQgEgGgBgIQAAgKAFgFQAFgHAKAAQAKAAAFAHQAGAFAAAKQAAAIgGAGQgFAGgKABQgJgBgGgGg");
	this.shape_7.setTransform(-0.7,162.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag6B5IAAjrIAYAAIAAAyIADAAQALgXAQgOQAJgIALgFQANgGANAAIASADIgBAaQgKgCgLAAQgPAAgOAIQgMAHgKAOQgJANgGARQgGATAAASIAAB2g");
	this.shape_8.setTransform(-14.6,167.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhGAAIAAgYIBGAAIAAhAIAWAAIAABAIBLAAIAAAYIhLAAIAABNg");
	this.shape_9.setTransform(57.4,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-26.6,130.5,231.7,62.9), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlYDOQgVgBgSgHQgUgGgQgMQgRgMgLgSQgLgQgHgUQgGgSgBgVQgBgUAEgUQAEgTAKgRQATglAmgSQATgJATgDQAVgDAUACQApAEAgAaIgmAvQgTgMgWgDQgNgBgMABQgKACgJAEQgVAIgMAUQgFALgCALIgCAWQABALAEAMQADAKAGAKQAOASAWAHQALADALABQALAAALgCQAXgFAQgPIArArQgOAPgSAKQgRAJgUAFQgQADgQAAIgIAAgAJ5DIQglgLgegZIAigsQASAOAVAIQAPAFAOADQAOABAPgBIASgGQAHgEAFgFQAEgGACgGQAAgHgEgHQgEgGgIgEQgJgGgKgCQgMgEgMgCIglgKQgSgGgQgNQgOgLgFgSQgGgUAGgSQAEgQAKgNQAOgRAVgIQAQgHAQgCQAVgCAWADQAnAFAfAXIgfAqQgUgLgXgFQgOgDgPABQgIABgIACQgFADgEAEQgEACgDAEQgCADAAAEQgCAHAGAGQAGAHAIADIAPAFIASAEIAUAFIAVAGQASAHAOAMQAPANAHATQAFAQgCASQgDAUgNASQgKAMgOAJQgTALgXAEQgQACgRAAQgVgBgVgFgArDDDQgZgLgTgUQgUgTgJgZQgKgZAAgcQAAgbAKgZQALgYATgUQATgUAZgJQAZgLAcAAQAbAAAZALQAYAKAUATQAUAUAJAZQAKAZAAAbQAAAcgLAZQgIAZgUAUQgUAUgZAJQgZAKgbAAQgbAAgagKgAqdgGIgOAFIgNAFIgLAJIgJALIgHANIgEAPIgBAPIABAQIAEAPQACAHAEAGIAKALQAEAFAHAEIAMAHIAOAEIAQABIAQgBIAOgEIAMgHQAGgDAFgGIAJgKIAHgNIAEgPQABgIAAgJIgBgPIgEgOIgHgOIgJgLQgEgFgGgEIgNgFQgHgDgHgBIgQgDQgIAAgHACgAFoDMQgbgEgWgOQgWgOgOgaQgGgLgCgNQgDgNgBgNIgCgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASADASQADANAGAMQAJAOAOAGQAOAHAPgBQARAAAOgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA+AAIAAEEIg3AAIgBgZQgKAJgLAHQgNAHgMADQgTAFgVAAIgMAAgAhiDMQgbgEgWgOQgWgOgMgaQgHgLgDgNIgEgaIgBgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASAEASQACANAGAMQAJAOAOAGQAOAHAQgBQAPAAAPgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA9AAIAAEEIg2AAIgCgZQgIAJgMAHQgNAHgLADQgUAFgWAAIgMAAgACCDGIAAmTIA/AAIAAGTg");
	this.shape.setTransform(81.7,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(2.6,86.9,158.2,41.2), null);


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
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(174,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAYIgIgDIACgFIAHADIAJABIAEgBIAEgBIADgDQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgFIgEgCIgJgDQgHgBgCgCIgDgDQgCgDAAgDQAAgDACgCQABgDACgCIAGgCIAFgBIAJABIAHACIgBAGIgHgCIgIgBQgDAAgEABIgCADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAEACIAJADIAFACIAFABIADADQABADAAAEQAAADgBAEIgEAEIgHACIgGABIgKgBg");
	this.shape_1.setTransform(170.4,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgdIAGAAIAAAcIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgWIAGAAIAAAvIgGAAIAAgKQgEAFgDACIgFADIgGAAQgEAAgEgBg");
	this.shape_2.setTransform(165.2,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_3.setTransform(161.2,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAYQgFgCgEgDQgDgDgBgFQgCgDAAgIQAAgDACgIQABgEADgDQAEgDAFgCIAKgBIAHABIAHACIAAAGIgIgDIgHAAIgGABQgEAAgDADIgEAGQgCAEAAAEQAAAFACAEIAEAGQADADAEABIAGABIAHgBIAIgDIAAAGIgHACIgHABIgKgBg");
	this.shape_4.setTransform(157.5,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGIgCgFIgDgCIgGgBIgGABIgFAEIgFAGQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_5.setTransform(152,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgCgaIgBgEIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_6.setTransform(147.9,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGIgCgFIgDgCIgGgBIgGABIgFAEIgFAGQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_7.setTransform(141.2,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAXQgFgCgDgDIgGgIQgBgEAAgGIABgJIAGgIQADgDAFgCQADgBAGgBQAEAAAHACQAEACAEADIAEAIIACAJQAAAGgCAEIgEAIQgEADgEACIgLACQgGAAgDgCgAgHgRIgHAEIgDAHIgBAGIABAIIADAGIAHAEQAEABADABQAFgBAEgBIAFgEIAEgGQABgEAAgEQAAgDgBgDIgEgHIgFgEQgEgBgFAAQgDAAgEABg");
	this.shape_8.setTransform(135.2,9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGIgBgFIgEgCIgGgBIgGABIgFAEIgFAGQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAIACQADABACACQACADABAEIABAIIAAAdg");
	this.shape_9.setTransform(129.3,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPAYIgPgVIgOAVIgIAAIAUgYIgSgXIAHAAIANASIANgSIAIAAIgSAXIAUAYg");
	this.shape_10.setTransform(121.3,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgdIAGAAIAAAcIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgWIAGAAIAAAvIgGAAIAAgKQgEAFgDACIgFADIgGAAQgEAAgEgBg");
	this.shape_11.setTransform(116,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAYQgEgCgEgDQgDgDgBgFQgCgDAAgIQAAgDACgIQABgEADgDQADgEAFgBIAIgBIAIABIAHAFQADADACAEQACAFAAAGIAAACIgnAAIADAJQABADACACQADACADABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgKgBgAAQgCIgBgHIgDgFIgFgDIgHgBIgEAAIgGADIgDAGIgDAHIAgAAIAAAAg");
	this.shape_12.setTransform(110.4,9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAvIAAgFIAGAAIADAAIACgDIABgJIAAg2IAGAAIAAA4IgBAHIgCAFIgEADIgEABIgHgBgAACgnIgBgDQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_13.setTransform(105.8,9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAYIgIgDIADgFIAGADIAJABIAEgBIAEgBIADgDQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgFIgEgCIgJgDQgGgBgEgCIgCgDQgCgDAAgDQAAgDACgCQABgDACgCIAGgCIAFgBIAJABIAHACIgCAGIgGgCIgIgBQgDAAgDABIgDADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAEACIAJADIAFACIAFABIADADQABADAAAEQAAADgBAEIgEAEIgHACIgGABIgKgBg");
	this.shape_14.setTransform(100.3,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgCgFIgFgCIgFgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_15.setTransform(95.1,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABADIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_16.setTransform(91,8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAYIgGgDIgEgEQgBgEAAgEQAAgEABgDQABgCADgBIAGgDIAHgBIARACIAAgDIgBgGIgDgDIgEgDIgGAAIgIABIgJACIAAgGIAJgCIAIgBIAIABQAEABADACQADACABAEQABADAAAFIAAAeIgGAAIAAgLIgEAGIgEADIgGACIgEABIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFABIAFgBIAGgEIAEgFQACgEAAgFIgQgBg");
	this.shape_17.setTransform(86.9,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_18.setTransform(82.5,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAZIAAgvIAGAAIAAAKIABAAQACgFADgDQABgCADAAIAFgCIAEABIgBAGIgEgBIgGACIgEAEIgDAGIgBAGIAAAZg");
	this.shape_19.setTransform(79.2,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAYQgFgCgDgDQgEgDgCgFQgBgDgBgIQAAgDACgIQACgEAEgDQACgEAFgBIAIgBIAJABIAHAFQACADACAEQACAFgBAGIAAACIglAAIABAJQABADAEACQABACAEABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgJgBgAARgCIgCgHIgDgFIgFgDIgGgBIgGAAIgEADIgFAGIgBAHIAgAAIAAAAg");
	this.shape_20.setTransform(74.5,9.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAlIgIgCIgGgDIgFgFIgEgFIgDgHIgCgHIAAgIIAAgHIACgHIADgHIAEgFIAFgFIAGgDIAIgCIAIgBIANABIAMAEIAAAHQgGgDgHgBIgMgCIgHABIgGACIgFACIgFAEIgDAFIgCAFIgCAMIACANIACAFIADAFIAFAEIAFACIAGACIAHABIAMgCQAHgBAGgDIAAAHQgGACgGABQgGACgHAAIgIgBg");
	this.shape_21.setTransform(68.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(62.4,0,115,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape.setTransform(-25.7,140.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgEgCgBgEIgBgJIABgIIAFgGQACgDADgBIAGgBQAEAAAEABQADABACADQACACACAEQABAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgCAFQgCACAAAEIAZAAIAAAAg");
	this.shape_1.setTransform(-29.2,139.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAcQgEgCgDgCQgCgDgBgDIgCgJIACgJIADgGQADgCAEgBIAFgCQAFAAACACQADABADACQADADAAADQACADAAAFIAAADIgeAAIABAGIADAEIAFADIAFAAIAHAAIAHgDIAAAFIgHACIgGABIgIgBgAANAGIgBgFIgDgEIgEgCIgFgBIgDABIgFACIgDADQgBADAAADIAZAAIAAAAgAgBgPIAIgNIAGABIgLAMg");
	this.shape_2.setTransform(-33.8,138.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_3.setTransform(-37.7,138.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_4.setTransform(-40.3,138.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZAUIAAgXIgBgEIgBgEIgDgCIgEgBIgFABIgFADIgCAFIgBAFIAAAUIgFAAIAAgXIAAgEIgBgEIgDgCIgFgBIgFABIgEADQgCACAAADIgBAGIAAATIgGAAIAAgmIAGAAIAAAIIACgDIACgDIAFgCIAEgBIAGABIADACIABADIACAFIADgFIACgDIAFgCIAFgBQADAAADACIAEADIACAFIABAGIAAAXg");
	this.shape_5.setTransform(-45.1,139);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_6.setTransform(-49.9,138.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_7.setTransform(-52,138);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAFgBQAFAAACABQADABADADQADACAAAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgEgDIgFgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_8.setTransform(-57.7,139.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAdIgGgEIgEgGQgCgEAAgFQAAgFACgDQABgDADgDIAGgEQADgBAEAAIAEABIAEABIAHAGIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHIgEAEIgDACIgEACIgEAAQgEAAgDgBgAgFgEIgFADIgDAEIgBAHIABAHIADAFIAFADIAFABIAGgBIAFgEIADgFIABgGIgBgGQgBgDgDgBIgEgEIgGgBIgFABg");
	this.shape_9.setTransform(-62.8,138.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHATQgEgCgDgDQgDgCgBgEIgBgIIABgHIAEgGQADgDAEgCIAHgBIAJABQADACACADIAFAGQABAEAAADQAAAEgBAEQgCAEgDACQgCADgDACIgJABIgHgBgAgGgNIgFADIgDAFIAAAFIAAAGIADAFIAFAEIAGABIAGgBIAGgEIACgFIABgGIgBgFIgCgFQgCgCgEgBQgDgCgDAAQgDAAgDACg");
	this.shape_10.setTransform(-67.8,139.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_11.setTransform(-71.5,138.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAUIAAgmIAEAAIAAAIIABAAIAEgGIADgCIAEgBIADABIAAAFIgDgBIgGACIgCADIgDAFIAAAFIAAATg");
	this.shape_12.setTransform(-73.9,139);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAcQgEgCgDgCQgDgDgBgDIgBgJIABgJIAEgGQADgCADgBIAHgCQADAAAEACQADABACACQADADABADQABADAAAFIAAADIgeAAIABAGIAEAEIAEADIAFAAIAHAAIAHgDIAAAFIgGACIgIABIgHgBgAANAGIgBgFIgCgEIgFgCIgEgBIgFABIgDACIgDADQgCADAAADIAZAAIAAAAgAgBgPIAIgNIAFABIgKAMg");
	this.shape_13.setTransform(-78,138.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAdIAAg4IAFAAIAAAHIAAAAIADgDIAEgDIAEgCIAEAAQAEAAAEABIAFAEQADADABAEQACADAAAFQAAAFgCADIgEAGQgCADgDABQgEABgEAAIgEAAIgEgCIgEgDIgDgDIAAAAIAAAHIAAATgAgFgWIgFADIgDAFIgBAGQAAAEABACIADAEQACADADABIAFABIAGgBIAFgDIADgEIABgHIgBgHIgDgFIgFgDIgGgBQgCAAgDACg");
	this.shape_14.setTransform(-82.9,140);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgDgCgCgEIgBgJIABgIIAFgGQACgDAEgBIAFgBQAFAAACABQADABADADQACACABAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_15.setTransform(-90.2,139.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_16.setTransform(-95,139);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJATIgDgEIgDgFIgBgFIAAgYIAGAAIAAAXIAAAEIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAIAFABIAEgBQADgBACgCIACgFQACgEAAgDIAAgSIAFAAIAAAmIgFAAIAAgIQgDAEgCACIgFACIgEABIgHgBg");
	this.shape_17.setTransform(-99.8,139.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_18.setTransform(-106.1,138.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_19.setTransform(-110,139);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAUIgFgDIgDgEIgBgGIABgFIADgDIAFgCIAFAAIAOABIAAgCIAAgFIgDgDIgEgCIgFAAIgGABIgGABIgBgEIAHgCIAHgBIAGABIAGADIADAEIABAHIAAAYIgFAAIAAgJIgDAEIgEAEIgEABIgEAAIgEAAgAgJACIgCACIAAADIAAAFIACACIAEABIADABIAFgBIAEgCIAEgFIACgHIgOAAIgEAAIgEABg");
	this.shape_20.setTransform(-114.8,139.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAdIgGgEIgEgGQgCgEAAgFQAAgFACgDQABgDADgDIAGgEQADgBAEAAIAEABIAEABIAHAGIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHIgEAEIgDACIgEACIgEAAQgEAAgDgBgAgFgEIgFADIgDAEIgBAHIABAHIADAFIAFADIAFABIAGgBIAFgEIADgFIABgGIgBgGQgBgDgDgBIgEgEIgGgBIgFABg");
	this.shape_21.setTransform(-119.8,138.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_22.setTransform(-124.8,139);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAGgBQADAAADABQADABADADQACACABAEQACAEAAAEIAAACIgeAAIABAGIAEAFIAEACIAFABIAHgBIAHgCIAAAFIgGACIgHAAIgIgBgAANgBIgBgGIgCgEIgFgDIgEgBIgFABIgDACIgEAFQgBACAAAEIAZAAIAAAAg");
	this.shape_23.setTransform(-129.5,139.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAdIAAg5IAVAAQAEAAAEACQADABACACQADACABAEIABAIIgBAHQgBACgDACQgCADgDABQgEABgEABIgQAAIAAAVgAgOADIAQAAIAGgBIAEgCIACgFIABgEIgBgHIgCgDIgEgEIgGgBIgQAAg");
	this.shape_24.setTransform(-134.4,138.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-139.1,131.3,116.9,13.6), null);


(lib.kirk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap14, null, new cjs.Matrix2D(0.944,0,0,0.944,-151.9,-236.6)).s().p("AKQKPQgBgFAAgKIgBgQQgDgPgQgKQgJgGgJgBIAAgCIAAgEIgBgDIAAgDIgBgFIgBgCIgDgFIgCgDIgGgDIgJgDIAAACIgKABIgGADIgDADIgCAFIgCACIAAAFIgBADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAABIxnAAIAAgBIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIgBgDIAAgEIAAgDIAAgEIABgDIgBgEIAAgEIgBgDIgBgEIgCgEIgDgCIgBgBIAAgBQAEgGgDgIQgDgGgHgCQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCAAQgDAAgEAFQgIAGgCAGIgBAHIgDACIgCAEIgCADIAAABIgHAAIgGACIgBAAIAAAAIgBABIgBAAQgFABgDAFIgGAJQgCADgHADIgGAAQgIABgGAHQgDAEgCAGQgFACgEAIQgDAHACAGQABAKAIAFIAAABIgBAXQAAANACAIIAGAMIAFAMIACANImAAAQALgQACgPQABgSACgIQACgHAIgKIARgXQAIgKAGgEIADgDIAWACQAuAGASgVQALgMgDgSIAAgCIADgNQAEgMAPgUIA/hOIAxg8QAOgSAJgHIAigVQATgNAFgPQACgGABgLQABgMACgFIAPgVQAFgIAFgNIAHgVIANgaQAJgRADgJQAMgdgKgTIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgCIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIgBgEIAAgDIAAgEIAAgDIAAgDIAAgDQAGgCAMgBQASgCAegIQAhgJAOgBQAOgCAjgBQAYAAAQgDQARAEASgDQAWgCALgMQAKgNgCgSQAAgMgFgJIgBgDQACgGAAgIQABgLgEgKIgCgEIACgFQAHgHAGgIQAJgOAEgNQAHgHAFgCIAYgJQAPgFAFgJQACgCACgIQABgHACgDIAOgLQAEgEADgFQAKACAMAAQAYAAAQgEQAGgCARgHIAEgCIAHABIAZAHIAQACIALAGIAUAOQAIAFAOAUQAKANAJAKQAJAKACAGQACAGAAALQAAALACAGIAEAMQAAAEgFAJQgRAeALAYQAFAQASAGQAQAFAPgHIAUABIBHAAQBHABAdAEIASADIAMADQAVADAigCQApgCAOABIAoAFQAYADAiACQAcABALADIAaAIQATAFAXgBIABABQAPAHAMADIAEAMIAAADIAAADIAAAEIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAADIAAAEIAAADIAAADIAAAFIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAABIAAADIAAADIABACQgFAHgDAHIgBAEIgEAEIgDADIgDAEIgCAEIgCADIAAAEIAAADIAAADIgCAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAACIAAACQAAAFACAGIAAACIAAABIACAEIACADIABABIACACIAAABIAGAGIABAAIAEAEIAIAEIADAAIAOAGIATANIAYATIAcAZQARANARAGIAaAJIATAKQAQAGAdgBIANAAIATABQAIABASAJIAWAMIAKAHIAMAGIAPACQAOAFAIATIAHAPQAEAIAFAGQAGAHAKAEIADAAIAEALIAGAbQAEAPAMAWQAGAIACAGIABAQIABADg");
	this.shape.setTransform(104,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kirk, new cjs.Rectangle(0,0,208.1,131), null);


(lib.hardware_touch_RT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_RT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_RT_1, new cjs.Rectangle(0,0,65,60), null);


(lib.hardware_touch_LT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_LT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_LT_1, new cjs.Rectangle(0,0,46,47), null);


(lib.hardware_rift_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_rift();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_rift_1, new cjs.Rectangle(0,0,138,84), null);


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
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,160,600), null);


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
(lib.oculus_trek_160x600_FR = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgpAqQgRgSAAgYQAAgXARgRQASgSAXAAQAYAAASASQARARAAAXQAAAYgRASQgSARgYAAQgXAAgSgRg");
	var mask_graphics_2 = new cjs.Graphics().p("AhqBsQgtguAAg+QAAg+AtgsQAsgtA+AAQA/AAAtAtQAsAsAAA+QAAA+gsAuQgtAsg/AAQg+AAgsgsg");
	var mask_graphics_3 = new cjs.Graphics().p("AijCkQhEhEAAhgQAAhfBEhEQBEhEBfAAQBgAABEBEQBEBEAABfQAABghEBEQhEBEhgAAQhfAAhEhEg");
	var mask_graphics_4 = new cjs.Graphics().p("Aj+D/QhphqAAiVQAAiUBphpQBqhqCUAAQCVAABqBqQBpBpAACUQAACVhpBqQhqBpiVAAQiUAAhqhpg");
	var mask_graphics_5 = new cjs.Graphics().p("AlWFXQiPiOAAjJQAAjICPiOQCOiPDIAAQDJAACOCPQCPCOAADIQAADJiPCOQiOCPjJAAQjIAAiOiPg");
	var mask_graphics_6 = new cjs.Graphics().p("AnEHFQi8i8AAkJQAAkIC8i8QC8i8EIAAQEJAAC8C8QC8C8AAEIQAAEJi8C8Qi8C8kJAAQkIAAi8i8g");
	var mask_graphics_7 = new cjs.Graphics().p("ApcJdQj8j7ABliQgBlhD8j7QD6j8FiAAQFiAAD7D8QD8D7gBFhQABFij8D7Qj7D8liAAQliAAj6j8g");
	var mask_graphics_8 = new cjs.Graphics().p("ArnLoQk0k1AAmzQAAmyE0k1QE1k0GyAAQGzAAE1E0QE0E1AAGyQAAGzk0E1Qk1E0mzAAQmyAAk1k0g");
	var mask_graphics_9 = new cjs.Graphics().p("At/OAQl0l0ABoMQgBoLF0l0QFzl0IMAAQIMAAF0F0QFzF0AAILQAAIMlzF0Ql0F0oMAAQoMAAlzl0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:91,y:270}).wait(2).to({graphics:mask_graphics_2,x:90.6,y:269.9}).wait(1).to({graphics:mask_graphics_3,x:91.1,y:270.9}).wait(1).to({graphics:mask_graphics_4,x:90.6,y:271.6}).wait(1).to({graphics:mask_graphics_5,x:90.5,y:272.9}).wait(1).to({graphics:mask_graphics_6,x:90.6,y:272.9}).wait(1).to({graphics:mask_graphics_7,x:89.6,y:275.4}).wait(1).to({graphics:mask_graphics_8,x:89,y:276.8}).wait(1).to({graphics:mask_graphics_9,x:89.7,y:279.3}).wait(1).to({graphics:null,x:0,y:0}).wait(205));

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(91.3,271,0.067,0.067,0,0,0,65.5,65.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:342.4,y:766.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(177));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.4,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(174));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.7,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(171));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-51.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(168));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90.9,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:317.6,y:360},37,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.6,271.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},37,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("Ar9BEIAAiHIX7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:79.6,y:133.6}).wait(68).to({graphics:null,x:0,y:0}).wait(106));

	// Layer 11
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.5,146.6,0.587,0.587,0,0,0,0,0.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({_off:false},0).to({y:134.3},9).wait(55).to({startPosition:0},0).to({regX:0.1,regY:0,scaleX:1.52,scaleY:1.52,x:77.2,y:69.4},23,cjs.Ease.get(-1)).to({regX:0,scaleX:3.46,scaleY:3.46,x:77.8,y:-69.1,alpha:0},12).to({_off:true},1).wait(69));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_41 = new cjs.Graphics().p("Ar9BEIAAiHIX7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_2_graphics_41,x:79.6,y:147.7}).wait(68).to({graphics:null,x:0,y:0}).wait(106));

	// Layer 12
	this.instance_8 = new lib.text2_mc("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(77.5,160.7,0.587,0.587,0,0,0,0,0.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(77.8,20.7,3.464,3.464);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},51).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},50).to({state:[{t:this.instance_8}]},23).to({state:[{t:this.instance_9}]},12).to({state:[]},1).to({state:[]},64).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({y:147.2},9).wait(50).to({startPosition:0},0).to({regX:0.2,scaleX:1.52,scaleY:1.52,x:77.2,y:95.9},23,cjs.Ease.get(-1)).to({_off:true,regX:0,regY:0,scaleX:3.46,scaleY:3.46,x:77.8,y:20.7,alpha:0},12).wait(70));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,-42.2,0,42.3).s().p("AwVGnIAAtNMAgrAAAIAANNg");
	this.shape.setTransform(77.2,368.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.059)"],[0,0.98],0,-44,0,44.1).s().p("AwVG5IAAtxMAgrAAAIAANxg");
	this.shape_1.setTransform(77.2,366.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.118)"],[0,0.957],0,-45.9,0,45.8).s().p("AwVHLIAAuVMAgrAAAIAAOVg");
	this.shape_2.setTransform(77.2,364.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],0,-47.7,0,47.6).s().p("AwVHdIAAu5MAgrAAAIAAO5g");
	this.shape_3.setTransform(77.2,363);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.239)"],[0,0.914],0,-49.5,0,49.5).s().p("AwVHvIAAvdMAgrAAAIAAPdg");
	this.shape_4.setTransform(77.2,361.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)"],[0,0.894],0,-51.2,0,51.3).s().p("AwVIBIAAwBMAgrAAAIAAQBg");
	this.shape_5.setTransform(77.2,359.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],0,-53.1,0,53.1).s().p("AwVITIAAwlMAgrAAAIAAQlg");
	this.shape_6.setTransform(77.2,357.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.42)"],[0,0.851],0,-54.9,0,54.9).s().p("AwVIlIAAxJMAgrAAAIAARJg");
	this.shape_7.setTransform(77.2,356.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.478)"],[0,0.827],0,-56.7,0,56.7).s().p("AwVI3IAAxtMAgrAAAIAARtg");
	this.shape_8.setTransform(77.2,354.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.5,0,58.5).s().p("AwVJJIAAySMAgrAAAIAASSg");
	this.shape_9.setTransform(77.2,352.9);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.5,0,58.5).s().p("AwVJKIAAySMAgrAAAIAASSg");
	this.shape_10.setTransform(77.2,353);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.5,0,58.5).s().p("AwVJKIAAyTMAgrAAAIAASTg");
	this.shape_11.setTransform(77.2,353.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.5,0,58.5).s().p("AwVJJIAAyRMAgrAAAIAASRg");
	this.shape_12.setTransform(77.2,354.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.6,0,58.4).s().p("AwVJJIAAySMAgrAAAIAASSg");
	this.shape_13.setTransform(77.2,355.4);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.6,0,58.4).s().p("AwVJJIAAyRMAgrAAAIAASRg");
	this.shape_14.setTransform(77.2,355.9);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.6,0,58.4).s().p("AwVJKIAAySMAgrAAAIAASSg");
	this.shape_15.setTransform(77.2,356.2);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-58.6,0,58.4).s().p("AwVJKIAAyTMAgrAAAIAASTg");
	this.shape_16.setTransform(77.2,356.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.494)"],[0,0.824],0,-57.2,0,57.1).s().p("AwVI8IAAx3MAgrAAAIAAR3g");
	this.shape_17.setTransform(77.2,474.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.447)"],[0,0.839],0,-55.8,0,55.8).s().p("AwVIuIAAxbMAgrAAAIAARbg");
	this.shape_18.setTransform(77.2,477.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.404)"],[0,0.855],0,-54.5,0,54.4).s().p("AwVIhIAAxBMAgrAAAIAARBg");
	this.shape_19.setTransform(77.2,480.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.314)"],[0,0.886],0,-51.8,0,51.7).s().p("AwVIGIAAwLMAgrAAAIAAQLg");
	this.shape_20.setTransform(77.2,486.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.271)"],[0,0.906],0,-50.4,0,50.4).s().p("AwVH4IAAvvMAgrAAAIAAPvg");
	this.shape_21.setTransform(77.2,490);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.224)"],[0,0.922],0,-49,0,49).s().p("AwVHrIAAvUMAgrAAAIAAPUg");
	this.shape_22.setTransform(77.2,493);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,0.953],0,-46.3,0,46.3).s().p("AwVHQIAAueMAgrAAAIAAOeg");
	this.shape_23.setTransform(77.2,499.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.09)"],[0,0.969],0,-45,0,44.9).s().p("AwVHCIAAuDMAgrAAAIAAODg");
	this.shape_24.setTransform(77.2,502.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.043)"],[0,0.984],0,-43.6,0,43.6).s().p("AwVG0IAAtoMAgrAAAIAANog");
	this.shape_25.setTransform(77.2,505.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{y:368.1}}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:363}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{y:357.9}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:353.3}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_12,p:{y:354.1}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_11,p:{y:354.6}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{y:355}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_11,p:{y:355.5}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_16,p:{y:356.4}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_12,p:{y:357.3}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_16,p:{y:358.7}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:359.6}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:360}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_6,p:{y:483.8}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_3,p:{y:496.1}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape,p:{y:508.4}}]},1).to({state:[]},1).to({state:[]},60).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(59).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,y:353.5},0).wait(1).to({y:353.6},0).wait(1).to({y:353.8},0).wait(1).to({y:353.9},0).to({_off:true},1).wait(4).to({_off:false,y:354.5},0).to({_off:true},1).wait(1).to({_off:false,y:354.8},0).wait(1).to({y:354.9},0).to({_off:true},1).wait(1).to({_off:false,y:355.1},0).to({_off:true},1).wait(4).to({_off:false,y:355.8},0).to({_off:true},1).wait(1).to({_off:false,y:356},0).to({_off:true},1).wait(5).to({_off:false,y:356.8},0).to({_off:true},1).wait(1).to({_off:false,y:357},0).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(60).to({_off:false},0).wait(1).to({y:353.1},0).to({_off:true},1).wait(1).to({_off:false,y:353.4},0).to({_off:true},1).wait(4).to({_off:false,y:354},0).to({_off:true},1).wait(1).to({_off:false,y:354.3},0).wait(1).to({y:354.4},0).to({_off:true},1).wait(6).to({_off:false,y:355.3},0).to({_off:true},1).wait(7).to({_off:false,y:356.3},0).to({_off:true},1).wait(1).to({_off:false,y:356.5},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(79).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:355.7},0).to({_off:true},1).wait(7).to({_off:false,y:356.7},0).to({_off:true},1).wait(6).to({_off:false,y:357.6},0).wait(1).to({y:357.7},0).wait(1).to({y:357.8},0).wait(1).to({y:357.9},0).to({_off:true},1).wait(4).to({_off:false,y:358.6},0).to({_off:true},1).wait(1).to({_off:false,y:358.8},0).wait(1).to({y:358.9},0).to({_off:true},1).wait(9).to({_off:false,y:361.7},0).wait(1).to({y:363.2},0).wait(1).to({y:365.1},0).to({_off:true},1).wait(1).to({_off:false,y:370.2},0).wait(1).to({y:373.3},0).wait(1).to({y:376.9},0).to({_off:true},1).wait(1).to({_off:false,y:385.4},0).wait(1).to({y:390.2},0).wait(1).to({y:395.5},0).to({_off:true},1).wait(1).to({_off:false,y:407.3},0).to({_off:true},1).wait(1).to({_off:false,y:420.8},0).wait(1).to({y:428.2},0).to({_off:true},1).wait(1).to({_off:false,y:444.2},0).to({_off:true},1).wait(1).to({_off:false,y:462},0).wait(1).to({y:471.5},0).to({_off:true},1).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(83).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,y:356.9},0).to({_off:true},1).wait(9).to({_off:false,y:358.2},0).to({_off:true},1).wait(7).to({_off:false,y:359.2},0).to({_off:true},1).wait(23).to({_off:false,y:436},0).to({_off:true},1).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(85).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,y:357.2},0).to({_off:true},1).wait(1).to({_off:false,y:357.4},0).to({_off:true},1).wait(4).to({_off:false,y:358.1},0).to({_off:true},1).wait(1).to({_off:false,y:358.3},0).wait(1).to({y:358.4},0).to({_off:true},1).wait(4).to({_off:false,y:359.1},0).to({_off:true},1).wait(1).to({_off:false,y:359.3},0).wait(1).to({y:359.4},0).to({_off:true},1).wait(1).to({_off:false,y:359.7},0).wait(1).to({y:359.8},0).to({_off:true},1).wait(1).to({_off:false,y:360.7},0).to({_off:true},1).wait(3).to({_off:false,y:367.4},0).to({_off:true},1).wait(3).to({_off:false,y:380.9},0).to({_off:true},1).wait(3).to({_off:false,y:401.2},0).to({_off:true},1).wait(1).to({_off:false,y:413.9},0).to({_off:true},1).wait(4).to({_off:false,y:452.9},0).to({_off:true},1).wait(79));

	// Layer 9
	this.instance_10 = new lib.flare_1("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(66.5,325.6,0.693,0.693,0,0,0,52.6,100);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).to({_off:true},38).wait(105));

	// Layer 2
	this.instance_11 = new lib.kirk();
	this.instance_11.parent = this;
	this.instance_11.setTransform(76.5,276.4,0.051,0.051,0,0,0,104.6,66.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},0).to({regX:104,regY:65.5,scaleX:0.69,scaleY:0.69,x:77.1,y:364},20).to({regY:65.6,scaleX:0.75,scaleY:0.75,x:77.2,y:368.7},67).to({regX:103.8,regY:65.7,scaleX:1.28,scaleY:1.28,x:79.1,y:445.3},23,cjs.Ease.get(-1)).to({_off:true},1).wait(77));

	// Layer 15
	this.instance_12 = new lib.logo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(76.7,268.4,0.03,0.03,0,0,0,119,66.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(27).to({_off:false},0).to({regX:116.8,regY:64.9,scaleX:0.41,scaleY:0.41,x:75.2,y:262.3},20).wait(67).to({regX:117.2,regY:64.3,scaleX:0.53,scaleY:0.53,x:75.5,y:261.4},23,cjs.Ease.get(-1)).to({regX:116.9,regY:64.5,scaleX:0.99,scaleY:0.99,x:75.3,y:255.3,alpha:0},12).to({_off:true},1).wait(65));

	// Layer 1
	this.instance_13 = new lib.Tween5("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(76.5,271.1,0.048,0.048,0,0,0,1.1,1.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,y:290.4},20).to({regX:0,regY:0,scaleX:0.71,scaleY:0.71,y:289.2},67).to({regX:0.1,regY:0.1,scaleX:1.22,scaleY:1.22,x:77.8,y:308.1},23,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1.95,scaleY:1.95,x:77.5,y:321.6,alpha:0},12).to({_off:true},1).wait(65));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(7.5,543.4,1,1,0,0,0,55.5,22.5);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(160).to({_off:false},0).to({alpha:1},3).wait(52));

	// legal
	this.instance_14 = new lib.legal_withpurchase();
	this.instance_14.parent = this;
	this.instance_14.setTransform(78.7,589.1,1.147,1.147,0,0,0,117.9,8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(173).to({_off:false},0).to({y:579.1,alpha:1},7).wait(35));

	// Layer 7
	this.instance_15 = new lib.legal_limitedtime();
	this.instance_15.parent = this;
	this.instance_15.setTransform(81.2,454.6,1.274,1.274,0,0,0,-80.3,137.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(167).to({_off:false},0).to({y:444.6,alpha:1},7).wait(41));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_157 = new cjs.Graphics().p("Ar2FdIAAq5IXtAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_3_graphics_157,x:80.9,y:419.8}).wait(58));

	// price
	this.instance_16 = new lib.newPrice();
	this.instance_16.parent = this;
	this.instance_16.setTransform(74.7,199.7,1,1,0,0,0,57.5,33.2);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(157).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_157 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_158 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_159 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_160 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_161 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_164 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_4_graphics_157,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_158,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_159,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_160,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_161,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_162,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_163,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_164,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_165,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_166,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_167,x:81.8,y:351.5}).wait(48));

	// rift
	this.instance_17 = new lib.logo_rifttouch();
	this.instance_17.parent = this;
	this.instance_17.setTransform(78.7,345,0.476,0.476,0,0,0,81.5,66);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(157).to({_off:false},0).to({y:306},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_157 = new cjs.Graphics().p("AobCkIAAlHIQ4AAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_5_graphics_157,x:80.2,y:308.8}).wait(58));

	// oculus
	this.instance_18 = new lib.logo_oculus();
	this.instance_18.parent = this;
	this.instance_18.setTransform(80,317.8,0.63,0.63,0,0,0,81.4,66);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(157).to({_off:false},0).to({y:281.8},10,cjs.Ease.get(1)).wait(48));

	// stadium
	this.instance_19 = new lib.logo_stadium();
	this.instance_19.parent = this;
	this.instance_19.setTransform(81.6,361.8,0.417,0.417,0,0,0,81.5,66);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(157).to({_off:false},0).to({y:336.8},10,cjs.Ease.get(1)).wait(48));

	// touch RT
	this.instance_20 = new lib.hardware_touch_RT_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(69.5,227.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(151).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:40.5,y:168.2},13,cjs.Ease.get(-1)).wait(51));

	// touch LT
	this.instance_21 = new lib.hardware_touch_LT_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(80.4,227.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(151).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:119.9,y:166.8},13,cjs.Ease.get(-1)).wait(51));

	// rift
	this.instance_22 = new lib.hardware_rift_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(76.5,220.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(151).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:91.4,y:114.3},13,cjs.Ease.get(-1)).wait(51));

	// bg
	this.instance_23 = new lib.bg();
	this.instance_23.parent = this;
	this.instance_23.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},210).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	id: 'C00793AAA13B45E584F42C845293CDE6',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap14.jpg", id:"Bitmap14"},
		{src:"images/Bitmap16.jpg", id:"Bitmap16"},
		{src:"images/Bitmap33.jpg", id:"Bitmap33"},
		{src:"images/flare.png", id:"flare"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_5_roborecall.jpg", id:"game_5_roborecall"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"},
		{src:"images/hardware_rift.png", id:"hardware_rift"},
		{src:"images/hardware_touch_LT.png", id:"hardware_touch_LT"},
		{src:"images/hardware_touch_RT.png", id:"hardware_touch_RT"}
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
an.compositions['C00793AAA13B45E584F42C845293CDE6'] = {
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