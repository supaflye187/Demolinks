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



(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape.setTransform(95.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_2.setTransform(82.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGACgDQADgEADgBQAFgCAFAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(57.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(49.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(35.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(25.8,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(15.8,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(2.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQACgEAEAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-15.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_12.setTransform(-25.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-58.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_16.setTransform(-67.8,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(-77.8,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA+IAAh7IAOAAIAABtIA9AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,203.8,24.4);


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


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAVIAAgWQAAgFgCgCIgCgBIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIALAAIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACACAAAEIABAIIAAAXg");
	this.shape.setTransform(17.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_1.setTransform(12.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAfIgIgBIABgKIAHACIAIABIAFgBIAEgCIAEgDIABgGIAAgHIgBAAQgDAEgDACQgEABgDAAIgIgBQgEgCgCgDIgEgGQgBgEgBgEQABgFABgEQACgEACgCIAGgFIAIgCQADAAAEACIAHAFIAAgGIAKAAIAAApIAAAGIgBAEIgDAEIgDADIgIADIgIABIgJgBgAgEgUIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAIAFABIAEgBIAEgCIACgDIABgFIgBgFIgCgEIgEgCIgEgBIgFABg");
	this.shape_2.setTransform(7.8,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_5.setTransform(-3.8,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAZAAQAFAAADACQAEABADADIAEAGIABAIQAAAFgBAEIgEAFQgDADgEABQgDACgFAAIgOAAIAAAVgAgLAAIANAAIAEAAIADgCIACgDIAAgFIAAgEIgCgDIgDgCIgEgBIgNAAg");
	this.shape_6.setTransform(-8.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,46,14.2);


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
	this.shape.graphics.f("#FFFFFF").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_2.setTransform(63.3,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_3.setTransform(56.3,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_4.setTransform(48.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(41.5,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(34.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgCQAJABAIADQAHACAFAHQAFAFADAIQADAIAAAJQAAALgDAHQgDAIgFAFQgFAFgHAEQgIACgJAAIgJAAQgEgCgEgCIgHgFIgGgIIgBAAIAAAQIAAAogAgLguQgFACgEAFQgEADgCAGQgCAGAAAFQAAAIACAFQACAGAEADQAEADAGACQAFADAFAAQAHAAAFgCQAFgCAEgEQAEgDABgFQACgHAAgHQAAgGgCgGQgBgFgEgEQgEgFgFgCQgFgBgHAAQgFgBgGADg");
	this.shape_7.setTransform(24.2,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA+IgPgDIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgEQAEgDACgGQACgFABgJIAAgQIAAAAQgJAKgFADQgEACgFACIgJAAQgHAAgIgCQgHgEgGgFQgFgGgDgHQgDgHAAgLQAAgJADgIQADgIAFgFQAGgHAHgCQAIgDAHgBIAJACQAEABAEACIAIAFIAHAHIAAAAIAAgOIAOAAIAABRIgBAKIgDAJIgEAIIgFAGQgHAFgIACQgIACgJABIgRgCgAgLgwQgFACgDAFQgEAEgCAFQgCAGAAAGQAAAHACAHQACAFAEADQADAEAFACQAGACAFAAQAGAAAGgDQAFgCAEgDQADgDADgGQACgFAAgIQAAgFgCgGQgCgGgEgDQgEgFgFgCQgFgDgHABQgFAAgGABg");
	this.shape_9.setTransform(-0.8,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(-8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA1QgDgCgDgFQgCgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_12.setTransform(-27.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFACAGgBIAOgBQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgFgDgEQgDgCgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_17.setTransform(-74.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-12.2,163.2,24.4);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape.setTransform(95.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_2.setTransform(82.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGACgDQADgEADgBQAFgCAFAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(57.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(49.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(35.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(25.8,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(15.8,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(2.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQACgEAEAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-15.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_12.setTransform(-25.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-58.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_16.setTransform(-67.8,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(-77.8,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA+IAAh7IAOAAIAABtIA9AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,203.8,24.4);


(lib.msg_shopnow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape.setTransform(59.1,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_1.setTransform(53.7,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAeIgHgCQgGgCgEgEQgDgEgDgGQgCgGAAgGQAAgFACgGQADgFADgEQAEgEAGgDIAHgBIAGgBQAGgBAHADQAHADADAEQAFAEABAFQACAGAAAFQAAAGgCAGQgBAGgFAEQgDAEgHACQgHADgGAAgAgGgOIgFADIgCAGIgBAFIABAHIACAFIAFADQADACADAAQAEAAADgCIAEgDQACgCABgDIABgHIgBgFIgDgGIgEgDIgHgCIgGACg");
	this.shape_2.setTransform(47.5,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAdg2IATAAIAABXg");
	this.shape_3.setTransform(38.1,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAeIAAggQAAgGgCgDIgEgDIgFgBIgFABIgFAEIgDAGIgBAGIAAAcIgQAAIAAg5IAQAAIAAAKIAFgFIAFgEQAEgDAGAAQAFAAAEACQAEACADADQACADABAEIACALIAAAig");
	this.shape_4.setTransform(25.6,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(20,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBIAHgDIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_6.setTransform(13.8,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_7.setTransform(7.2,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAQAAIAABIIAnAAIAAAPg");
	this.shape_8.setTransform(1.1,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-4.8,0,69.3,18.4), null);


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
	this.shape_4.graphics.f("#FFFFFF").s().p("EBUjAMjIGjmjQhIhLgphhQgphigBhwQAChyAqhkQAqhkBMhLQBMhMBkgqQBjgrBzgBQBwABBiApQBiAoBLBJIGwmxIAZAZIl6F6IgOAOIzWTWgEBfRgExQg8AaguAuQgtAtgbA9QgZA8AABFQgBBCAYA7QAZA6AqAtIHYnXQgugqg6gYQg6gYhDAAQhFAAg9AagEBeiAIOIC7i8QBDgCA6gaQA6gZAsgtQAtgsAZg6QAZg6ADhDIC8i6QAdBUAABdQgBBygrBkQgqBkhMBLQhMBMhjArQhkAqhyABQhegBhUgcgEBLFAIrQgNgBgIgIQgIgIgBgMIAAmaIl1AAQgLgBgIgHQgHgHAAgLIAAilQAAgLAHgHQAIgIALAAIF1AAIAAmmQABgLAHgIQAHgHALAAICnAAQAKAAAIAHQAHAIAAALIAAP4QgBAagRASQgRARgaABgAFtIrIDajaILwAAIAAh9QABgJAHgHQAFgGAKAAICuAAQAKAAAGAGQAGAHAAAJIAAEYQAAAbgSARQgRASgbABgA/0IrQgbgBgRgSQgSgRgBgbIAAkYQAAgJAHgHQAHgGAJAAICuAAQAJAAAHAGQAGAHABAJIAAB9IM0AAIjZDagEAqmAIOQhSgbhEgyQhFgygyhDIGHAAQAZAEAaAAQA7gBA1gTQA1gTArgiQArgjAegvQAFgGAGgCQAIgCAHAEICaBaQAIAEABAIQADAIgFAHQgxBPhIA7QhHA6hZAgQhYAhhjAAQhcAAhRgbgEgw7AIpQgUAAgRgKQgSgLgJgSIlBpjICNiLIERIIIAAspQAAgLAHgHQAHgHALgBICmAAQALABAHAHQAIAHAAALIAAP5QgBAagRARQgSASgaAAgEhthAIpQgYAAgRgQQgQgQAAgYIAAihIMOAAQAHAAAGAFQAEAFAAAHIAAC3QAAAHgEAFQgGAFgHAAgEg7ZAIpQgMAAgJgJQgIgIAAgMIAAk0IDZjYIAAIMQAAAMgIAIQgIAJgNAAgEhSzAH+QhlgrhLhMQhMhLgqhkQgrhkgBhzQABhyArhjQAqhkBMhMQBLhLBlgrQBjgrBzAAQBzAABkArQBjArBMBLQBLBMArBkQArBjABByQgBBzgrBkQgqBkhMBLQhLBMhlAqQhjArhzABQhzgBhjgqgEhRfgExQg9AZgtAuQguAugaA8QgZA9gBBEQABBGAZA8QAaA9AuAtQAtAuA9AaQA8AaBGAAQBFAAA9gaQA8gaAuguQAugtAag9QAZg8ABhGQgBhEgZg9Qgag8guguQgugug8gZQg9gahFgBQhGABg8AagEBcrAHUICfifQAyAWA3AGIixCxQgugTgpgbgEA/RABnIAApPQAAgaARgRQASgSAaAAIB/AAQAMAAAJAIQAHAIABANIAANHgEhuagBDIAAnFQABgMAHgJQAJgIANAAICeAAQANAAAIAIQAIAIABANIAAKcgALIB1QgJgBgGgGQgHgGAAgJIAAixQAAgJAHgGQAGgGAJAAIHpAAQAJAAAGAGQAHAGAAAJIAACxQAAAJgHAGQgGAGgJABgA7RB1QgJgBgGgGQgHgGAAgJIAAixQAAgJAHgGQAGgGAJAAIHpAAQAJAAAGAGQAHAGgBAJIAACxQABAJgHAGQgGAGgJABgEAlDgChQAbhVAzhGQAyhHBFg0QBFg0BUgdQBUgcBegBQBhABBXAfQBXAfBIA5QBGA5AyBMQAEAIgBAHQgCAIgHAFIibBaQgHAEgHgCQgIgBgEgHQgthDhJgoQhIgnhWgBQhGAAg9AaQg8AaguAuQguAtgZA9QgaA8AABFQAAARABAQgEBmFgCFICfifQAbApATAvIixCxQgFg5gXgxgAVOitQgKAAgGgHQgGgGgBgJIAAiJIq/AAIDZjZIKCAAQAcAAARASQARASABAaIAAEkQAAAJgGAGQgHAHgJAAgEggcgCtQgJAAgHgHQgHgGAAgJIAAkkQABgaASgSQARgSAbAAIRrAAIjZDZIr1AAIAACJQgBAJgGAGQgHAHgJAAg");
	this.shape_4.setTransform(706.7,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_LoneEcho, new cjs.Rectangle(0,0,1413.4,165.6), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(166.1,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_1.setTransform(161.6,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAYQgEgCgEgDQgDgDgBgFQgCgDAAgIQAAgDACgIQABgEADgDQADgEAFgBIAIgBIAIABIAIAFQACADACAEQACAFAAAGIAAACIgnAAIADAJQABADADACQACACADABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgKgBgAARgCIgCgHIgDgFIgFgDIgHgBIgEAAIgFADIgEAGIgDAHIAhAAIAAAAg");
	this.shape_2.setTransform(155.9,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_3.setTransform(149.8,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgdIAGAAIAAAcIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgWIAGAAIAAAvIgGAAIAAgKQgEAFgDACIgFADIgGAAQgEAAgEgBg");
	this.shape_4.setTransform(143.9,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(139.9,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAYQgFgCgDgDQgEgDgCgFQgBgDgBgIQAAgDACgIQACgEAEgDQADgDAFgCIAKgBIAHABIAIACIgBAGIgHgDIgIAAIgHABQgDAAgDADIgEAGQgBAEAAAEQAAAFABAEIAEAGQADADADABIAHABIAIgBIAHgDIABAGIgIACIgHABIgKgBg");
	this.shape_6.setTransform(136.2,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgCgFIgFgCIgFgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_7.setTransform(130.7,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAADIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(126.6,8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_9.setTransform(121,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAXQgEgCgEgDIgEgIQgCgEAAgGQAAgEACgFIAEgIQAEgDAEgCQADgBAHgBQAEAAAGACQAFACADADIAGAIIABAJQAAAGgBAEIgGAIQgDADgFACIgKACQgHAAgDgCgAgIgRIgFAEIgEAHIgBAGIABAIIAEAGIAFAEQAFABADABQAFgBADgBIAHgEIACgGQACgEAAgEQAAgDgCgDIgCgHIgHgEQgDgBgFAAQgDAAgFABg");
	this.shape_10.setTransform(116.3,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgDgFIgDgCIgGgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_11.setTransform(110.3,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYIgIgDIADgFIAGADIAJABIAEgBIAEgBIADgDQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgFIgEgCIgJgDQgGgBgEgCIgCgDQgCgDAAgDQAAgDACgCQABgDACgCIAGgCIAFgBIAJABIAHACIgCAGIgGgCIgIgBQgDAAgDABIgDADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAEACIAJADIAFACIAFABIADADQABADAAAEQAAADgBAEIgEAEIgHACIgGABIgKgBg");
	this.shape_12.setTransform(102.5,9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDAAgIQAAgDABgIQACgEAEgDQADgEAEgBIAIgBIAIABIAHAFQADADACAEQABAFABAGIAAACIgmAAIACAJQABADACACQACACAEABIAHABIAJgBIAIgDIAAAGIgIACIgJABIgJgBgAAQgCIgBgHIgDgFIgFgDIgHgBIgEAAIgGADIgDAGIgCAHIAfAAIAAAAg");
	this.shape_13.setTransform(97.6,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAZIAAgdIAAgGIgDgEQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgDACAAADIgCAHIAAAaIgFAAIAAgdIAAgGIgCgEIgEgDIgFgBIgHABIgFAEQgCADgCADQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAGABIAEADIACADIACAGIAEgFIADgEIAGgDIAGgBQAEAAADACQAEABABADIADAGIABAIIAAAdg");
	this.shape_14.setTransform(90.3,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAYIgGgDIgEgEQgBgEAAgEQAAgEABgDQABgCADgBIAGgDIAHgBIARACIAAgDIgBgGIgDgDIgEgDIgGAAIgIABIgJACIAAgGIAJgCIAIgBIAIABQAEABADACQADACABAEQABADAAAFIAAAeIgGAAIAAgLIgEAGIgEADIgGACIgEABIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFABIAFgBIAGgEIAEgFQACgEAAgFIgQgBg");
	this.shape_15.setTransform(82.8,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAlIgHgCIgHgDIgFgFIgFgFIgDgHIgCgHIgBgIIABgHIACgHIACgHIAEgFIAGgFIAHgDIAHgCIAIgBIANABIAMAEIAAAHQgHgDgGgBIgMgCIgHABIgGACIgGACIgEAEIgDAFIgDAFIgBAMIAAAHIACAGIADAFIADAFIAFAEIAFACIAGACIAGABIALgBIAKgEIAAgZIgUAAIgBgFIAcAAIAAAiIgHADIgIACIgNACIgHgBg");
	this.shape_16.setTransform(76.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(70.2,0,99.3,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIgCADIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(-43,140.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAgIAJgUIgRgrIAGAAIANAlIAOglIAGAAIgSAqIgGAVg");
	this.shape_1.setTransform(-46.6,139.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_2.setTransform(-50.2,137.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANAWIAAgaIAAgFIgCgEIgDgCIgFgBQgDAAgCABIgFADQgDADgBADQgCADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAEgEIADgDIAFgCIAEgBQAFAAACABIAGAEQABACABADIABAHIAAAag");
	this.shape_3.setTransform(-54.1,138.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAVIgHgFQgDgDgBgEQgBgEAAgFQAAgEABgEQABgEADgDQAEgDADgCIAJgCIAJACQAFACACADQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADIgHAFIgJACIgJgCgAgHgPQgDABgCADIgDAFIgBAGIABAHIADAGQACACADABQAEACADAAQAEAAADgCQADgBADgCIADgGIABgHIgBgGIgDgFIgGgEQgDgCgEAAQgDAAgEACg");
	this.shape_4.setTransform(-59.7,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_5.setTransform(-67.7,138.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcAWIAAgaIgBgEIgBgEIgEgDIgEgBQgEAAgCABQgDABgCADIgDAFIgBAFIAAAXIgFAAIAAgaIAAgEIgCgEIgDgDIgFgBQgEAAgCABIgFADIgDAGQgBADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAAAAIADgEIADgDIAFgCIAFgBIAFABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAEIACAEIADgEIADgEIAFgCIAGgBQAEAAACABQADACACACQACACAAADIABAHIAAAag");
	this.shape_6.setTransform(-74.5,138.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_7.setTransform(-79.9,137.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIACACIAEABIAHgBIAAAFIgIABIgGgBg");
	this.shape_8.setTransform(-82.7,137.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAgQgEgBgDgDQgDgDgCgEQgBgFAAgEQAAgGABgEQACgEADgCIAHgFQADgCAFAAIAEABIAFADQADABAEAFIABAAIAAgIIAAgYIAFAAIAABCIgFAAIAAgJIgBAAIgDAFIgEADIgFABIgEABQgFAAgDgCgAgGgEQgDABgCACIgEAFIgBAIIABAHIAEAFIAFAEIAGABIAHgBQADgBACgDIAEgGIABgGQAAgEgCgEQgBgDgCgCQgDgCgDgBQgDgCgDABQgDgBgDACg");
	this.shape_9.setTransform(-90,137.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_10.setTransform(-95.4,138.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIADACIADABIAHgBIAAAFIgIABIgGgBg");
	this.shape_11.setTransform(-99.7,137.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_12.setTransform(-102.6,137.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcAWIAAgaIgBgEIgBgEIgEgDIgEgBQgEAAgCABQgDABgCADIgDAFIgBAFIAAAXIgFAAIAAgaIAAgEIgCgEIgDgDIgFgBQgEAAgCABIgFADIgDAGQgBADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAAAAIADgEIADgDIAFgCIAFgBIAFABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAEIACAEIADgEIADgEIAFgCIAGgBQAEAAACABQADACACACQACACAAADIABAHIAAAag");
	this.shape_13.setTransform(-108,138.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_14.setTransform(-113.4,137.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAhIAAhBIAGAAIAAA8IAhAAIAAAFg");
	this.shape_15.setTransform(-116.7,137.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-121.5,130,82.2,14.8), null);


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
	this.shape.graphics.bf(img.echo1, null, new cjs.Matrix2D(1,0,0,1,-64.6,-131.5)).s().p("AGbUjIgOgLIgagRQgSgPgJgGIgQgJIgQgJIgMgJIgngzQgLgRgVgiQgcgxgLgYIgUguIgdhEQgNgfgLgKQgMgMgQgEQgRgFgPAFQgIADgHAGIgHAEQgLALgFANQgDAMACANIgHAGIgUAbQgRATgTAFIggAHQghAIgNAdIgCAGQgSAOgOASQgKAOgIAEQgFAEgOACIgnACQgIACgFgDQgFgCgIgMQgUgZglgHQgSgEgiAAQgIgEgHgBQABghgEgfIgDgOQAIgFAFgJQAEgGACgIQAHgKADgMQAIgRgEgTQgDgTgMgQQgJgNgQgOIgcgaQgYgXgPgaIgUggQgGgLgUgXQgRgVgHgOIgNgZIgMgZQgSgfgagEIgFgBIgBgBQgDgDgCgFQgEgJgCgQQgEgSgDgHIgHgPQAIgYADgMIAFgjQACgMAGgTIAIgeIAIgoQAEgSAPgoQAOglAEgXQAIgrgUgXIgBgBIAJgMIALgQQAMgTAGggQAEgYgDgSQAGgKAAgOQAAgMgIgUQgLgZgCgIQgCgHgBgXQgCgUgFgKQgFgKgIgHQgCgVgDgbQgBgWgGgMQAcgPAIgTQAGgMgBgMIABgbIgBggQAEgMAEgGIAKgMIAKgMQAFgIAEgPIAHgXQAGgTAVgVQAPgQAEgHQALgQgBgSIADgFIACgDIAEgNQACgJgCgKQgCgJgFgGIgGgJIgKgKIADgIIACgaIADgRQACgLAAgXIAAgzIAAgJIAOgKIAPgNQAEgCAOgDIAdgLQAUgIAIgIQAKgIAEgQQACgJAAgIIgBgPQgCgSgIgYQgEgMgLgeQgVg7gEgmQgFg4AZgoQAHgMAQgSQARgUAHgJIAGgKIANgMQALgJAYgOIAcgYQASgPALgHIAbgQQARgIAJgGIABgBIClAAIATALIATAOQAMAJAIAFQAQAIARACQASACAPgIIAJgFQAFADAHABQAIACAHgEIAFgCQAYACAPgHIADgBIADADQALALAQACIABAAIACACQAGAGAIACIAKAMIgCADQgEAIACAIQACAJAGAFQALAIAQgDIAcgGIAHgBIAFAIQgBAFABAFQACAMAKAFQAMAFALgFIADgDQAUAHAYAAIASgBIAEAEQAMAKAOACQAOABASgGQAKgCAVgJIAVgIIAFgBIAAABIgCAFIgMASIgEACQgKAFgJAGIgBAAIgZADQgSACgLAHIgHABQgIgDgJgCIgFAAIgEgFQgGgGgJAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgHgBgGAFIgLgBIgWAAQgNABgIADQgFgCgGgBQgGAAgGACQgGgDgHABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgJAAgHAHQgGAFgBAIQgBAHADAGQAGAOAQACIAGAAIABABIACAAIABABIAIAEIAJAOQAGAMAFAFQAJAJASAFIAAABQAPAHAWAGIAbAGIADABIgFABQgMACgVgBIgfAAIgGAAQgLgJgQgKQgegUgJgJQgOgNgFgCQgIgCgIACIgCAAQgMgDgKALQgHAIAAAQQgBAKAEAJIAKAVIABADQgKALgCAPQgKAFgGAJQgJALAAAOQgCANAFAMIAAADQABAJAGASQAHATABAHIACAOIABAOIADAGIgBAAIgDALQgLABgIAGQgKAHgHALQgFAMAAAMQAAANAHALIAFAGIgGAEQgNAIgFARQgGAPAFAPIgEASIgEARQgIAEgFAFQgGAGgDAIQgJAIgFANQgGANADANQACATASARQAPANAXAJIAqAMQAZAHAPAIQAOAHAQANIAbAYQAdAaA6AnQBBAsAZAUIAqAjQAZAUATAMIAWALIAACpQgHgDgIgBQgNgBgMAGQgegIgYACIgGABIgIgDQgLgDgLACQgYAFgLAVQgIAOAAAYIAAAnQAAAQgIAhIAAAEIgJAKQgHAKgEAMIgDADQgJAKAAAPQABAQAJAKQAGAEAHACIAEABIAFAFIANANQAFAFAKAPQAJAOAGAGIARAOQALAIAEAGIALAVQALAVAdAUQApAdAIAIIAGAHIAAO4gAhyK5IAHAAIALAbIAQAYIAHAIIAAACIgGAUQgDANABAIQAAAQALAOQAKANARADQAOAEAQgGQAPgFAKgNQAQgVAAgkIAAgBQAHgEAFgLIACgBQAIgCAGgEQAIgHABgKQACgLgIgIIgFgDIgBgGIgCgFIgJgWIgnhNQgLgZgHgMIgUghQgbgqgPgPIgbgZQgrgmghglQgQgSgTgXIgCgEIgGgOIgHgJIAAgDQABgHgDgHQgEgHgGgEQgKgEgNAEQgOAFgFAKIgHACQgFADgDAFIgCAFQgHAGgFAJQgLAYAOAeQADAIALANIAAAPIADAaIAAAUQABALACAIIACAGQgBALAFAMQAEAKAMAUQAIAQAGAYIAGAqQABAKADAIQADANAJAIQACATAIAKIAFAGIgBAFQgBALACAJQABALAKAIQAFAEAIAAQAJAAAGgFQAFgEADgLQALAAALgKQAHgFAEgHQAKADANAAg");
	this.shape.setTransform(63.4,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo1_mc, new cjs.Rectangle(0,0,126.8,263), null);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,160,600), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(61.9,343.5,1.274,1.274,0,0,0,-80.3,137.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMCDIAAgTQgUgBgUgDQgUgDgPgGIADgoQAKAFAVAEQAWADATABIAAg5QgmgIgOgIQgMgIgGgKQgGgMgBgQQABgOAGgNQAGgKALgIQALgHAOgFQAMgEAQgCIAAgUIAaAAIAAATQAQABARADQATAEANAEIgCAoQgLgEgSgEQgSgDgQgBIAAA1IAbAGQAOAFAKAHQALAGAHAKQAGANAAAPQABAPgHANQgFALgLAJQgKAHgOAFQgNAFgQACIAAAUgAAOBHQAOgCAIgFQAJgHAAgKQAAgKgJgHQgIgGgOgDgAgjhAQgJAHAAAJQAAAJAJAHQAHAEAQAEIAAguQgOABgJAFg");
	this.shape.setTransform(-0.3,303.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AheDWQAZgUAqguQAegkAXgoQgXAFgeAAQgcAAgagKQgYgJgTgTQgTgTgLgYQgKgZAAgeQAAgYANgpQAIgTAagfQAXgUAegLQAUgHAugEQAZAAAqAMQAeALAWAWQAVAVAMAcQALAbAAAfQAAAfgLAmQgMAmgVAnQgUAlgaAkQgbAjgcAbgAgah+QgMAGgKAJQgJAJgEAMQgFANAAANQAAAOAFAMQAFAMAIAKQAKAJANAFQANAEAOAAQAPAAANgEQAMgFAJgJQAKgKAEgMQAFgMAAgOQAAgNgFgNQgEgMgKgJQgJgJgMgGQgNgFgPAAQgPAAgNAFg");
	this.shape_1.setTransform(101.3,311.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AheDWQAZgUAqguQAegkAXgoQgXAFgeAAQgcAAgagKQgYgJgTgTQgTgTgLgYQgKgZAAgeQAAgYANgpQAIgTAagfQAXgUAegLQAUgHAugEQAZAAAqAMQAeALAWAWQAVAVAMAcQALAbAAAfQAAAfgLAmQgMAmgVAnQgUAlgaAkQgbAjgcAbgAgah+QgMAGgKAJQgJAJgEAMQgFANAAANQAAAOAFAMQAFAMAIAKQAKAJANAFQANAEAOAAQAPAAANgEQAMgFAJgJQAKgKAEgMQAFgMAAgOQAAgNgFgNQgEgMgKgJQgJgJgMgGQgNgFgPAAQgPAAgNAFg");
	this.shape_2.setTransform(64.8,311.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhcDYQgjgFgdgHIAGhcQBeATAqAAIAegDQANgDAJgGQAKgGAEgJQAFgJAAgMQAAgQgIgKQgGgKgNgFQgTgJgiAAIhXAAIgChQIBiAAQAZAAARgIQAJgFAFgIQAHgJAAgMQgBgMgGgJQgGgIgLgEQgRgIgfAAQguAAhMARIgEhaIBAgMQAngFAgAAQAfAAAbAFQAeAGAWALQAZAMAMAUQAHAKAEAMQADANAAAOQAAATgFARQgGARgKAOQgLAOgPALQgPALgSAIIAAABQATAFAQAJQAQAKAMANQANAPAGARQAIASAAAVQAAAQgEAOQgFANgHAMQgOAVgbAPQgZANgiAHQgeAHghAAQgfAAgngFg");
	this.shape_3.setTransform(29.4,311.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-13.1,274.8,136.5,78.4), null);


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
(lib.oculus_echo_160x600_ER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("Au/SVIAAirId/AAIAACrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:85,y:117.3}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance = new lib.text1_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82.3,242.2,0.736,0.736);
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.3,226,0.736,0.736);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true,y:226},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},9).wait(57).to({startPosition:0},0).to({scaleX:1.52,scaleY:1.52,x:84.3,y:186.8},23,cjs.Ease.get(-1)).to({scaleX:2.45,scaleY:2.45,x:84.5,y:129,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("Au/TpIAAiqId/AAIAACqg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:85,y:125.7}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_2 = new lib.text2_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.3,259.2,0.736,0.736);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.5,192.6,2.453,2.453);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},54).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},52).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_3}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({y:242.2},9).wait(52).to({startPosition:0},0).to({scaleX:1.52,scaleY:1.52,x:84.3,y:220.8},23,cjs.Ease.get(-1)).to({_off:true,scaleX:2.45,scaleY:2.45,x:84.5,y:192.6,alpha:0},12).wait(61));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("Au/U+IAAirId/AAIAACrg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:85,y:134.2}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 13
	this.instance_4 = new lib.text3_mc("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(138.3,273.9,0.736,0.736,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.text3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(271,253.9,2.453,2.453);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},59).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_5}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({regY:0,y:259.9},9).wait(47).to({startPosition:0},0).to({regX:0,scaleX:1.52,scaleY:1.52,x:199.5,y:257},23,cjs.Ease.get(-1)).to({_off:true,scaleX:2.45,scaleY:2.45,x:271,y:253.9,alpha:0},12).wait(61));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AgpAqQgRgSAAgYQAAgXARgRQASgSAXAAQAYAAASASQARARAAAXQAAAYgRASQgSARgYAAQgXAAgSgRg");
	var mask_3_graphics_2 = new cjs.Graphics().p("AhqBsQgtguAAg+QAAg+AtgsQAsgtA+AAQA/AAAtAtQAsAsAAA+QAAA+gsAuQgtAsg/AAQg+AAgsgsg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AijCkQhEhEAAhgQAAhfBEhEQBEhEBfAAQBgAABEBEQBEBEAABfQAABghEBEQhEBEhgAAQhfAAhEhEg");
	var mask_3_graphics_4 = new cjs.Graphics().p("Aj+D/QhphqAAiVQAAiUBphpQBqhqCUAAQCVAABqBqQBpBpAACUQAACVhpBqQhqBpiVAAQiUAAhqhpg");
	var mask_3_graphics_5 = new cjs.Graphics().p("AlWFXQiPiOAAjJQAAjICPiOQCOiPDIAAQDJAACOCPQCPCOAADIQAADJiPCOQiOCPjJAAQjIAAiOiPg");
	var mask_3_graphics_6 = new cjs.Graphics().p("AnEHFQi8i8AAkJQAAkIC8i8QC8i8EIAAQEJAAC8C8QC8C8AAEIQAAEJi8C8Qi8C8kJAAQkIAAi8i8g");
	var mask_3_graphics_7 = new cjs.Graphics().p("ApcJdQj8j7ABliQgBlhD8j7QD6j8FiAAQFiAAD7D8QD8D7gBFhQABFij8D7Qj7D8liAAQliAAj6j8g");
	var mask_3_graphics_8 = new cjs.Graphics().p("ArnLoQk0k1AAmzQAAmyE0k1QE1k0GyAAQGzAAE1E0QE0E1AAGyQAAGzk0E1Qk1E0mzAAQmyAAk1k0g");
	var mask_3_graphics_9 = new cjs.Graphics().p("At/OAQl0l0ABoMQgBoLF0l0QFzl0IMAAQIMAAF0F0QFzF0AAILQAAIMlzF0Ql0F0oMAAQoMAAlzl0g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:91,y:270}).wait(2).to({graphics:mask_3_graphics_2,x:90.6,y:269.9}).wait(1).to({graphics:mask_3_graphics_3,x:91.1,y:270.9}).wait(1).to({graphics:mask_3_graphics_4,x:90.6,y:271.6}).wait(1).to({graphics:mask_3_graphics_5,x:90.5,y:272.9}).wait(1).to({graphics:mask_3_graphics_6,x:90.6,y:272.9}).wait(1).to({graphics:mask_3_graphics_7,x:89.6,y:275.4}).wait(1).to({graphics:mask_3_graphics_8,x:89,y:276.8}).wait(1).to({graphics:mask_3_graphics_9,x:89.7,y:279.3}).wait(1).to({graphics:null,x:0,y:0}).wait(201));

	// star trek
	this.instance_6 = new lib.game_startrek();
	this.instance_6.parent = this;
	this.instance_6.setTransform(91.3,271,0.067,0.067,0,0,0,65.5,65.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:2.32,scaleY:2.32,x:342.4,y:766.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(173));

	// unspoken
	this.instance_7 = new lib.game_unspoken();
	this.instance_7.parent = this;
	this.instance_7.setTransform(90.4,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// lone echo
	this.instance_8 = new lib.game_loneecho();
	this.instance_8.parent = this;
	this.instance_8.setTransform(90.7,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(167));

	// roborecall
	this.instance_9 = new lib.game_roborecall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-51.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(164));

	// superhot
	this.instance_10 = new lib.game_superhot();
	this.instance_10.parent = this;
	this.instance_10.setTransform(90.9,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:317.6,y:360},37,cjs.Ease.get(-1)).to({_off:true},1).wait(161));

	// rick morty
	this.instance_11 = new lib.game_rickmorty();
	this.instance_11.parent = this;
	this.instance_11.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(158));

	// wilsons
	this.instance_12 = new lib.game_wilsons();
	this.instance_12.parent = this;
	this.instance_12.setTransform(90.6,271.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},37,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// Layer 1 copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_31 = new cjs.Graphics().p("AE6UfIBuAAIAABbIhuAAg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AEBTwIC6AAIAACZIi6AAg");
	var mask_4_graphics_33 = new cjs.Graphics().p("ADJTCIEEAAIAADWIkEAAg");
	var mask_4_graphics_34 = new cjs.Graphics().p("ACQSUIFQAAIAAEUIlQAAg");
	var mask_4_graphics_35 = new cjs.Graphics().p("ABXRlIGbAAIAAFSImbAAg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AAfQ3IHlAAIAAGPInlAAg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AgZQJIIwAAIAAHMIowAAg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AhRPbIJ6AAIAAIKIp6AAg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AiKOsILFAAIAAJIIrFAAg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AjCN+IMQAAIAAKFIsQAAg");
	var mask_4_graphics_41 = new cjs.Graphics().p("Aj7NQINbAAIAALCItbAAg");
	var mask_4_graphics_42 = new cjs.Graphics().p("AkzMhIOlAAIAAMBIulAAg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AlsLzIPxAAIAAM+IvxAAg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AmkLFIQ7AAIAAN7Iw7AAg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AndKXISGAAIAAO4IyGAAg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AoWJoITSAAIAAP3IzSAAg");
	var mask_4_graphics_47 = new cjs.Graphics().p("ApOI6IUcAAIAAQ0I0cAAg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AqHIMIVnAAIAARxI1nAAg");
	var mask_4_graphics_49 = new cjs.Graphics().p("Aq/HdIWyAAIAASvI2yAAg");
	var mask_4_graphics_50 = new cjs.Graphics().p("Ar4GvIX9AAIAATtI39AAg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AsjGEIZHAAIAAUqI5HAAg");
	var mask_4_graphics_52 = new cjs.Graphics().p("AslGCIZLAAIAAUtI5LAAg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AsmGBIZNAAIAAUuI5NAAg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AsnF/IZPAAIAAUwI5PAAg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AsoF+IZRAAIAAUyI5RAAg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AspF8IZTAAIAAU0I5TAAg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AsrF7IZXAAIAAU2I5XAAg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AssF5IZZAAIAAU4I5ZAAg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AstF4IZbAAIAAU6I5bAAg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AsuF2IZdAAIAAU8I5dAAg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AswF1IZhAAIAAU+I5hAAg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AsxFzIZjAAIAAVAI5jAAg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AsyFyIZlAAIAAVCI5lAAg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AszFwIZnAAIAAVEI5nAAg");
	var mask_4_graphics_65 = new cjs.Graphics().p("As0FvIZpAAIAAVGI5pAAg");
	var mask_4_graphics_66 = new cjs.Graphics().p("As2FtIZtAAIAAVII5tAAg");
	var mask_4_graphics_67 = new cjs.Graphics().p("As3FrIZvAAIAAVLI5vAAg");
	var mask_4_graphics_68 = new cjs.Graphics().p("As4FqIZxAAIAAVMI5xAAg");
	var mask_4_graphics_69 = new cjs.Graphics().p("As5FoIZzAAIAAVPI5zAAg");
	var mask_4_graphics_70 = new cjs.Graphics().p("As7FnIZ3AAIAAVQI53AAg");
	var mask_4_graphics_71 = new cjs.Graphics().p("As8FlIZ5AAIAAVTI55AAg");
	var mask_4_graphics_72 = new cjs.Graphics().p("As9FkIZ7AAIAAVUI57AAg");
	var mask_4_graphics_73 = new cjs.Graphics().p("As+FiIZ9AAIAAVXI59AAg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AtAFhIaBAAIAAVYI6BAAg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AtBFfIaDAAIAAVbI6DAAg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AtCFeIaFAAIAAVcI6FAAg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AtDFcIaHAAIAAVfI6HAAg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AtEFbIaJAAIAAVgI6JAAg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AtGFZIaNAAIAAVjI6NAAg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AtHFYIaPAAIAAVkI6PAAg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AtIFWIaRAAIAAVnI6RAAg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AtJFVIaTAAIAAVoI6TAAg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AtLFTIaXAAIAAVrI6XAAg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AtMFRIaZAAIAAVtI6ZAAg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AtNFQIabAAIAAVvI6bAAg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AtOFOIadAAIAAVxI6dAAg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AtQFNIahAAIAAVzI6hAAg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AtRFLIajAAIAAV1I6jAAg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AtSFKIalAAIAAV3I6lAAg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AtTFIIanAAIAAV5I6nAAg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AtUFHIapAAIAAV7I6pAAg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AtWFFIatAAIAAV9I6tAAg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AtXFEIavAAIAAV/I6vAAg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AtYFCIaxAAIAAWBI6xAAg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AtZFBIazAAIAAWCI6zAAg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AtbE/Ia3AAIAAWFI63AAg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AtcE+Ia5AAIAAWGI65AAg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AtdE8Ia7AAIAAWJI67AAg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AteE6Ia9AAIAAWLI69AAg");
	var mask_4_graphics_100 = new cjs.Graphics().p("AtfE5Ia/AAIAAWNI6/AAg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AthE3IbDAAIAAWPI7DAAg");
	var mask_4_graphics_102 = new cjs.Graphics().p("AtiE2IbFAAIAAWRI7FAAg");
	var mask_4_graphics_103 = new cjs.Graphics().p("AtjE0IbHAAIAAWTI7HAAg");
	var mask_4_graphics_104 = new cjs.Graphics().p("AtkEzIbJAAIAAWVI7JAAg");
	var mask_4_graphics_105 = new cjs.Graphics().p("AtmExIbNAAIAAWXI7NAAg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AtnEwIbPAAIAAWZI7PAAg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AtoEuIbRAAIAAWbI7RAAg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AtpEtIbTAAIAAWdI7TAAg");
	var mask_4_graphics_109 = new cjs.Graphics().p("AtrErIbXAAIAAWfI7XAAg");
	var mask_4_graphics_110 = new cjs.Graphics().p("AtsEqIbZAAIAAWhI7ZAAg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AttEoIbbAAIAAWjI7bAAg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AtuEnIbdAAIAAWlI7dAAg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AtvElIbfAAIAAWnI7fAAg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AtxEkIbjAAIAAWpI7jAAg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AtyEjIblAAIAAWrI7lAAg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AtzEiIbnAAIAAWsI7nAAg");
	var mask_4_graphics_117 = new cjs.Graphics().p("At1EfIbrAAIAAWwI7rAAg");
	var mask_4_graphics_118 = new cjs.Graphics().p("At4EaIbxAAIAAW2I7xAAg");
	var mask_4_graphics_119 = new cjs.Graphics().p("At+EUIb9AAIAAW/I79AAg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AuEEMIcJAAIAAXJI8JAAg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AuMECIcZAAIAAXWI8ZAAg");
	var mask_4_graphics_122 = new cjs.Graphics().p("AuWD2IctAAIAAXmI8tAAg");
	var mask_4_graphics_123 = new cjs.Graphics().p("AugDpIdBAAIAAX4I9BAAg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AutDaIdbAAIAAYMI9bAAg");
	var mask_4_graphics_125 = new cjs.Graphics().p("Au7DIId3AAIAAYjI93AAg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AvKC2IeVAAIAAY7I+VAAg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AvbChIe3AAIAAZXI+3AAg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AvtCKIfbAAIAAZ1I/bAAg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AwAByMAgBAAAIAAaVMggBAAAg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AwVBYMAgrAAAIAAa4MggrAAAg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AwsA8MAhZAAAIAAbdMghZAAAg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AxEAeMAiJAAAIAAcFMgiJAAAg");
	var mask_4_graphics_133 = new cjs.Graphics().p("AxdAAMAi7AAAIAActMgi7AAAg");
	var mask_4_graphics_134 = new cjs.Graphics().p("Ax4giMAjxAAAIAAdaMgjxAAAg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AyVhFMAkrAAAIAAeIMgkrAAAg");
	var mask_4_graphics_136 = new cjs.Graphics().p("AyyhqMAllAAAIAAe5MgllAAAg");
	var mask_4_graphics_137 = new cjs.Graphics().p("AzSiRMAmlAAAIAAftMgmlAAAg");
	var mask_4_graphics_138 = new cjs.Graphics().p("Azyi5MAnlAAAMAAAAgiMgnlAAAg");
	var mask_4_graphics_139 = new cjs.Graphics().p("A0VjkMAorAAAMAAAAhbMgorAAAg");
	var mask_4_graphics_140 = new cjs.Graphics().p("A04kQMApxAAAMAAAAiVMgpxAAAg");
	var mask_4_graphics_141 = new cjs.Graphics().p("A1dk+MAq7AAAMAAAAjSMgq7AAAg");
	var mask_4_graphics_142 = new cjs.Graphics().p("A2EluMAsJAAAMAAAAkRMgsJAAAg");
	var mask_4_graphics_143 = new cjs.Graphics().p("A2tmiMAtbAAAMAAAAlVMgtbAAAg");
	var mask_4_graphics_144 = new cjs.Graphics().p("A3WnWMAutAAAMAAAAmZMgutAAAg");
	var mask_4_graphics_145 = new cjs.Graphics().p("A4AoJMAwBAAAMAAAAncMgwBAAAg");
	var mask_4_graphics_146 = new cjs.Graphics().p("A4po9MAxTAAAMAAAAogMgxTAAAg");
	var mask_4_graphics_147 = new cjs.Graphics().p("A5SpxMAylAAAMAAAApkMgylAAAg");
	var mask_4_graphics_148 = new cjs.Graphics().p("A58qlMAz5AAAMAAAAqoMgz5AAAg");
	var mask_4_graphics_149 = new cjs.Graphics().p("A6lrZMA1LAAAMAAAArtMg1LAAAg");
	var mask_4_graphics_150 = new cjs.Graphics().p("A7OsNMA2dAAAMAAAAsxMg2dAAAg");
	var mask_4_graphics_151 = new cjs.Graphics().p("A73tBMA3vAAAMAAAAt1Mg3vAAAg");
	var mask_4_graphics_152 = new cjs.Graphics().p("A8ht0MA5DAAAMAAAAu4Mg5DAAAg");
	var mask_4_graphics_153 = new cjs.Graphics().p("A9KuoMA6VAAAMAAAAv8Mg6VAAAg");
	var mask_4_graphics_154 = new cjs.Graphics().p("A9zvcMA7nAAAMAAAAxAMg7nAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_4_graphics_31,x:42.4,y:140.2}).wait(1).to({graphics:mask_4_graphics_32,x:44.3,y:141.7}).wait(1).to({graphics:mask_4_graphics_33,x:46.1,y:143.2}).wait(1).to({graphics:mask_4_graphics_34,x:48,y:144.8}).wait(1).to({graphics:mask_4_graphics_35,x:49.8,y:146.3}).wait(1).to({graphics:mask_4_graphics_36,x:51.6,y:147.8}).wait(1).to({graphics:mask_4_graphics_37,x:53.5,y:149.3}).wait(1).to({graphics:mask_4_graphics_38,x:55.3,y:150.9}).wait(1).to({graphics:mask_4_graphics_39,x:57.1,y:152.4}).wait(1).to({graphics:mask_4_graphics_40,x:59,y:153.9}).wait(1).to({graphics:mask_4_graphics_41,x:60.8,y:155.4}).wait(1).to({graphics:mask_4_graphics_42,x:62.6,y:157}).wait(1).to({graphics:mask_4_graphics_43,x:64.5,y:158.5}).wait(1).to({graphics:mask_4_graphics_44,x:66.3,y:160}).wait(1).to({graphics:mask_4_graphics_45,x:68.1,y:161.5}).wait(1).to({graphics:mask_4_graphics_46,x:70,y:163.1}).wait(1).to({graphics:mask_4_graphics_47,x:71.8,y:164.6}).wait(1).to({graphics:mask_4_graphics_48,x:73.6,y:166.1}).wait(1).to({graphics:mask_4_graphics_49,x:75.5,y:167.6}).wait(1).to({graphics:mask_4_graphics_50,x:77.3,y:169.2}).wait(1).to({graphics:mask_4_graphics_51,x:79.3,y:171}).wait(1).to({graphics:mask_4_graphics_52,x:79.3,y:171.1}).wait(1).to({graphics:mask_4_graphics_53,x:79.3,y:171.1}).wait(1).to({graphics:mask_4_graphics_54,x:79.3,y:171.1}).wait(1).to({graphics:mask_4_graphics_55,x:79.3,y:171.2}).wait(1).to({graphics:mask_4_graphics_56,x:79.3,y:171.2}).wait(1).to({graphics:mask_4_graphics_57,x:79.3,y:171.3}).wait(1).to({graphics:mask_4_graphics_58,x:79.3,y:171.3}).wait(1).to({graphics:mask_4_graphics_59,x:79.3,y:171.4}).wait(1).to({graphics:mask_4_graphics_60,x:79.3,y:171.4}).wait(1).to({graphics:mask_4_graphics_61,x:79.3,y:171.5}).wait(1).to({graphics:mask_4_graphics_62,x:79.3,y:171.5}).wait(1).to({graphics:mask_4_graphics_63,x:79.3,y:171.6}).wait(1).to({graphics:mask_4_graphics_64,x:79.3,y:171.6}).wait(1).to({graphics:mask_4_graphics_65,x:79.3,y:171.7}).wait(1).to({graphics:mask_4_graphics_66,x:79.3,y:171.7}).wait(1).to({graphics:mask_4_graphics_67,x:79.3,y:171.8}).wait(1).to({graphics:mask_4_graphics_68,x:79.3,y:171.8}).wait(1).to({graphics:mask_4_graphics_69,x:79.3,y:171.9}).wait(1).to({graphics:mask_4_graphics_70,x:79.3,y:171.9}).wait(1).to({graphics:mask_4_graphics_71,x:79.3,y:172}).wait(1).to({graphics:mask_4_graphics_72,x:79.3,y:172}).wait(1).to({graphics:mask_4_graphics_73,x:79.3,y:172.1}).wait(1).to({graphics:mask_4_graphics_74,x:79.3,y:172.1}).wait(1).to({graphics:mask_4_graphics_75,x:79.3,y:172.2}).wait(1).to({graphics:mask_4_graphics_76,x:79.3,y:172.2}).wait(1).to({graphics:mask_4_graphics_77,x:79.3,y:172.3}).wait(1).to({graphics:mask_4_graphics_78,x:79.3,y:172.3}).wait(1).to({graphics:mask_4_graphics_79,x:79.3,y:172.4}).wait(1).to({graphics:mask_4_graphics_80,x:79.3,y:172.4}).wait(1).to({graphics:mask_4_graphics_81,x:79.3,y:172.5}).wait(1).to({graphics:mask_4_graphics_82,x:79.3,y:172.5}).wait(1).to({graphics:mask_4_graphics_83,x:79.3,y:172.6}).wait(1).to({graphics:mask_4_graphics_84,x:79.3,y:172.6}).wait(1).to({graphics:mask_4_graphics_85,x:79.3,y:172.7}).wait(1).to({graphics:mask_4_graphics_86,x:79.3,y:172.7}).wait(1).to({graphics:mask_4_graphics_87,x:79.3,y:172.8}).wait(1).to({graphics:mask_4_graphics_88,x:79.3,y:172.8}).wait(1).to({graphics:mask_4_graphics_89,x:79.3,y:172.9}).wait(1).to({graphics:mask_4_graphics_90,x:79.3,y:172.9}).wait(1).to({graphics:mask_4_graphics_91,x:79.3,y:173}).wait(1).to({graphics:mask_4_graphics_92,x:79.3,y:173}).wait(1).to({graphics:mask_4_graphics_93,x:79.3,y:173.1}).wait(1).to({graphics:mask_4_graphics_94,x:79.4,y:173.1}).wait(1).to({graphics:mask_4_graphics_95,x:79.4,y:173.1}).wait(1).to({graphics:mask_4_graphics_96,x:79.4,y:173.2}).wait(1).to({graphics:mask_4_graphics_97,x:79.4,y:173.2}).wait(1).to({graphics:mask_4_graphics_98,x:79.4,y:173.3}).wait(1).to({graphics:mask_4_graphics_99,x:79.4,y:173.3}).wait(1).to({graphics:mask_4_graphics_100,x:79.4,y:173.4}).wait(1).to({graphics:mask_4_graphics_101,x:79.4,y:173.4}).wait(1).to({graphics:mask_4_graphics_102,x:79.4,y:173.5}).wait(1).to({graphics:mask_4_graphics_103,x:79.4,y:173.5}).wait(1).to({graphics:mask_4_graphics_104,x:79.4,y:173.6}).wait(1).to({graphics:mask_4_graphics_105,x:79.4,y:173.6}).wait(1).to({graphics:mask_4_graphics_106,x:79.4,y:173.7}).wait(1).to({graphics:mask_4_graphics_107,x:79.4,y:173.7}).wait(1).to({graphics:mask_4_graphics_108,x:79.4,y:173.8}).wait(1).to({graphics:mask_4_graphics_109,x:79.4,y:173.8}).wait(1).to({graphics:mask_4_graphics_110,x:79.4,y:173.9}).wait(1).to({graphics:mask_4_graphics_111,x:79.4,y:173.9}).wait(1).to({graphics:mask_4_graphics_112,x:79.4,y:174}).wait(1).to({graphics:mask_4_graphics_113,x:79.4,y:174}).wait(1).to({graphics:mask_4_graphics_114,x:79.4,y:174.1}).wait(1).to({graphics:mask_4_graphics_115,x:79.4,y:174.2}).wait(1).to({graphics:mask_4_graphics_116,x:79.4,y:174.2}).wait(1).to({graphics:mask_4_graphics_117,x:79.4,y:174.3}).wait(1).to({graphics:mask_4_graphics_118,x:79.4,y:174.4}).wait(1).to({graphics:mask_4_graphics_119,x:79.4,y:174.7}).wait(1).to({graphics:mask_4_graphics_120,x:79.4,y:174.9}).wait(1).to({graphics:mask_4_graphics_121,x:79.4,y:175.2}).wait(1).to({graphics:mask_4_graphics_122,x:79.5,y:175.6}).wait(1).to({graphics:mask_4_graphics_123,x:79.5,y:176.1}).wait(1).to({graphics:mask_4_graphics_124,x:79.5,y:176.6}).wait(1).to({graphics:mask_4_graphics_125,x:79.5,y:177.1}).wait(1).to({graphics:mask_4_graphics_126,x:79.5,y:177.7}).wait(1).to({graphics:mask_4_graphics_127,x:79.6,y:178.4}).wait(1).to({graphics:mask_4_graphics_128,x:79.6,y:179.1}).wait(1).to({graphics:mask_4_graphics_129,x:79.6,y:179.9}).wait(1).to({graphics:mask_4_graphics_130,x:79.6,y:180.8}).wait(1).to({graphics:mask_4_graphics_131,x:79.7,y:181.7}).wait(1).to({graphics:mask_4_graphics_132,x:79.7,y:182.7}).wait(1).to({graphics:mask_4_graphics_133,x:79.8,y:183.7}).wait(1).to({graphics:mask_4_graphics_134,x:79.8,y:184.8}).wait(1).to({graphics:mask_4_graphics_135,x:79.8,y:185.9}).wait(1).to({graphics:mask_4_graphics_136,x:79.9,y:187.1}).wait(1).to({graphics:mask_4_graphics_137,x:79.9,y:188.4}).wait(1).to({graphics:mask_4_graphics_138,x:80,y:189.7}).wait(1).to({graphics:mask_4_graphics_139,x:80,y:191.1}).wait(1).to({graphics:mask_4_graphics_140,x:80.1,y:192.5}).wait(1).to({graphics:mask_4_graphics_141,x:80.1,y:194}).wait(1).to({graphics:mask_4_graphics_142,x:80.2,y:195.5}).wait(1).to({graphics:mask_4_graphics_143,x:80.2,y:197.1}).wait(1).to({graphics:mask_4_graphics_144,x:80.2,y:198.7}).wait(1).to({graphics:mask_4_graphics_145,x:80.2,y:200.3}).wait(1).to({graphics:mask_4_graphics_146,x:80.1,y:201.9}).wait(1).to({graphics:mask_4_graphics_147,x:80.1,y:203.5}).wait(1).to({graphics:mask_4_graphics_148,x:80.1,y:205.1}).wait(1).to({graphics:mask_4_graphics_149,x:80.1,y:206.8}).wait(1).to({graphics:mask_4_graphics_150,x:80.1,y:208.4}).wait(1).to({graphics:mask_4_graphics_151,x:80.1,y:210}).wait(1).to({graphics:mask_4_graphics_152,x:80,y:211.6}).wait(1).to({graphics:mask_4_graphics_153,x:80,y:213.2}).wait(1).to({graphics:mask_4_graphics_154,x:80,y:214.8}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_13 = new lib.echo3_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(79.8,278.3,0.034,0.034,0,0,0,158.5,22.2);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({_off:false},0).to({regX:156,regY:18.1,scaleX:0.46,scaleY:0.46,x:83,y:330.5},20).wait(64).to({regX:155.8,regY:18.2,scaleX:0.78,scaleY:0.78,x:82.9,y:350.1},27,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,y:360.4,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_14 = new lib.echo1_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(82.9,275.9,0.035,0.035,0,0,0,67.8,132.8);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({_off:false},0).to({regX:63.6,regY:131.6,scaleX:0.5,scaleY:0.5,x:128.2,y:275.8},20).to({scaleX:0.55,scaleY:0.55,rotation:4.7,x:138.6,y:275.7},64).to({regY:131.4,scaleX:0.88,scaleY:0.88,rotation:12.8,x:188,y:250.3},27,cjs.Ease.get(-1)).to({regY:131.2,scaleX:1.19,scaleY:1.19,rotation:27,x:218.4,y:222.7,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_15 = new lib.echo2_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(77.3,276.5,0.035,0.035,0,0,0,99.5,114);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({_off:false},0).to({regX:97.4,regY:113.9,scaleX:0.5,scaleY:0.5,x:48.9,y:284.7},20).to({regX:97.2,regY:114,scaleX:0.55,scaleY:0.55,rotation:-3.2,x:33.9,y:286},64).to({regY:113.9,scaleX:0.88,scaleY:0.88,rotation:-1.2,x:-32,y:299.3},27,cjs.Ease.get(-1)).to({scaleX:1.19,scaleY:1.19,rotation:-1.2,x:-88.6,y:307.2,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,31.6,0,-31.7).s().p("Ar2E9IAAp5IXtAAIAAJ5g");
	this.shape.setTransform(80.1,244);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],0,34.6,0,-34.6).s().p("Ar+FaIAAqzIX9AAIAAKzg");
	this.shape_1.setTransform(80.2,246.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],0,37.5,0,-37.6).s().p("AsGF4IAArvIYNAAIAALvg");
	this.shape_2.setTransform(80.2,249.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],-0.1,40.4,-0.1,-40.6).s().p("AsNGVIAAspIYcAAIAAMpg");
	this.shape_3.setTransform(80.3,252.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],0,43.4,0,-43.6).s().p("AsVGzIAAtlIYrAAIAANlg");
	this.shape_4.setTransform(80.3,255.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],0,46.4,0,-46.5).s().p("AsdHRIAAuhIY7AAIAAOhg");
	this.shape_5.setTransform(80.4,258.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],0,49.3,0,-49.5).s().p("AslHuIAAvbIZLAAIAAPbg");
	this.shape_6.setTransform(80.4,261.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],-0.1,52.3,-0.1,-52.4).s().p("AstIMIAAwXIZbAAIAAQXg");
	this.shape_7.setTransform(80.5,264.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],-0.1,55.2,-0.1,-55.4).s().p("As1IpIAAxRIZrAAIAARRg");
	this.shape_8.setTransform(80.5,267.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],-0.1,58.1,-0.1,-58.4).s().p("As9JHIAAyNIZ7AAIAASNg");
	this.shape_9.setTransform(80.6,270.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],-0.1,61.1,-0.1,-61.3).s().p("AtFJlIAAzJIaLAAIAATJg");
	this.shape_10.setTransform(80.6,273.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],-0.1,64.1,-0.1,-64.3).s().p("AtNKCIAA0DIabAAIAAUDg");
	this.shape_11.setTransform(80.7,276.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,67,-0.1,-67.3).s().p("AtVKgIAA0/IarAAIAAU/g");
	this.shape_12.setTransform(80.7,279.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,67.2,-0.1,-67.4).s().p("AtUKhIAA1BIapAAIAAVBg");
	this.shape_13.setTransform(80.7,279.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,67.3,-0.1,-67.6).s().p("AtUKjIAA1FIapAAIAAVFg");
	this.shape_14.setTransform(80.7,279.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,67.5,-0.1,-67.8).s().p("AtUKlIAA1JIapAAIAAVJg");
	this.shape_15.setTransform(80.7,279.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,67.6,-0.1,-68).s().p("AtTKnIAA1MIanAAIAAVMg");
	this.shape_16.setTransform(80.7,279.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,67.9,-0.1,-68.1).s().p("AtSKoIAA1PIalAAIAAVPg");
	this.shape_17.setTransform(80.7,279.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,68,-0.1,-68.3).s().p("AtSKqIAA1TIalAAIAAVTg");
	this.shape_18.setTransform(80.7,279.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,68.2,-0.1,-68.4).s().p("AtSKsIAA1XIakAAIAAVXg");
	this.shape_19.setTransform(80.7,279);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,68.3,-0.1,-68.7).s().p("AtRKtIAA1ZIajAAIAAVZg");
	this.shape_20.setTransform(80.7,279);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,68.5,-0.1,-68.8).s().p("AtRKvIAA1dIaiAAIAAVdg");
	this.shape_21.setTransform(80.7,278.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,68.7,-0.1,-69).s().p("AtQKxIAA1gIahAAIAAVgg");
	this.shape_22.setTransform(80.7,278.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,68.9,-0.1,-69.1).s().p("AtQKyIAA1jIahAAIAAVjg");
	this.shape_23.setTransform(80.6,278.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,69,-0.1,-69.3).s().p("AtPK0IAA1nIafAAIAAVng");
	this.shape_24.setTransform(80.6,278.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,69.2,-0.1,-69.5).s().p("AtOK2IAA1rIadAAIAAVrg");
	this.shape_25.setTransform(80.6,278.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,69.3,-0.1,-69.7).s().p("AtOK3IAA1tIadAAIAAVtg");
	this.shape_26.setTransform(80.6,278.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,69.6,-0.1,-69.8).s().p("AtOK5IAA1xIadAAIAAVxg");
	this.shape_27.setTransform(80.6,278.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,69.7,-0.1,-70).s().p("AtNK7IAA11IabAAIAAV1g");
	this.shape_28.setTransform(80.6,278.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,69.9,-0.1,-70.2).s().p("AtNK9IAA14IabAAIAAV4g");
	this.shape_29.setTransform(80.6,278.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.1,-0.1,-70.3).s().p("AtMK+IAA17IaZAAIAAV7g");
	this.shape_30.setTransform(80.6,278.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.2,-0.1,-70.5).s().p("AtMLAIAA1/IaZAAIAAV/g");
	this.shape_31.setTransform(80.5,278.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.4,-0.1,-70.7).s().p("AtLLCIAA2DIaXAAIAAWDg");
	this.shape_32.setTransform(80.5,278.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.5,-0.1,-70.9).s().p("AtLLEIAA2GIaXAAIAAWGg");
	this.shape_33.setTransform(80.5,278);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.7,-0.1,-71).s().p("AtKLFIAA2JIaVAAIAAWJg");
	this.shape_34.setTransform(80.5,277.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.9,-0.1,-71.2).s().p("AtKLHIAA2NIaVAAIAAWNg");
	this.shape_35.setTransform(80.5,277.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,71,-0.1,-71.4).s().p("AtKLIIAA2PIaVAAIAAWPg");
	this.shape_36.setTransform(80.5,277.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,71.2,-0.1,-71.5).s().p("AtJLKIAA2TIaTAAIAAWTg");
	this.shape_37.setTransform(80.5,277.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,71.4,-0.1,-71.7).s().p("AtJLMIAA2XIaSAAIAAWXg");
	this.shape_38.setTransform(80.5,277.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,71.5,-0.1,-71.9).s().p("AtILNIAA2ZIaRAAIAAWZg");
	this.shape_39.setTransform(80.5,277.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,71.8,-0.1,-72).s().p("AtILPIAA2dIaRAAIAAWdg");
	this.shape_40.setTransform(80.5,277.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,71.9,-0.1,-72.2).s().p("AtHLRIAA2hIaPAAIAAWhg");
	this.shape_41.setTransform(80.5,277.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,72.1,-0.1,-72.4).s().p("AtHLSIAA2jIaPAAIAAWjg");
	this.shape_42.setTransform(80.5,277.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,72.2,-0.1,-72.6).s().p("AtGLUIAA2nIaNAAIAAWng");
	this.shape_43.setTransform(80.4,277.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,72.4,-0.1,-72.7).s().p("AtGLWIAA2rIaNAAIAAWrg");
	this.shape_44.setTransform(80.4,277.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,72.6,-0.1,-72.9).s().p("AtFLYIAA2vIaLAAIAAWvg");
	this.shape_45.setTransform(80.4,277.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,72.7,-0.1,-73.1).s().p("AtFLaIAA2yIaLAAIAAWyg");
	this.shape_46.setTransform(80.4,277.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,72.9,-0.1,-73.2).s().p("AtELbIAA21IaJAAIAAW1g");
	this.shape_47.setTransform(80.4,277);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,73.1,-0.1,-73.4).s().p("AtELdIAA25IaJAAIAAW5g");
	this.shape_48.setTransform(80.4,276.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,73.3,-0.1,-73.6).s().p("AtDLeIAA28IaHAAIAAW8g");
	this.shape_49.setTransform(80.4,276.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,73.4,-0.1,-73.7).s().p("AtDLgIAA2/IaHAAIAAW/g");
	this.shape_50.setTransform(80.4,276.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,73.6,-0.1,-73.9).s().p("AtDLiIAA3DIaGAAIAAXDg");
	this.shape_51.setTransform(80.4,276.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,73.8,-0.1,-74.1).s().p("AtCLkIAA3HIaFAAIAAXHg");
	this.shape_52.setTransform(80.4,276.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,73.9,-0.1,-74.3).s().p("AtBLmIAA3KIaEAAIAAXKg");
	this.shape_53.setTransform(80.4,276.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,74.1,-0.1,-74.4).s().p("AtBLnIAA3NIaDAAIAAXNg");
	this.shape_54.setTransform(80.3,276.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,74.3,-0.1,-74.6).s().p("AtBLpIAA3RIaCAAIAAXRg");
	this.shape_55.setTransform(80.3,276.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,74.4,-0.1,-74.8).s().p("AtALqIAA3UIaBAAIAAXUg");
	this.shape_56.setTransform(80.3,276.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,74.6,-0.1,-74.9).s().p("AtALsIAA3XIaAAAIAAXXg");
	this.shape_57.setTransform(80.3,276.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,74.8,-0.1,-75.1).s().p("As/LuIAA3bIZ/AAIAAXbg");
	this.shape_58.setTransform(80.3,276.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,74.9,-0.1,-75.3).s().p("As/LwIAA3eIZ/AAIAAXeg");
	this.shape_59.setTransform(80.3,276.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,75.1,-0.1,-75.5).s().p("As+LxIAA3hIZ9AAIAAXhg");
	this.shape_60.setTransform(80.3,276);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,75.3,-0.1,-75.6).s().p("As+LzIAA3lIZ9AAIAAXlg");
	this.shape_61.setTransform(80.3,276);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,75.4,-0.1,-75.8).s().p("As9L0IAA3nIZ7AAIAAXng");
	this.shape_62.setTransform(80.3,275.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,75.6,-0.1,-76).s().p("As9L2IAA3rIZ7AAIAAXrg");
	this.shape_63.setTransform(80.2,275.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,75.7,-0.1,-76.2).s().p("As8L4IAA3vIZ5AAIAAXvg");
	this.shape_64.setTransform(80.2,275.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,76,-0.1,-76.3).s().p("As8L6IAA3zIZ5AAIAAXzg");
	this.shape_65.setTransform(80.2,275.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,77.6,-0.1,-77.9).s().p("As/MKIAA4TIZ/AAIAAYTg");
	this.shape_66.setTransform(80.4,275.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,79.2,-0.1,-79.6).s().p("AtCMaIAA4zIaFAAIAAYzg");
	this.shape_67.setTransform(80.5,275.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,80.8,-0.1,-81.2).s().p("AtGMrIAA5VIaNAAIAAZVg");
	this.shape_68.setTransform(80.7,275.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,82.5,-0.1,-82.8).s().p("AtJM7IAA51IaTAAIAAZ1g");
	this.shape_69.setTransform(80.8,275.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,84.1,-0.1,-84.4).s().p("AtNNLIAA6VIabAAIAAaVg");
	this.shape_70.setTransform(81,275.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,85.7,-0.1,-86.1).s().p("AtQNcIAA63IahAAIAAa3g");
	this.shape_71.setTransform(81.1,275.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,87.3,-0.1,-87.8).s().p("AtTNsIAA7XIanAAIAAbXg");
	this.shape_72.setTransform(81.3,275.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,88.9,-0.1,-89.4).s().p("AtWN8IAA73IatAAIAAb3g");
	this.shape_73.setTransform(81.4,275.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,90.6,-0.1,-91).s().p("AtaOMIAA8XIa1AAIAAcXg");
	this.shape_74.setTransform(81.6,275.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,92.2,-0.1,-92.6).s().p("AtdOdIAA85Ia7AAIAAc5g");
	this.shape_75.setTransform(81.7,275.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,93.8,-0.1,-94.3).s().p("AtgOtIAA9ZIbBAAIAAdZg");
	this.shape_76.setTransform(81.9,275.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,95.4,-0.1,-95.9).s().p("AtkO9IAA95IbJAAIAAd5g");
	this.shape_77.setTransform(82,275.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,97.1,-0.1,-97.5).s().p("AtnPOIAA+bIbPAAIAAebg");
	this.shape_78.setTransform(82.2,275.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,98.7,-0.1,-99.2).s().p("AtqPeIAA+7IbVAAIAAe7g");
	this.shape_79.setTransform(82.3,275.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,100.3,-0.1,-100.8).s().p("AtuPuIAA/bIbdAAIAAfbg");
	this.shape_80.setTransform(82.4,275.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,102,-0.1,-102.4).s().p("AtxP+IAA/7IbjAAIAAf7g");
	this.shape_81.setTransform(82.6,275.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,103.6,-0.1,-104).s().p("At0QPMAAAggdIbpAAMAAAAgdg");
	this.shape_82.setTransform(82.8,275.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,105.2,-0.1,-105.7).s().p("At4QfMAAAgg9IbxAAMAAAAg9g");
	this.shape_83.setTransform(82.9,275.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,106.9,-0.1,-107.3).s().p("At7QvMAAAghdIb3AAMAAAAhdg");
	this.shape_84.setTransform(83.1,275.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,108.5,-0.1,-108.9).s().p("At/RAMAAAgh/Ib+AAMAAAAh/g");
	this.shape_85.setTransform(83.2,275.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,110,-0.1,-110.6).s().p("AuCRQMAAAgifIcFAAMAAAAifg");
	this.shape_86.setTransform(83.3,275.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,111.7,-0.1,-112.2).s().p("AuFRgMAAAgi/IcLAAMAAAAi/g");
	this.shape_87.setTransform(83.5,275.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,113.3,-0.1,-113.9).s().p("AuIRxMAAAgjhIcRAAMAAAAjhg");
	this.shape_88.setTransform(83.6,275.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,114.9,-0.1,-115.5).s().p("AuMSBMAAAgkBIcZAAMAAAAkBg");
	this.shape_89.setTransform(83.8,275.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,116.6,-0.1,-117.1).s().p("AuPSRMAAAgkhIcfAAMAAAAkhg");
	this.shape_90.setTransform(83.9,275.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,118.2,-0.1,-118.7).s().p("AuSShMAAAglBIclAAMAAAAlBg");
	this.shape_91.setTransform(84.1,275.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,119.8,-0.1,-120.4).s().p("AuWSyMAAAgljIctAAMAAAAljg");
	this.shape_92.setTransform(84.2,275.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],-0.1,123.5,-0.1,-124).s().p("AuXTWMAAAgmrIcvAAMAAAAmrg");
	this.shape_93.setTransform(83.7,272.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],-0.1,127.1,-0.1,-127.7).s().p("AuZT7MAAAgn1IczAAMAAAAn1g");
	this.shape_94.setTransform(83.2,269);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],-0.1,130.8,-0.1,-131.3).s().p("AubUfMAAAgo9Ic3AAMAAAAo9g");
	this.shape_95.setTransform(82.7,265.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],-0.1,134.4,-0.1,-134.9).s().p("AudVEMAAAgqHIc7AAMAAAAqHg");
	this.shape_96.setTransform(82.2,262.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],-0.1,138.1,-0.1,-138.6).s().p("AueVoMAAAgrPIc9AAMAAAArPg");
	this.shape_97.setTransform(81.7,258.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],-0.1,141.7,-0.1,-142.2).s().p("AugWNMAAAgsZIdBAAMAAAAsZg");
	this.shape_98.setTransform(81.2,255.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],-0.1,145.4,-0.1,-145.9).s().p("AuhWxMAAAgthIdEAAMAAAAthg");
	this.shape_99.setTransform(80.7,252.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],-0.1,149,-0.1,-149.6).s().p("AujXWMAAAgurIdHAAMAAAAurg");
	this.shape_100.setTransform(80.2,248.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],-0.1,152.7,-0.1,-153.2).s().p("AulX6MAAAgvzIdLAAMAAAAvzg");
	this.shape_101.setTransform(79.7,245.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],-0.1,156.3,-0.1,-156.8).s().p("AumYfMAAAgw9IdNAAMAAAAw9g");
	this.shape_102.setTransform(79.2,242.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],-0.1,160,-0.1,-160.5).s().p("AuoZDMAAAgyFIdRAAMAAAAyFg");
	this.shape_103.setTransform(78.7,238.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,42.4,0,-42.5).s().p("Ar2GpIAAtRIXtAAIAANRg");
	this.shape_104.setTransform(78.2,235.4,1.237,3.861);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[]},1).wait(56));

	// Layer 1
	this.instance_16 = new lib.Tween4("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(79.5,275.9,0.035,0.035,0,0,0,2.9,1.4);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween5("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(79.3,276,0.503,0.503,0,0,0,0.1,0.2);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(31).to({_off:false},0).to({_off:true,regX:0.1,regY:0.2,scaleX:0.5,scaleY:0.5,x:79.3,y:276},20).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(31).to({_off:false},20).to({regY:0,scaleX:0.55,scaleY:0.55,x:79.5,y:275.8},64).to({regY:0.1,scaleX:0.88,scaleY:0.88,x:80.3,y:275.1},27,cjs.Ease.get(-1)).to({scaleX:1.19,scaleY:1.19,x:80.1,y:272.9,alpha:0},12).to({_off:true},1).wait(56));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(7.5,543.4,1,1,0,0,0,55.5,22.5);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(156).to({_off:false},0).to({alpha:1},3).wait(52));

	// legal
	this.instance_18 = new lib.legal_withpurchase();
	this.instance_18.parent = this;
	this.instance_18.setTransform(78.7,579.1,1.147,1.147,0,0,0,117.9,8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(157).to({_off:false},0).to({alpha:1},3).wait(51));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_153 = new cjs.Graphics().p("AqwFdIAAq5IVhAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_5_graphics_153,x:73.9,y:419.8}).wait(58));

	// price
	this.instance_19 = new lib.newPrice();
	this.instance_19.parent = this;
	this.instance_19.setTransform(74.7,199.7,1,1,0,0,0,57.5,33.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(153).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_153 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_154 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_155 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_156 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_157 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_158 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_159 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_160 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_161 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_162 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_163 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_6_graphics_153,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_154,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_155,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_156,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_157,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_158,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_159,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_160,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_161,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_162,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_163,x:81.8,y:351.5}).wait(48));

	// rift
	this.instance_20 = new lib.logo_rifttouch();
	this.instance_20.parent = this;
	this.instance_20.setTransform(78.7,345,0.476,0.476,0,0,0,81.5,66);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(153).to({_off:false},0).to({y:306},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_153 = new cjs.Graphics().p("AobCkIAAlHIQ4AAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_7_graphics_153,x:80.2,y:308.8}).wait(58));

	// oculus
	this.instance_21 = new lib.logo_oculus();
	this.instance_21.parent = this;
	this.instance_21.setTransform(80,317.8,0.63,0.63,0,0,0,81.4,66);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(153).to({_off:false},0).to({y:281.8},10,cjs.Ease.get(1)).wait(48));

	// stadium
	this.instance_22 = new lib.logo_stadium();
	this.instance_22.parent = this;
	this.instance_22.setTransform(81.6,361.8,0.417,0.417,0,0,0,81.5,66);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(153).to({_off:false},0).to({y:336.8},10,cjs.Ease.get(1)).wait(48));

	// touch RT
	this.instance_23 = new lib.hardware_touch_RT_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(69.5,227.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(147).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:40.5,y:168.2},13,cjs.Ease.get(-1)).wait(51));

	// touch LT
	this.instance_24 = new lib.hardware_touch_LT_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(80.4,227.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(147).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:119.9,y:166.8},13,cjs.Ease.get(-1)).wait(51));

	// rift
	this.instance_25 = new lib.hardware_rift_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(76.5,220.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(147).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:91.4,y:114.3},13,cjs.Ease.get(-1)).wait(51));

	// bg
	this.instance_26 = new lib.bg();
	this.instance_26.parent = this;
	this.instance_26.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.6,300,195.4,600.2);
// library properties:
lib.properties = {
	id: '255A0F1042CE46A5B1C585BBC1911CF1',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap33.jpg", id:"Bitmap33"},
		{src:"images/echo1.jpg", id:"echo1"},
		{src:"images/echo2.jpg", id:"echo2"},
		{src:"images/echo3.jpg", id:"echo3"},
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
an.compositions['255A0F1042CE46A5B1C585BBC1911CF1'] = {
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