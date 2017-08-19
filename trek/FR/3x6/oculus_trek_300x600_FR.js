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


(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape.setTransform(120.8,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_1.setTransform(111.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGApIgihRIAQAAIAYBCIAZhCIAPAAIghBRg");
	this.shape_2.setTransform(102.9,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_3.setTransform(93.7,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_4.setTransform(80.8,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA7QgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgIADgLQADgIAGgFQAFgFAIgDQAHgDAHAAQAJAAAGADQAIADAEAFQAGAFACAIQADAHAAALIAAAGIg+AAQAAAGADAFQABAFAFADQAEADAFABQAFACAGAAIAPgCQAIgBAFgDIABANQgGADgIABIgPABQgKAAgHgCgAAYANQAAgHgBgEQgCgEgDgDQgDgDgFgCQgEgCgFAAQgEAAgFACQgEABgDADQgEADgCAEQgCAFAAAHIAvAAIAAAAgAgDggIARgcIAOACIgVAag");
	this.shape_5.setTransform(72.3,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAA1QgDgCgDgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIANAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_6.setTransform(64.5,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_7.setTransform(59.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_8.setTransform(55.4,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_9.setTransform(48.4,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLA7QgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgIADgLQADgIAGgFQAFgFAIgDQAHgDAHAAQAJAAAHADQAHADAEAFQAFAFADAIQADAHAAALIAAAGIg/AAQABAGADAFQABAFAEADQAFADAFABQAFACAGAAIAOgCQAJgBAGgDIAAANQgFADgKABIgOABQgJAAgIgCgAAZANQAAgHgCgEQgCgEgDgDQgDgDgFgCQgEgCgFAAQgEAAgFACQgEABgDADQgEADgCAEQgCAFgBAHIAxAAIAAAAgAgDggIARgcIAOACIgVAag");
	this.shape_10.setTransform(39.3,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIAOAAIAAAQIABAAQAEgIAFgEIAHgFQAEgBAEAAIAIABIgBAPIgJgBQgFAAgFACQgEABgCAEQgDAFgCAFQgCAFABAGIAAAog");
	this.shape_11.setTransform(31.9,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_12.setTransform(20,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAEAEQAEADAGABQAFACAGgBIAPgBQAIgCAGgCIABANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_13.setTransform(11.5,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(4.7,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_15.setTransform(0.6,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-6,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHApIghhRIAQAAIAYBCIAZhCIAPAAIghBRg");
	this.shape_17.setTransform(-15,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_18.setTransform(-24.1,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_19.setTransform(-34,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_20.setTransform(-44,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_21.setTransform(-57.9,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSA9QgHgDgGgFQgFgGgDgIQgDgIAAgKQAAgJADgIQADgHAFgGQAGgGAHgDQAHgDAIAAQAFAAAFACQAEABAEACQAFADAIAJIABAAIgBgOIAAgtIAPAAIAAB9IgOAAIAAgPIgBAAIgGAIIgIAFIgIADIgJABQgIAAgHgDgAgKgGQgGACgDAEQgEADgCAGQgCAGAAAGQAAAHACAGQACAGAEAEQADAEAGACQAEACAGAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgCgGQgDgFgEgEQgDgDgGgDQgFgCgGAAQgGAAgEACg");
	this.shape_22.setTransform(-68.1,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghApIAAgJIAtg8IgsAAIAAgMIBAAAIAAAJIguA7IAwAAIAAANg");
	this.shape_23.setTransform(-81.3,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQACAEAEAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAwAAIAAAAg");
	this.shape_24.setTransform(-89.8,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHApIgghRIAQAAIAXBCIAYhCIARAAIgiBRg");
	this.shape_25.setTransform(-98.7,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCgBgFQABgEACgCQACgEAEAAQAEAAADAEQACACAAAEQAAAFgCACQgDADgEAAQgEAAgCgDg");
	this.shape_26.setTransform(-105,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_27.setTransform(-112.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.8,-12.2,248.1,24.4);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBSIAAg5QAAgJgEgGQgCgDgDgCQgEgCgEAAQgEAAgEADQgEACgDADQgCAEgBAFQgCAGAAAHIAAAxIgkAAIAAijIAkAAIAAA6IAAAQIAAAAQAFgHANgIQAIgEAJAAQAKAAAHADQAHADAFAFQAFAGACAJQACAHAAAMIAAA/g");
	this.shape.setTransform(60.3,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMA0QgMgEgIgHQgIgHgEgLQgDgHgCgQQAAgIAFgPQAEgKAIgHQAIgHAMgEQAIgDARgBQAOAAAXAGIgCAfQgHgDgLgCQgJgCgHAAQgHAAgGACQgEACgDADQgDAEgBAEIgBAKIABAKQABAFADADQADAEAEACQAGABAIAAIAQgBQAKgCAHgCIACAeQgHADgJABQgLACgKAAQgRgBgIgDg");
	this.shape_1.setTransform(48.1,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAzQgHgDgGgGQgEgGgCgJQgCgHAAgMIAAg+IAkAAIAAA5QAAAKAEAFQACADADACQADABAFAAQAEAAAEgCQADgBADgEQAFgGgBgLIAAg2IAkAAIAABpIgjAAIAAgNIgBAAIgJAJIgJAFQgGACgHAAQgLAAgIgDg");
	this.shape_2.setTransform(36.3,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA3IgMgDQgLgFgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgIALgEIAMgDIANgBQAKAAAQAEQALAEAHAIQAIAIADAKQAEAKAAALQAAAMgEAKQgDAKgIAIQgHAHgLAFQgQAEgKAAgAgJgXQgEACgDAEQgCADgBAFIgBAJIABAKQABAFACADQADAEAEABQAEACAFAAQAGAAAEgCQAEgBADgEQACgDABgFQACgFAAgFQAAgEgCgFQgBgFgCgDQgDgEgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_3.setTransform(23.4,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBQIAAh+IgxAAIAAghICHAAIAAAhIgyAAIAAB+g");
	this.shape_4.setTransform(10.1,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA5IAAgtIguAAIAAgXIAuAAIAAgtIAXAAIAAAtIAtAAIAAAXIgtAAIAAAtg");
	this.shape_5.setTransform(-9.8,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABHQgHgDgFgFQgEgGgDgIQgCgJAAgLIAAgkIgTAAIAAgcIATAAIAAglIAjAAIAAAlIAaAAIAAAcIgaAAIAAAgQAAAKADAEQAEADAIAAIAMgCIAAAdQgQAEgJAAQgKAAgGgCg");
	this.shape_6.setTransform(-28,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUBRIAAhNIgVAAIAAgbIAVAAIAAgLQAAgLABgIQADgJADgGQAFgGAHgDQAIgDAMAAQAIAAAPACIAAAdIgMgBQgJAAgDAEQgDAEAAAKIAAAJIAYAAIAAAbIgYAAIAABNg");
	this.shape_7.setTransform(-36.3,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBQIAAhpIAjAAIAABpgAgHgoQgEgBgDgDQgFgGAAgIQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKQAAAIgGAGQgFAGgJAAQgEAAgDgCg");
	this.shape_8.setTransform(-43.5,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATBQIggg3IgPAAIAAA3IglAAIAAifIBMAAQAMAAAKAEQAJAEAHAHQAGAHAEAKQAEAJAAAMQAAAJgDAJQgCAIgFAFQgFAHgHAEQgGAFgJACIAoA5gAgcgFIAgAAQAJAAAGgGQAGgGAAgJQAAgJgGgGQgGgGgJAAIggAAg");
	this.shape_9.setTransform(-53.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.8,-12.7,136.6,30.4);


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
	this.shape.setTransform(81.7,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(22.5,-3.2,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABQDBIAAicQAAgRgDgNQgDgNgIgJQgHgLgMgEQgNgGgRAAQgSAAgRAHQgSAGgOANQgOANgHAUQgIAUAAAaIAAB8IgbAAIAAmBIAbAAIAACJIgBA0IABAAIAPgVQAJgKALgJQANgIAPgFQAQgFASAAQAXAAASAHQAQAIAMANQAKANAFATQAFAQAAAUIAACeg");
	this.shape.setTransform(191.5,161.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZB7QgYgIgSgQQgSgQgJgYQgHgQgDgrQAAgWAKgkQAJgYASgRQASgPAYgIQAYgIAcAAQASAAAUAFQAXAFARAIIgBAaQgTgJgWgFQgVgFgQAAQgXAAgSAGQgTAHgOANQgOANgHATQgIAVAAAaQAAAbAIAUQAHAUAOANQAOANATAGQASAHAXAAQAQAAAVgFQAWgGATgJIABAaQgRAJgWAFQgVAFgSAAQgcAAgYgIg");
	this.shape_1.setTransform(163.7,168.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5B3QgRgHgLgOQgLgNgFgSQgEgRAAgUIAAidIAbAAIAACZQAAAQAEANQADAOAHALQAIAKAMAGQANAHASAAQASAAARgIQARgHANgPQANgPAGgVQAIgWAAgaIAAh0IAbAAIAAD4IgaAAIAAg2IgBAAQgRAdgQAMQgMAJgPAFQgQAGgUgBQgXABgRgJg");
	this.shape_2.setTransform(136.6,168.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1B4QgYgKgRgSQgQgSgJgXQgJgYAAgbQAAgaAJgYQAJgYAQgRQARgTAYgJQAZgLAcAAQAeAAAZALQAXAJARATQAQARAJAYQAJAYAAAaQAAAbgJAYQgJAXgQASQgRASgXAKQgZALgeAAQgcAAgZgLgAgshgQgTAIgNAPQgMAOgHAUQgGASAAAVQAAAWAGASQAHAUAMAOQANAPATAIQAUAJAYAAQAaAAAUgJQASgIANgPQAMgOAHgUQAGgSAAgWQAAgVgGgSQgHgUgMgOQgNgPgSgIQgUgJgaAAQgYAAgUAJg");
	this.shape_3.setTransform(105.1,168.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCeQgKgHgGgOQgFgNgCgWIgBgzIAAhzIgzAAIAAgZIAzAAIAAhLIAZAAIAABLIBJAAIgBAZIhIAAIAACCQAAAsAFAMQADAJAHAFQAGAEAMAAQAXAAARgGIAAAZQgRAGgbAAQgTAAgLgHg");
	this.shape_4.setTransform(81.3,164.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCeQgKgHgGgOQgFgNgCgWIgBgzIAAhzIgzAAIAAgZIAzAAIAAhLIAZAAIAABLIBJAAIgBAZIhIAAIAACCQAAAsAFAMQADAJAHAFQAGAEAMAAQAXAAARgGIAAAZQgRAGgbAAQgTAAgLgHg");
	this.shape_5.setTransform(26.5,164.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWC/IAAjfIgzAAIAAgYIAzAAIAAg1QAAgYADgQQAEgPAIgKQAIgIALgFQAKgDAOAAQAVgBARAFIAAAaQgQgFgWAAQgSAAgIANQgHAMAAAeIAAA2IA5AAIgBAYIg4AAIAADfg");
	this.shape_6.setTransform(10.2,161.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMC2IAAj3IAaAAIAAD3gAgPiPQgGgHAAgJQAAgJAFgHQAGgGAKAAQAKAAAGAGQAGAHAAAJQAAAJgGAHQgGAGgKAAQgJAAgGgGg");
	this.shape_7.setTransform(-5.1,162.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag+B/IAAj3IAbAAIAAAzIABAAQANgXAQgOQAKgKAMgFQANgFAPAAIASACIgBAcQgKgCgMAAQgQgBgPAJQgMAHgLAOQgKAPgFATQgGASAAAUIAAB8g");
	this.shape_8.setTransform(-19.8,167.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOBRIAAhEIhJAAIAAgZIBJAAIAAhDIAYAAIAABDIBOAAIAAAZIhOAAIAABEg");
	this.shape_9.setTransform(56.1,165.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-32.5,128.7,241.5,66.4), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKJDMQgmgLgfgaIAigtQATAOAWAJQAPAGAPABQAOADAPgDQAKAAAJgFQAIgEAFgFQAEgGABgHQAAgHgEgGQgEgIgIgDQgJgGgKgCIgZgHQgTgEgTgFQgTgHgPgMQgPgNgFgSQgGgUAFgTQAFgQAKgNQAPgSAVgIQAQgHARgCQAWgDAWADQAnAGAhAXIggAsQgUgMgYgFQgPgEgQACQgIABgHACQgGACgEAFQgEACgCAEQgDADAAAEQgBAIAFAGQAGAHAIADIAQAGIASADIAVAGIAVAHQASAGAPANQAPAMAIATQAFASgCARQgDAWgOASQgKAMgOAJQgUALgXAFQgRACgRAAQgWgBgVgGgAlhDTQgVgBgTgIQgUgGgRgMQgQgMgNgSQgLgRgHgUQgGgTgBgVQgBgVAEgVQAFgTAJgSQAUglAngTQATgJAUgDQAVgDAVACQAqAEAhAbIgnAvQgTgMgXgCQgNgCgNACQgKABgJAFQgWAIgMAVQgFALgCALQgCALAAAMQABALAEALQADALAHAKQAOATAWAHQALAEAMABQALgBALgCQAXgFASgQIAsAtQgPAPgSAKQgSAKgVAFQgQADgRAAIgIAAgArUDHQgagKgUgVQgUgUgJgaQgKgaAAgcQAAgbAKgbQAKgYAUgVQAUgUAZgJQAagKAcAAQAcAAAaAKQAZAKAUAUQAUAVAKAYQAKAaAAAcQAAAcgLAaQgJAagUAUQgUAVgaAKQgaAJgcABQgcAAgZgLgAqugGQgHABgHADIgOAGQgGAEgFAFIgJALIgHAOIgEAOIgCAQQAAAJACAIIAEAPQADAHAEAGIAJALIALAKQAGAEAHACQAHADAIACQAHABAIABIAQgCIAPgEIANgHIALgJIAJgLIAHgNIAEgPQACgJAAgIIgCgQIgEgPIgHgOIgJgLQgEgFgGgEIgNgGQgIgDgHgBIgQgCQgIAAgIACgAFxDQQgcgDgXgOQgWgPgOgaQgGgNgDgNQgDgNgBgNIgBgXIgBggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIABAXQAAATADARQACAOAHAMQAJAPAOAGQAOAHAQgBQARABAOgIQAOgGAJgPQAIgLACgNIACgOIAAgXIAAgSIAAgdIAAgfIAAgdIAAgSIBAAAIAAELIg4AAIgBgaQgKAJgMAHQgNAHgMADQgTAGgUAAIgPgBgAhkDQQgcgDgWgOQgXgPgNgaQgGgNgDgNQgDgNgBgNIgCgXIAAggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIAAAXQAAATADARQADAOAGAMQAJAPAPAGQAOAHAQgBQAQABAPgIQAOgGAJgPQAHgLACgNIACgOIABgXIAAgSIAAgdIAAgfIAAgdIAAgSIA/AAIAAELIg4AAIgCgaQgJAJgMAHQgMAHgNADQgTAGgTAAIgQgBgACFDLIAAmdIBAAAIAAGdg");
	this.shape.setTransform(82.3,107.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(1.3,86,162.1,42.2), null);


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

	// Pendant une période limitée.
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(75.1,146.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAhQgHgCgEgEQgGgEgCgHQgBgEgBgMQAAgFACgKQADgGAFgFQAEgEAGgCQAGgCAFAAQAHAAAGACQAFACAEAEQAEAFACAGQADAHAAAIIAAAEIg1AAQAAAGACAFQACAEADADQADADAFABQAGACAFAAIALgBQAHgCAFgCIAAAIIgMADIgLABQgIAAgGgCgAAXgDQAAgFgBgFQgCgEgDgDQgDgDgEgCQgEgBgFAAIgIABIgGAEQgEADgCAEQgCAFAAAGIAsAAIAAAAg");
	this.shape_1.setTransform(69.5,144);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAwQgHgCgEgEQgGgEgBgHQgCgEgBgMQAAgGADgJQACgGAFgFQAEgEAGgCQAGgCAFAAQAHAAAGACQAFACAEAEQAEAFACAGQACAGABAIIAAAFIg1AAQAAAGACAFQACAEADADQADADAFABQAGACAFAAIALgBQAHgCAFgCIAAAIIgLADIgMABQgIAAgGgCgAAXALQAAgFgCgFQgBgDgDgDQgCgDgFgCQgEgBgFAAIgIABIgHAEQgDADgCADQgCAFAAAGIAsAAIAAAAgAgCgbIAOgWIAKABIgTAVg");
	this.shape_2.setTransform(61.7,142.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAArQgCgCgBgDIgDgKIAAgOIAAgdIgOAAIABgIIANAAIAAgUIAHAAIAAAUIAUAAIgBAIIgTAAIAAAhQAAALABADQABABAAABQAAAAABABQAAAAABAAQAAABABAAIAEABQAGAAAFgCIAAAIQgFABgHAAQgFAAgEgBg");
	this.shape_3.setTransform(55.4,143.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAyIAAhDIAIAAIAABDgAgEglQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_4.setTransform(51.4,142.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AArAjIAAgpIgBgIQAAgEgCgCIgFgEQgDgBgFAAQgFgBgEACQgEACgDAEQgDADgCAFIgCAJIAAAkIgHAAIAAgpIgBgIIgDgGIgFgEQgDgBgFAAQgFAAgEABQgEACgDAEQgDADgCAFQgBAGAAAFIAAAiIgJAAIAAhDIAIAAIAAAOIABAAIAEgGQACgDADgCIAHgDQAEgBAEgBQAFABAEABQADABADADIADAFIADAHIAEgHIAGgFQAEgDAEgBQAEgBAEgBQAGAAAFACQAEACADAFQACADACAFIABAKIAAAqg");
	this.shape_5.setTransform(43.4,144);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAyIAAhDIAIAAIAABDgAgEglQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQABgEABgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQACACABAEQAAAAgBABQAAAAAAABQAAAAgBABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_6.setTransform(35.4,142.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA0IAAhnIAIAAIAABng");
	this.shape_7.setTransform(32.1,142.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAhQgHgCgEgEQgGgEgBgHQgCgEgCgMQABgFADgKQACgGAFgFQAEgEAGgCQAGgCAFAAQAHAAAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIg1AAQABAGACAFQACAEADADQAEADAEABQAGACAEAAIAMgBQAHgCAFgCIAAAIIgLADIgNABQgHAAgGgCgAAXgDQAAgFgCgFQgBgEgDgDQgDgDgEgCQgDgBgGAAIgIABIgHAEQgDADgCAEQgDAFAAAGIAtAAIAAAAg");
	this.shape_8.setTransform(22.9,144);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAzQgGgCgFgFQgEgEgCgHQgEgHAAgIQAAgJAEgGQACgGAEgEQAFgFAGgCQAFgCAIgBIAIABQADABAEADQAFACAGAJIABAAIgBgOIAAglIAJAAIAABoIgIAAIAAgOIgBAAIgGAHIgGAFIgHADIgHAAQgIAAgFgCgAgJgHQgFACgEAEQgDACgCAGQgCAEAAAHQAAAGACAFQACAGADADQAEAEAFACQAFABAEAAQAFAAAFgBQAFgDAEgEQAEgDACgGQABgEABgGQgBgGgBgFQgDgFgEgDQgDgEgFgCQgFgCgFABIgJABg");
	this.shape_9.setTransform(14.5,142.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAhQgHgDgFgFQgEgFgCgGQgDgGAAgIQAAgGADgHQACgGAEgFQAFgFAHgCQAEgCAJgBQAGAAAJADQAGACAFAFQAEAFADAGQACAHAAAGQAAAIgCAGQgDAGgEAFQgFAFgGADQgJACgGAAQgJAAgEgCgAgKgYQgFACgEAEQgDAEgCAFQgBAFAAAEQAAAGABAFQACAFADADQAEAEAFACQAFADAFAAQAHAAAFgDQAFgCADgEQAEgDABgFQACgFgBgGQABgEgCgFQgBgFgEgEQgDgEgFgCQgFgCgHAAQgFAAgFACg");
	this.shape_10.setTransform(6,144);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAyIAAhDIAIAAIAABDgAgEglQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQACACAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_11.setTransform(0.1,142.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRAjIAAhDIAJAAIAAAOIAAAAQAEgHAEgDIAFgEQAEgBAEgBIAFABIgBAJIgGgBQgEAAgEACQgDACgCAEQgDAEgCAFIgBAJIAAAig");
	this.shape_12.setTransform(-3.8,144);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAwQgHgCgFgEQgEgEgCgHQgCgEgCgMQAAgGAEgJQACgGAEgFQAFgEAGgCQAGgCAFAAQAHAAAFACQAGACAEAEQAEAFACAGQACAGAAAIIAAAFIg1AAQAAAGADAFQABAEAEADQAEADAEABQAFACAFAAIAMgBQAHgCAFgCIAAAIIgLADIgNABQgHAAgGgCgAAXALQAAgFgCgFQgBgDgDgDQgDgDgEgCQgDgBgGAAIgIABIgHAEQgDADgCADQgDAFAAAGIAtAAIAAAAgAgCgbIAOgWIAKABIgTAVg");
	this.shape_13.setTransform(-10.5,142.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAzIAAhjIAJAAIAAANIAAAAIAGgHIAGgFIAHgCIAIgBQAHAAAHACQAFADAFAEQAEAFACAGQADAHAAAIQAAAIgDAHQgCAGgEAEQgFAFgFACQgHACgHAAIgIgBIgIgDIgFgEIgGgHIAAAAIAAAOIAAAhgAgJgoQgFACgDAEQgFAEgBAFQgCAFAAAFQAAAGACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCADgEQADgDADgEQABgFAAgHQAAgGgBgFQgDgGgDgDQgDgEgFgCQgEgBgGAAQgFAAgFACg");
	this.shape_14.setTransform(-18.6,145.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKAhQgGgCgFgEQgFgEgCgHQgCgEgBgMQAAgFADgKQADgGAEgFQAFgEAGgCQAGgCAGAAQAGAAAFACQAGACAEAEQAEAFADAGQABAHAAAIIAAAEIg1AAQAAAGACAFQACAEAEADQAEADAFABQAFACAEAAIAMgBQAHgCAFgCIABAIIgNADIgMABQgHAAgHgCgAAXgDQAAgFgBgFQgCgEgDgDQgCgDgEgCQgEgBgGAAIgHABIgHAEQgEADgCAEQgCAFgBAGIAtAAIAAAAg");
	this.shape_15.setTransform(-30.6,144);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVAjIAAgpIgBgIQgBgDgCgDQgBgDgDgBQgEgBgEAAQgFAAgEABQgFACgDAEQgEADgCAFQgBAGAAAFIAAAiIgJAAIAAhDIAIAAIAAAOIABAAIADgGIAGgEQADgDAFgBQACgBAGgBQAGAAAEACQAFACADAEQADAEABAFIABAKIAAAqg");
	this.shape_16.setTransform(-38.5,144);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPAgQgFgCgDgDQgCgEgCgFQgBgFAAgFIAAgpIAJAAIAAAoIAAAHQABAEACADQACADADABQAEACAEAAQAFAAAEgCQAEgCAEgEQADgEACgFQACgGAAgGIAAgfIAIAAIAABCIgIAAIAAgOQgFAIgEADIgIADIgIABQgGAAgFgCg");
	this.shape_17.setTransform(-46.6,144.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAArQgCgCgBgDIgDgKIAAgOIAAgdIgOAAIABgIIANAAIAAgUIAHAAIAAAUIAUAAIgBAIIgTAAIAAAhQAAALABADQABABAAABQAAAAABABQAAAAABAAQAAABABAAIAEABQAGAAAFgCIAAAIQgFABgIAAQgEAAgEgBg");
	this.shape_18.setTransform(-56.6,143.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVAjIAAgpIgBgIQgBgDgCgDQgCgDgCgBQgEgBgEAAQgFAAgEABQgEACgEAEQgEADgCAFQgCAGAAAFIAAAiIgJAAIAAhDIAJAAIAAAOIAAAAIAFgGIAFgEQAEgDADgBQAEgBAEgBQAHAAAEACQAFACADAEQADAEACAFIABAKIAAAqg");
	this.shape_19.setTransform(-63.1,144);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNAiIgIgEQgDgDgCgEQgDgEAAgGQAAgGACgDQACgEADgCQAEgCAFgBIAKgBIAYACIAAgFQABgEgCgDQgCgEgCgCIgGgDIgJgBIgLACIgNACIAAgIIANgCIAMgCQAGAAAFACQAGABADADQAEAEACAEQACAFAAAGIAAArIgJAAIAAgOIAAAAQgCAEgDADIgGAFIgIACIgHABIgIgBgAgJABIgGACQgDABgBADQgCADAAADQAAAEACADIAEAEIAFADIAGABIAIgCQAGgBADgDIAGgIQACgFAAgHIgWgBg");
	this.shape_20.setTransform(-71.2,144);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgNAzQgHgCgDgFQgFgEgDgHQgCgHAAgIQAAgJACgGQADgGAFgEQADgFAHgCQAGgCAGgBIAIABQAFABADADQAFACAGAJIABAAIgBgOIAAglIAIAAIAABoIgHAAIAAgOIgBAAIgFAHIgHAFIgIADIgHAAQgGAAgGgCgAgKgHQgEACgDAEQgEACgCAGQgBAEAAAHQAAAGABAFQACAGAEADQADAEAEACQAFABAFAAQAFAAAGgBQAEgDAEgEQADgDACgGQACgEABgGQgBgGgCgFQgCgFgDgDQgEgEgFgCQgFgCgFABIgKABg");
	this.shape_21.setTransform(-79.5,142.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVAjIAAgpIgBgIQAAgDgCgDQgCgDgEgBQgDgBgFAAQgEAAgEABQgEACgEAEQgEADgBAFQgCAGAAAFIAAAiIgJAAIAAhDIAIAAIAAAOIABAAIADgGIAGgEQADgDAFgBQACgBAGgBQAGAAAFACQAEACADAEQADAEABAFIABAKIAAAqg");
	this.shape_22.setTransform(-87.8,144);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKAhQgGgCgEgEQgGgEgCgHQgBgEgBgMQAAgFACgKQADgGAFgFQAEgEAGgCQAGgCAFAAQAHAAAGACQAFACAEAEQAEAFACAGQADAHAAAIIAAAEIg1AAQAAAGACAFQACAEADADQADADAFABQAFACAGAAIALgBQAHgCAFgCIAAAIIgMADIgLABQgIAAgHgCgAAXgDQAAgFgBgFQgCgEgDgDQgDgDgEgCQgEgBgFAAIgIABIgGAEQgEADgCAEQgCAFAAAGIAsAAIAAAAg");
	this.shape_23.setTransform(-95.7,144);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiAzIAAhlIAlAAQAIAAAGADQAGACAEAEQAEAEACAGQACAGAAAHQAAAHgCAGQgCAFgEAEQgEAEgGADQgGACgIAAIgcAAIAAAmgAgZAFIAcAAQAGAAAEgCQAEgBADgDQADgDABgEQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgGAAIgcAAg");
	this.shape_24.setTransform(-103.7,142.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-110.6,132,210.4,20.8), null);


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


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgECyQgdgHgXgQQgcgXgKgQIgOgbIgKgfIgmAAIAEgtIAeAAIgBgMIABgNIgiAAIAEgsIAiAAQAFgXATgjQAKgQAcgYQAXgQAdgHQAbgIAiAAQAjAABBASIgEBLQgZgJgXgEQgagFgWAAQgRAAgNADQgPADgLAGQgLAHgJAKQgJAKgFAPICjAAIgJAsIiiAAIgBANIABAMICcAAIgJAtIiLAAQAGAOAJALQAIAKALAGQAMAGAOADQAOADAQAAQAWAAAagFQAXgEAZgIIAEBKQhBASgjAAQgiAAgbgIg");
	this.shape.setTransform(144,226.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah8EbQAggaA4g+QAngvAgg1QggAIgnAAQglAAgigOQgggNgZgZQgZgYgOgfQgOgjAAgmQAAghARg1QAKgaAkgoQAdgbAogPQAbgJA8gGQAhABA5AQQAnAPAdAcQAcAcAPAkQAPAlAAApQAAApgQAyQgPAygbAzQgbAygiAuQgjAvgmAjgAgjilQgQAGgMANQgMAMgGAQQgGAPgBATQABASAGAQQAHAQALANQAMAMAQAHQASAFATAAQAUAAARgFQARgHAMgMQAMgNAGgQQAGgQAAgSQAAgTgGgPQgGgQgMgMQgMgNgRgGQgRgIgUAAQgUAAgRAIg");
	this.shape_1.setTransform(100,236.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUEWIAAhnIj2AAIAAhrID3lZIB8AAIAAFZIBSAAIgDBrIhPAAIAABngAheBEIByAAIAAigIgBAAg");
	this.shape_2.setTransform(49.9,237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUEWIAAhnIj2AAIAAhrID3lZIB8AAIAAFZIBSAAIgDBrIhPAAIAABngAheBEIByAAIAAigIgBAAg");
	this.shape_3.setTransform(-0.3,237);

	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(76.5,288,1.08,1.08,0,0,0,-10.5,142.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-31.6,187.9,227.2,111.4), null);


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
(lib.oculus_trek_300x600_FR = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjTDWQhZhZAAh9QAAh6BZhZQBZhZB6AAQB9AABZBZQBXBZAAB6QAAB9hXBZQhZBXh9AAQh6AAhZhXg");
	var mask_graphics_1 = new cjs.Graphics().p("AkQEUQhzhzAAihQAAidBzhzQB0hzCcAAQCiAAByBzQBwBzAACdQAAChhwBzQhyBwiiAAQicAAh0hwg");
	var mask_graphics_2 = new cjs.Graphics().p("AliFnQiWiVAAjSQAAjNCWiWQCWiVDMAAQDSAACVCVQCSCWAADNQAADSiSCVQiVCSjSAAQjMAAiWiSg");
	var mask_graphics_3 = new cjs.Graphics().p("Am0G7Qi5i5AAkCQAAj8C5i5QC4i4D8AAQEDAAC4C4QCzC5AAD8QAAECizC5Qi4CzkDAAQj8AAi4izg");
	var mask_graphics_4 = new cjs.Graphics().p("Ao/JHQj0jzAAlUQAAlMD0j0QDzjyFMAAQFVAADzDyQDsD0AAFMQAAFUjsDzQjzDslVAAQlMAAjzjsg");
	var mask_graphics_5 = new cjs.Graphics().p("ArKLTQkuktAAmmQAAmcEukvQEtktGdAAQGmAAEuEtQElEvAAGcQAAGmklEtQkuEmmmAAQmdAAktkmg");
	var mask_graphics_6 = new cjs.Graphics().p("AtVNgQlploAAn4QAAntFploQFoloHtAAQH4AAFoFoQFeFoABHtQgBH4leFoQloFen4AAQntAAloleg");
	var mask_graphics_7 = new cjs.Graphics().p("AvgPtQmjmjAApKQAAo9GjmkQGjmiI9AAQJLAAGjGiQGWGkAAI9QAAJKmWGjQmjGXpLAAQo9AAmjmXg");
	var mask_graphics_8 = new cjs.Graphics().p("AxrR5QndndAAqcQAAqOHdndQHendKNAAQKcAAHeHdQHPHdAAKOQAAKcnPHdQneHQqcAAQqNAAnenQg");
	var mask_graphics_9 = new cjs.Graphics().p("Az2UGQoYoYAAruQAAreIYoYQIYoYLeAAQLuAAIYIYQIJIYAALeQAALuoJIYQoYIJruAAQreAAoYoJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:169.5,y:232.5}).wait(1).to({graphics:mask_graphics_1,x:168.6,y:234.7}).wait(1).to({graphics:mask_graphics_2,x:167.8,y:236.6}).wait(1).to({graphics:mask_graphics_3,x:166.9,y:238.4}).wait(1).to({graphics:mask_graphics_4,x:166,y:242.2}).wait(1).to({graphics:mask_graphics_5,x:165.2,y:246}).wait(1).to({graphics:mask_graphics_6,x:164.3,y:249.8}).wait(1).to({graphics:mask_graphics_7,x:163.4,y:253.7}).wait(1).to({graphics:mask_graphics_8,x:162.5,y:257.5}).wait(1).to({graphics:mask_graphics_9,x:161.7,y:261.3}).wait(1).to({graphics:null,x:0,y:0}).wait(204));

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(154,301.3,0.067,0.067,0,0,0,65.5,65.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:362.4,y:766.4},40,cjs.Ease.get(-1)).to({_off:true},1).wait(173));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.1,301.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},40,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154,301,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},40,cjs.Ease.get(-1)).to({_off:true},1).wait(167));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154,300.9,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:464.4,y:-51.2},40,cjs.Ease.get(-1)).to({_off:true},1).wait(164));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.9,301.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:457.6,y:360},40,cjs.Ease.get(-1)).to({_off:true},1).wait(161));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.8,301.4,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},40,cjs.Ease.get(-1)).to({_off:true},1).wait(158));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(153.6,301.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},40,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:153.5,y:352.5}).wait(68).to({graphics:null,x:0,y:0}).wait(105));

	// Layer 11
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,374.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({_off:false},0).to({y:353.5},9).wait(55).to({startPosition:0},0).to({scaleX:1.21,scaleY:1.21,x:149.4,y:367.3},23,cjs.Ease.get(-1)).to({scaleX:2.42,scaleY:2.42,x:155.7,y:416.5,alpha:0},12).to({_off:true},1).wait(68));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_41 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_2_graphics_41,x:153.5,y:376.5}).wait(68).to({graphics:null,x:0,y:0}).wait(105));

	// Layer 12
	this.instance_8 = new lib.text2_mc("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,398.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(155.7,479.3,2.422,2.422);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},51).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},50).to({state:[{t:this.instance_8}]},23).to({state:[{t:this.instance_9}]},12).to({state:[]},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({y:375.5},9).wait(50).to({startPosition:0},0).to({scaleX:1.21,scaleY:1.21,x:149.4,y:393.8},23,cjs.Ease.get(-1)).to({_off:true,scaleX:2.42,scaleY:2.42,x:155.7,y:479.3,alpha:0},12).wait(69));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,-60.9,0,61).s().p("A3lJiIAAzDMAvLAAAIAATDg");
	this.shape.setTransform(151,352);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.059)"],[0,0.98],0,-63.6,0,63.6).s().p("A3lJ8IAAz3MAvLAAAIAAT3g");
	this.shape_1.setTransform(151,349.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.118)"],[0,0.957],0,-66.2,0,66.2).s().p("A3lKWIAA0rMAvLAAAIAAUrg");
	this.shape_2.setTransform(151,347);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],0,-68.8,0,68.8).s().p("A3lKwIAA1fMAvLAAAIAAVfg");
	this.shape_3.setTransform(151,344.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.239)"],[0,0.914],0,-71.4,0,71.4).s().p("A3lLLIAA2VMAvLAAAIAAWVg");
	this.shape_4.setTransform(151,342);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)"],[0,0.894],0,-74,0,74).s().p("A3lLkIAA3IMAvLAAAIAAXIg");
	this.shape_5.setTransform(151,339.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],0,-76.6,0,76.6).s().p("A3lL/IAA39MAvLAAAIAAX9g");
	this.shape_6.setTransform(151,337);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.42)"],[0,0.851],0,-79.2,0,79.2).s().p("A3lMZIAA4xMAvLAAAIAAYxg");
	this.shape_7.setTransform(151,334.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.478)"],[0,0.827],0,-81.9,0,81.8).s().p("A3lMzIAA5lMAvLAAAIAAZlg");
	this.shape_8.setTransform(151,332.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-84.5,0,84.4).s().p("A3lNNIAA6ZMAvLAAAIAAaZg");
	this.shape_9.setTransform(151,329.6);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.494)"],[0,0.824],0,-82.6,0,82.4).s().p("A3lM5IAA5xMAvLAAAIAAZxg");
	this.shape_10.setTransform(151,505.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.447)"],[0,0.839],0,-80.6,0,80.5).s().p("A3lMmIAA5LMAvLAAAIAAZLg");
	this.shape_11.setTransform(151,510.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.404)"],[0,0.855],0,-78.6,0,78.6).s().p("A3lMSIAA4jMAvLAAAIAAYjg");
	this.shape_12.setTransform(151,514.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.314)"],[0,0.886],0,-74.7,0,74.7).s().p("A3lLrIAA3VMAvLAAAIAAXVg");
	this.shape_13.setTransform(151,523.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.271)"],[0,0.906],0,-72.7,0,72.7).s().p("A3lLXIAA2tMAvLAAAIAAWtg");
	this.shape_14.setTransform(151,527.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.224)"],[0,0.922],0,-70.8,0,70.7).s().p("A3lLEIAA2HMAvLAAAIAAWHg");
	this.shape_15.setTransform(151,532.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,0.953],0,-66.8,0,66.9).s().p("A3lKdIAA05MAvLAAAIAAU5g");
	this.shape_16.setTransform(151,540.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.09)"],[0,0.969],0,-64.9,0,64.9).s().p("A3lKJIAA0RMAvLAAAIAAURg");
	this.shape_17.setTransform(151,545.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.043)"],[0,0.984],0,-62.9,0,63).s().p("A3lJ1IAAzqMAvLAAAIAATqg");
	this.shape_18.setTransform(151,549.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{y:352}}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:344.5}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{y:337}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_6,p:{y:519}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_3,p:{y:536.5}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape,p:{y:554}}]},1).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(59).to({_off:false},0).wait(1).to({y:329.8},0).wait(1).to({y:329.9},0).wait(1).to({y:330.1},0).wait(1).to({y:330.3},0).wait(1).to({y:330.5},0).wait(1).to({y:330.7},0).wait(1).to({y:330.8},0).wait(1).to({y:331},0).wait(1).to({y:331.2},0).wait(1).to({y:331.4},0).wait(1).to({y:331.6},0).wait(1).to({y:331.8},0).wait(1).to({y:331.9},0).wait(1).to({y:332.1},0).wait(1).to({y:332.3},0).wait(1).to({y:332.5},0).wait(1).to({y:332.7},0).wait(1).to({y:332.8},0).wait(1).to({y:333},0).wait(1).to({y:333.2},0).wait(1).to({y:333.4},0).wait(1).to({y:333.6},0).wait(1).to({y:333.8},0).wait(1).to({y:333.9},0).wait(1).to({y:334.1},0).wait(1).to({y:334.3},0).wait(1).to({y:334.5},0).wait(1).to({y:334.7},0).wait(1).to({y:334.8},0).wait(1).to({y:335},0).wait(1).to({y:335.2},0).wait(1).to({y:335.4},0).wait(1).to({y:335.6},0).wait(1).to({y:335.8},0).wait(1).to({y:335.9},0).wait(1).to({y:336.1},0).wait(1).to({y:336.3},0).wait(1).to({y:336.5},0).wait(1).to({y:336.7},0).wait(1).to({y:336.8},0).wait(1).to({y:337},0).wait(1).to({y:337.2},0).wait(1).to({y:337.4},0).wait(1).to({y:337.6},0).wait(1).to({y:337.8},0).wait(1).to({y:337.9},0).wait(1).to({y:338.1},0).wait(1).to({y:338.3},0).wait(1).to({y:338.5},0).wait(1).to({y:338.7},0).wait(1).to({y:338.8},0).wait(1).to({y:339},0).wait(1).to({y:339.2},0).wait(1).to({y:339.4},0).wait(1).to({y:339.6},0).wait(1).to({y:339.9},0).wait(1).to({y:340.8},0).wait(1).to({y:342.3},0).wait(1).to({y:344.5},0).wait(1).to({y:347.2},0).wait(1).to({y:350.6},0).wait(1).to({y:354.6},0).wait(1).to({y:359.2},0).wait(1).to({y:364.4},0).wait(1).to({y:370.2},0).wait(1).to({y:376.6},0).wait(1).to({y:383.7},0).wait(1).to({y:391.3},0).wait(1).to({y:399.6},0).wait(1).to({y:408.5},0).wait(1).to({y:418},0).wait(1).to({y:428.1},0).wait(1).to({y:438.8},0).wait(1).to({y:450.1},0).wait(1).to({y:462.1},0).wait(1).to({y:474.6},0).wait(1).to({y:487.8},0).wait(1).to({y:501.6},0).to({_off:true},1).wait(76));

	// Layer 9
	this.instance_10 = new lib.flare_1("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(135.5,290,1,1,0,0,0,52.5,100);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).to({_off:true},38).wait(104));

	// Layer 2
	this.instance_11 = new lib.kirk();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.1,279.7,0.073,0.073,0,0,0,104.6,65.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},0).to({regX:104,regY:65.5,scaleX:1,scaleY:1,x:151,y:345.5},20).to({scaleX:1.08,scaleY:1.08,x:151.1,y:352.3},67).to({regX:103.8,regY:65.6,scaleX:1.85,scaleY:1.85,x:153.8,y:462.8},23,cjs.Ease.get(-1)).to({_off:true},1).wait(76));

	// Layer 15
	this.instance_12 = new lib.logo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.3,268.2,0.044,0.044,0,0,0,116.8,65.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(27).to({_off:false},0).to({regY:64.9,scaleX:0.6,scaleY:0.6,x:148.3,y:198.7},20).wait(67).to({regX:117.2,regY:64.3,scaleX:0.76,scaleY:0.76,x:148.6,y:197.5},23,cjs.Ease.get(-1)).to({regX:116.9,regY:64.5,scaleX:1.43,scaleY:1.43,x:148.3,y:188.6,alpha:0},12).to({_off:true},1).wait(64));

	// Layer 1
	this.instance_13 = new lib.Tween5("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.1,272,0.069,0.069,0,0,0,0.7,0.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off:false},0).to({regX:0,regY:0,scaleX:0.94,scaleY:0.94,x:150,y:239.3},20).to({regX:0.1,regY:0.1,scaleX:1.02,scaleY:1.02,x:150.1,y:237.7},67).to({regX:0,regY:0,scaleX:1.76,scaleY:1.76,x:151.9,y:264.7},23,cjs.Ease.get(-1)).to({scaleX:2.81,scaleY:2.81,x:151.5,y:284.3,alpha:0},12).to({_off:true},1).wait(64));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(150.6,541,1.014,1.014,0,0,0,128.8,-4.7);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(145).to({_off:false},0).to({alpha:1},4).wait(65));

	// legal
	this.instance_14 = new lib.legal_withpurchase();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.5,595.2,1.216,1.216,0,0,0,117.9,8.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(163).to({_off:false},0).to({y:581.2,alpha:1},5).wait(46));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_155 = new cjs.Graphics().p("AuNHRIAAugIcaAAIAAOgg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_3_graphics_155,x:145.9,y:430.8}).wait(59));

	// price
	this.instance_15 = new lib.newPrice();
	this.instance_15.parent = this;
	this.instance_15.setTransform(145.9,506.2,0.814,0.814,0,0,0,59.5,246.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(155).to({_off:false},0).to({y:436.2},10,cjs.Ease.get(1)).wait(49));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_155 = new cjs.Graphics().p("AtqDIIAAmPIbVAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_4_graphics_155,x:149.3,y:370}).wait(59));

	// rift
	this.instance_16 = new lib.logo_rifttouch();
	this.instance_16.parent = this;
	this.instance_16.setTransform(156.2,401,0.415,0.415,0,0,0,88,162.2);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(155).to({_off:false},0).to({y:378},10,cjs.Ease.get(1)).wait(49));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_155 = new cjs.Graphics().p("AqyIMIAAwXIVlAAIAAQXg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_5_graphics_155,x:149.7,y:304.2}).wait(59));

	// oculus
	this.instance_17 = new lib.logo_oculus();
	this.instance_17.parent = this;
	this.instance_17.setTransform(153.3,344.6,0.625,0.625,0,0,0,81.4,66);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(155).to({_off:false},0).to({y:311.6},10,cjs.Ease.get(1)).wait(49));

	// stadium
	this.instance_18 = new lib.logo_stadium();
	this.instance_18.parent = this;
	this.instance_18.setTransform(152.8,352.1,0.618,0.618,0,0,0,81.4,66);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(155).to({_off:false},0).to({y:312.1},10,cjs.Ease.get(1)).wait(49));

	// touch RT
	this.instance_19 = new lib.hardware_touch_RT_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(137.5,296.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(142).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:1.15,scaleY:1.15,x:90.5,y:206.2},19,cjs.Ease.get(-1)).wait(53));

	// touch LT
	this.instance_20 = new lib.hardware_touch_LT_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(148.4,296.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(142).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:1.15,scaleY:1.15,x:209.8,y:204.2},19,cjs.Ease.get(-1)).wait(53));

	// rift
	this.instance_21 = new lib.hardware_rift_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(144.5,289.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(142).to({_off:false},0).to({regX:69.1,regY:42.1,scaleX:1.23,scaleY:1.23,x:168.8,y:127.2},19,cjs.Ease.get(-1)).wait(53));

	// bg
	this.instance_22 = new lib.Bitmap38();
	this.instance_22.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: 'F29EE5F66B0C4CE7B43746C9B30EA3FE',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap14.jpg", id:"Bitmap14"},
		{src:"images/Bitmap16.jpg", id:"Bitmap16"},
		{src:"images/Bitmap38.jpg", id:"Bitmap38"},
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
an.compositions['F29EE5F66B0C4CE7B43746C9B30EA3FE'] = {
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