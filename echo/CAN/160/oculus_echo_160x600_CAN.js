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
	this.shape.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape.setTransform(95.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_2.setTransform(82.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGACgDQADgEADgBQAFgCAFAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(57.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(49.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(35.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(25.8,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(15.8,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(2.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQACgEAEAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-15.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_12.setTransform(-25.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-58.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_16.setTransform(-67.8,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(-77.8,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglA+IAAh7IAOAAIAABtIA9AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
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
	this.shape.graphics.f("#000000").s().p("AAJAVIAAgWQAAgFgCgCIgCgBIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIALAAIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACACAAAEIABAIIAAAXg");
	this.shape.setTransform(17.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_1.setTransform(12.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAfIgIgBIABgKIAHACIAIABIAFgBIAEgCIAEgDIABgGIAAgHIgBAAQgDAEgDACQgEABgDAAIgIgBQgEgCgCgDIgEgGQgBgEgBgEQABgFABgEQACgEACgCIAGgFIAIgCQADAAAEACIAHAFIAAgGIAKAAIAAApIAAAGIgBAEIgDAEIgDADIgIADIgIABIgJgBgAgEgUIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAIAFABIAEgBIAEgCIACgDIABgFIgBgFIgCgEIgEgCIgEgBIgFABg");
	this.shape_2.setTransform(7.8,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_5.setTransform(-3.8,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfIAAg9IAZAAQAFAAADACQAEABADADIAEAGIABAIQAAAFgBAEIgEAFQgDADgEABQgDACgFAAIgOAAIAAAVgAgLAAIANAAIAEAAIADgCIACgDIAAgFIAAgEIgCgDIgDgCIgEgBIgNAAg");
	this.shape_6.setTransform(-8.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
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
	this.shape.graphics.f("#000000").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_2.setTransform(63.3,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_3.setTransform(56.3,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_4.setTransform(48.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(41.5,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(34.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgCQAJABAIADQAHACAFAHQAFAFADAIQADAIAAAJQAAALgDAHQgDAIgFAFQgFAFgHAEQgIACgJAAIgJAAQgEgCgEgCIgHgFIgGgIIgBAAIAAAQIAAAogAgLguQgFACgEAFQgEADgCAGQgCAGAAAFQAAAIACAFQACAGAEADQAEADAGACQAFADAFAAQAHAAAFgCQAFgCAEgEQAEgDABgFQACgHAAgHQAAgGgCgGQgBgFgEgEQgEgFgFgCQgFgBgHAAQgFgBgGADg");
	this.shape_7.setTransform(24.2,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTA+IgPgDIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgEQAEgDACgGQACgFABgJIAAgQIAAAAQgJAKgFADQgEACgFACIgJAAQgHAAgIgCQgHgEgGgFQgFgGgDgHQgDgHAAgLQAAgJADgIQADgIAFgFQAGgHAHgCQAIgDAHgBIAJACQAEABAEACIAIAFIAHAHIAAAAIAAgOIAOAAIAABRIgBAKIgDAJIgEAIIgFAGQgHAFgIACQgIACgJABIgRgCgAgLgwQgFACgDAFQgEAEgCAFQgCAGAAAGQAAAHACAHQACAFAEADQADAEAFACQAGACAFAAQAGAAAGgDQAFgCAEgDQADgDADgGQACgFAAgIQAAgFgCgGQgCgGgEgDQgEgFgFgCQgFgDgHABQgFAAgGABg");
	this.shape_9.setTransform(-0.8,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(-8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAA1QgDgCgDgFQgCgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_12.setTransform(-27.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFACAGgBIAOgBQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgFgDgEQgDgCgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_17.setTransform(-74.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-12.2,163.2,24.4);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape.setTransform(95.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_2.setTransform(82.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGACgDQADgEADgBQAFgCAFAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(57.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(49.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(35.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(25.8,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(15.8,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(2.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQACgEAEAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-15.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_12.setTransform(-25.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-58.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_16.setTransform(-67.8,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(-77.8,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglA+IAAh7IAOAAIAABtIA9AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,203.8,24.4);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMCDIAAgTQgUgBgUgDQgUgDgPgGIADgoQAKAFAVAEQAWADATABIAAg5QgmgIgOgIQgMgIgGgKQgGgMgBgQQABgOAGgNQAGgKALgIQALgHAOgFQAMgEAQgCIAAgUIAaAAIAAATQAQABARADQATAEANAEIgCAoQgLgEgSgEQgSgDgQgBIAAA1IAbAGQAOAFAKAHQALAGAHAKQAGANAAAPQABAPgHANQgFALgLAJQgKAHgOAFQgNAFgQACIAAAUgAAOBHQAOgCAIgFQAJgHAAgKQAAgKgJgHQgIgGgOgDgAgjhAQgJAHAAAJQAAAJAJAHQAHAEAQAEIAAguQgOABgJAFg");
	this.shape.setTransform(-0.3,303.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AheDWQAZgUAqguQAegkAXgoQgXAFgeAAQgcAAgagKQgYgJgTgTQgTgTgLgYQgKgZAAgeQAAgYANgpQAIgTAagfQAXgUAegLQAUgHAugEQAZAAAqAMQAeALAWAWQAVAVAMAcQALAbAAAfQAAAfgLAmQgMAmgVAnQgUAlgaAkQgbAjgcAbgAgah+QgMAGgKAJQgJAJgEAMQgFANAAANQAAAOAFAMQAFAMAIAKQAKAJANAFQANAEAOAAQAPAAANgEQAMgFAJgJQAKgKAEgMQAFgMAAgOQAAgNgFgNQgEgMgKgJQgJgJgMgGQgNgFgPAAQgPAAgNAFg");
	this.shape_1.setTransform(101.3,311.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQDSIAAhNIi7AAIAAhSIC7kEIBeAAIAAEEIA+AAIgDBSIg7AAIAABNgAhHAzIBXAAIAAh5IgCAAg");
	this.shape_2.setTransform(66,311.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhhDTQgbgEgfgIIAFhdQAVAIAeAFQAjAHAcgBIAkgDQAQgDAMgHQAOgHAHgKQAIgLgBgQQAAgSgKgNQgIgLgSgIQgOgGgSgEIgkgCQgYAAgbAFQgYAEgQAFIATjqIEAAAIgFBWIipAAIgHBCQAPgCAdAAQAnABAfAIQAeAJATARQATARAKAYQAKAYAAAfQAAAUgFASQgEARgHAPQgIAOgLALQgLALgNAKQgmATgYAGQggAIgngBQgeAAgggEg");
	this.shape_3.setTransform(29.9,312.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-13.1,274.8,136.5,74.4), null);


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
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(706.7,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_LoneEcho, new cjs.Rectangle(0,0,1413.4,165.6), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(179.8,-95.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_1.setTransform(175.3,-98.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDAAgIQAAgEABgGQACgFAEgEQADgCAEgCIAIgBIAIABIAHAFQADADACAFQABAEABAGIAAACIgmAAIACAIQABAEACACQACACAEABIAHAAIAJAAIAIgDIAAAGIgIADIgJAAIgJgBgAAQgCIgBgHIgDgGIgFgDIgHgBIgEABIgGADIgDAFIgCAIIAfAAIAAAAg");
	this.shape_2.setTransform(169.6,-97.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_3.setTransform(163.5,-98.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgIIAAgdIAGAAIAAAdIABAGIACAEIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgXIAGAAIAAAvIgGAAIAAgKQgEAGgDACIgFACIgGABQgEAAgEgBg");
	this.shape_4.setTransform(157.6,-97.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(153.6,-98.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAYQgFgCgEgDQgDgDgCgFQgBgDgBgIQAAgEACgGQACgFADgDQAEgDAFgCIAJgBIAIAAIAIADIgBAGIgHgDIgIgBIgHABQgEACgCACIgEAGQgCAEABAEQgBAFACAEIAEAGQACADAEAAIAHABIAIAAIAHgDIABAGIgIADIgIAAIgJgBg");
	this.shape_6.setTransform(149.9,-97.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAYIAAgdIAAgFIgCgEIgFgDIgFgBIgFABIgHAEIgDAGQgCAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAIAAQADACACACQACADABAEIABAHIAAAdg");
	this.shape_7.setTransform(144.4,-97.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABADIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(140.3,-98.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_9.setTransform(134.7,-98.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAXQgEgCgEgDIgEgIQgCgFAAgFIACgJIAEgIQAEgEAEgBQADgBAHgBIALACQAEABADAEIAGAIIABAJQAAAFgBAFIgGAIQgDADgEACIgLACQgHgBgDgBgAgIgRIgFAEIgEAGIgBAHIABAHIAEAHIAFAEQAFABADAAQAFAAADgBIAGgEIADgHQACgDAAgEQAAgDgCgEIgDgGIgGgEQgDgBgFgBQgDABgFABg");
	this.shape_10.setTransform(130,-97.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAYIAAgdIAAgFIgCgEIgFgDIgFgBIgFABIgHAEIgDAGQgCAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAIAAQADACACACQACADABAEIABAHIAAAdg");
	this.shape_11.setTransform(124,-97.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYIgHgCIACgGIAHACIAIABIAEAAIAFgCIACgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgDIgEgDIgJgDQgHgBgDgBIgCgEQgCgCAAgDQAAgEACgDQABgDACgBIAGgDIAGAAIAIABIAHADIgCAFIgGgDIgHgBQgFABgCABIgDACIgBAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIADADIAJACIAFABIAFACIADAEQACACAAADQAAAFgCACIgFAFIgGADIgGAAIgKgBg");
	this.shape_12.setTransform(116.2,-97.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDgBgIQAAgEACgGQACgFAEgEQADgCAEgCIAIgBIAJABIAGAFQAEADABAFQACAEgBAGIAAACIglAAIABAIQABAEADACQADACADABIAHAAIAJAAIAIgDIAAAGIgIADIgJAAIgJgBgAAQgCIgBgHIgDgGIgFgDIgGgBIgGABIgFADIgEAFIgBAIIAfAAIAAAAg");
	this.shape_13.setTransform(111.3,-97.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAYIAAgdIAAgFIgCgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDACQgDAAgCADQgCACgBAEIgCAGIAAAZIgFAAIAAgdIgBgFIgBgEIgEgDIgFgBIgHABIgFAEQgDADgBADQgBAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAGAAIAEACIADAFIABAFIADgFIAFgEIAFgDIAGAAQAEgBAEACQACABACADIAEAGIAAAHIAAAdg");
	this.shape_14.setTransform(104,-97.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAYIgGgCIgEgGQgBgDAAgEQAAgEABgDQABgCADgBIAGgCIAHgBIARABIAAgEIgBgFIgDgEIgEgCIgGgBIgIABIgJADIAAgGIAJgCIAIgBIAIABQAEABADACQADADABADQABADAAAEIAAAfIgGAAIAAgKIgEAFIgEAEIgGACIgEAAIgGgBgAgGAAIgFACIgCADIgBAEIABAFIACADIAEACIAFAAIAFgBIAGgCIAEgHQACgDAAgFIgQgBg");
	this.shape_15.setTransform(96.5,-97.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAlIgJgCIAAgGIAJACIAJAAIAHAAQAEgBADgCQACgDACgEQABgDAAgGIABgJIgBAAQgEAFgEACIgFADIgFAAQgFAAgFgBQgDgCgEgEQgDgCgBgFQgCgEAAgGQAAgGACgFQABgEADgEQAEgDADgBQAFgCAFAAIAFAAIAFADIAFACIADAGIABAAIAAgKIAGAAIAAAvIgCALIgCAFIgEADQgEADgEACIgKABIgJAAgAgHgeIgFAFIgEAFQgBAFgBAEQABAFABADIAEAGIAFADIAHABIAHgBQAEgBACgDQADgCABgDQACgEAAgEQAAgEgCgEIgDgGIgHgEQgDgBgEgBIgHABg");
	this.shape_16.setTransform(90.7,-96.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAYQgFgCgDgDQgDgDgBgFQgCgDgBgIQABgEACgGQABgFADgEQADgCAFgCIAIgBIAJABIAHAFQADADABAFQABAEAAAGIAAACIgmAAIACAIQACAEADACQACACADABIAHAAIAIAAIAJgDIAAAGIgJADIgIAAIgKgBgAARgCIgCgHIgDgGIgFgDIgHgBIgFABIgEADIgFAFIgCAIIAhAAIAAAAg");
	this.shape_17.setTransform(82.3,-97.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfAYIAAgdIgBgFIgCgEQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDACQgDAAgCADQgDACgBAEIgBAGIAAAZIgFAAIAAgdIgBgFIgCgEIgDgDIgGgBIgGABIgFAEQgCADgBADQgCAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAGAAIAFACIACAFIABAFIADgFIAFgEIAFgDIAGAAQAFgBACACQADABADADIADAGIAAAHIAAAdg");
	this.shape_18.setTransform(75,-97.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAXQgFgCgDgDIgGgIQgBgFAAgFIABgJIAGgIQADgEAFgBQADgBAGgBIAKACQAFABADAEIAGAIIABAJQAAAFgBAFIgGAIQgDADgFACIgKACQgGgBgDgBgAgIgRIgGAEIgDAGIgBAHIABAHIADAHIAGAEQAEABAEAAQAFAAAEgBIAGgEIADgHQABgDAAgEQAAgDgBgEIgDgGIgGgEQgEgBgFgBQgEABgEABg");
	this.shape_19.setTransform(67.5,-97.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAkQgHgBgFgDIABgGIAMAFIAKABIAGgBIAGgDIAFgEQABgDAAgEQAAgDgCgDIgEgEIgHgDIgGgCIgIgCIgHgEIgEgFQgCgEAAgEQAAgFACgEQACgEADgCIAIgEIAIgBIAKACIAMAFIgBAGIgLgFIgKgCIgGABIgFACIgEAEIgCAGQAAAEACADQACACADACQAEACAJADIAHACIAHADIAFAGQABADAAAFQAAAFgCAEQgCAEgEADIgIAEIgIABIgLgCg");
	this.shape_20.setTransform(61.5,-98.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(56.5,-106.7,126.7,16), null);


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
	this.shape.graphics.bf(img.echo1, null, new cjs.Matrix2D(1,0,0,1,-64.6,-131.5)).s().p("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");
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
(lib.oculus_echo_160x600_CAN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_48 = new cjs.Graphics().p("Au/BVIAAipId/AAIAACpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_graphics_48,x:83,y:130}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance = new lib.text1_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.3,146.2,0.736,0.736);
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.3,130,0.736,0.736);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({_off:true,y:130},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},9).wait(57).to({startPosition:0},0).to({scaleX:1.52,scaleY:1.52,x:82.3,y:49.2},23,cjs.Ease.get(-1)).to({scaleX:2.45,scaleY:2.45,x:82.5,y:-63,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_48 = new cjs.Graphics().p("Au/BVIAAipId/AAIAACpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_1_graphics_48,x:83,y:146.9}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_2 = new lib.text2_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.3,163.2,0.736,0.736);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.5,0.6,2.453,2.453);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},58).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},52).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_3}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).to({y:146.2},9).wait(52).to({startPosition:0},0).to({scaleX:1.52,scaleY:1.52,x:82.3,y:83.2},23,cjs.Ease.get(-1)).to({_off:true,scaleX:2.45,scaleY:2.45,x:82.5,y:0.6,alpha:0},12).wait(61));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_48 = new cjs.Graphics().p("Au/BVIAAipId/AAIAACpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_2_graphics_48,x:83,y:163.9}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 13
	this.instance_4 = new lib.text3_mc("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(136.3,177.9,0.736,0.736,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.text3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(269,61.9,2.453,2.453);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},63).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_5}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).to({regY:0,y:163.9},9).wait(47).to({startPosition:0},0).to({regX:0,scaleX:1.52,scaleY:1.52,x:197.5,y:119.4},23,cjs.Ease.get(-1)).to({_off:true,scaleX:2.45,scaleY:2.45,x:269,y:61.9,alpha:0},12).wait(61));

	// star trek
	this.instance_6 = new lib.game_startrek();
	this.instance_6.parent = this;
	this.instance_6.setTransform(91.3,271,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:342.4,y:766.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(173));

	// unspoken
	this.instance_7 = new lib.game_unspoken();
	this.instance_7.parent = this;
	this.instance_7.setTransform(90.4,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// lone echo
	this.instance_8 = new lib.game_loneecho();
	this.instance_8.parent = this;
	this.instance_8.setTransform(90.7,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(167));

	// roborecall
	this.instance_9 = new lib.game_roborecall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-51.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(164));

	// superhot
	this.instance_10 = new lib.game_superhot();
	this.instance_10.parent = this;
	this.instance_10.setTransform(90.9,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:317.6,y:360},37,cjs.Ease.get(-1)).to({_off:true},1).wait(161));

	// rick morty
	this.instance_11 = new lib.game_rickmorty();
	this.instance_11.parent = this;
	this.instance_11.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(158));

	// wilsons
	this.instance_12 = new lib.game_wilsons();
	this.instance_12.parent = this;
	this.instance_12.setTransform(90.6,271.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},37,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_29 = new cjs.Graphics().p("Ag2AtIAAhZIBtAAIAABZg");
	var mask_3_graphics_30 = new cjs.Graphics().p("Ag3AuIAAhbIBvAAIAABbg");
	var mask_3_graphics_31 = new cjs.Graphics().p("Ag6AxIAAhhIB1AAIAABhg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AhAA1IAAhpICBAAIAABpg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AhIA8IAAh3ICRAAIAAB3g");
	var mask_3_graphics_34 = new cjs.Graphics().p("AhSBEIAAiHIClAAIAACHg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AheBOIAAibIC9AAIAACbg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AhsBZIAAiyIDZAAIAACyg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Ah9BnIAAjNID8AAIAADNg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AiRB2IAAjrIEjAAIAADrg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AimCIIAAkOIFNAAIAAEOg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Ai9CaIAAkzIF7AAIAAEzg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AjXCvIAAldIGuAAIAAFdg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AjzDGIAAmLIHnAAIAAGLg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AkRDeIAAm7IIjAAIAAG7g");
	var mask_3_graphics_44 = new cjs.Graphics().p("AkxD4IAAnvIJjAAIAAHvg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AlTEUIAAonIKnAAIAAIng");
	var mask_3_graphics_46 = new cjs.Graphics().p("Al4EyIAApjILxAAIAAJjg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AmfFSIAAqiIM/AAIAAKig");
	var mask_3_graphics_48 = new cjs.Graphics().p("AnJFzIAArlIOTAAIAALlg");
	var mask_3_graphics_49 = new cjs.Graphics().p("An0GWIAAsrIPpAAIAAMrg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AoiG7IAAt1IRFAAIAAN1g");
	var mask_3_graphics_51 = new cjs.Graphics().p("ApSHiIAAvDISlAAIAAPDg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AqEIKIAAwTIUJAAIAAQTg");
	var mask_3_graphics_53 = new cjs.Graphics().p("Aq4I1IAAxpIVyAAIAARpg");
	var mask_3_graphics_54 = new cjs.Graphics().p("ArvJhIAAzBIXfAAIAATBg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AsoKPIAA0dIZRAAIAAUdg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AsrKRIAA0hIZXAAIAAUhg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AsuKTIAA0lIZdAAIAAUlg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AsyKVIAA0qIZlAAIAAUqg");
	var mask_3_graphics_59 = new cjs.Graphics().p("As1KXIAA0tIZrAAIAAUtg");
	var mask_3_graphics_60 = new cjs.Graphics().p("As4KaIAA0yIZxAAIAAUyg");
	var mask_3_graphics_61 = new cjs.Graphics().p("As8KcIAA03IZ4AAIAAU3g");
	var mask_3_graphics_62 = new cjs.Graphics().p("As/KeIAA07IZ/AAIAAU7g");
	var mask_3_graphics_63 = new cjs.Graphics().p("AtCKgIAA0/IaFAAIAAU/g");
	var mask_3_graphics_64 = new cjs.Graphics().p("AtGKiIAA1DIaNAAIAAVDg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AtJKkIAA1HIaTAAIAAVHg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AtMKmIAA1LIaZAAIAAVLg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AtQKoIAA1PIahAAIAAVPg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AtTKqIAA1TIanAAIAAVTg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AtWKsIAA1XIatAAIAAVXg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AtZKvIAA1dIa0AAIAAVdg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AtdKxIAA1hIa7AAIAAVhg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AtgKzIAA1lIbBAAIAAVlg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AtkK1IAA1pIbIAAIAAVpg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AtnK3IAA1tIbPAAIAAVtg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AtqK5IAA1xIbVAAIAAVxg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AttK7IAA11IbcAAIAAV1g");
	var mask_3_graphics_77 = new cjs.Graphics().p("AtxK9IAA15IbjAAIAAV5g");
	var mask_3_graphics_78 = new cjs.Graphics().p("At0K/IAA19IbpAAIAAV9g");
	var mask_3_graphics_79 = new cjs.Graphics().p("At3LBIAA2BIbvAAIAAWBg");
	var mask_3_graphics_80 = new cjs.Graphics().p("At7LEIAA2HIb3AAIAAWHg");
	var mask_3_graphics_81 = new cjs.Graphics().p("At+LGIAA2LIb9AAIAAWLg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AuCLIIAA2PIcFAAIAAWPg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AuFLKIAA2TIcLAAIAAWTg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AuILMIAA2XIcRAAIAAWXg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AuMLOIAA2bIcYAAIAAWbg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AuPLQIAA2fIcfAAIAAWfg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AuSLSIAA2jIclAAIAAWjg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AuVLVIAA2oIcrAAIAAWog");
	var mask_3_graphics_89 = new cjs.Graphics().p("AuYLXIAA2tIcxAAIAAWtg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AucLZIAA2xIc5AAIAAWxg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AufLbIAA21Ic/AAIAAW1g");
	var mask_3_graphics_92 = new cjs.Graphics().p("AujLdIAA25IdGAAIAAW5g");
	var mask_3_graphics_93 = new cjs.Graphics().p("AumLfIAA29IdNAAIAAW9g");
	var mask_3_graphics_94 = new cjs.Graphics().p("AupLhIAA3BIdTAAIAAXBg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AutLjIAA3FIdbAAIAAXFg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AuwLlIAA3JIdhAAIAAXJg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AuzLnIAA3NIdnAAIAAXNg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Au3LpIAA3RIdvAAIAAXRg");
	var mask_3_graphics_99 = new cjs.Graphics().p("Au6LsIAA3XId1AAIAAXXg");
	var mask_3_graphics_100 = new cjs.Graphics().p("Au9LuIAA3bId7AAIAAXbg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AvALwIAA3fIeBAAIAAXfg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AvELyIAA3jIeJAAIAAXjg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AvHL0IAA3nIePAAIAAXng");
	var mask_3_graphics_104 = new cjs.Graphics().p("AvLL2IAA3rIeWAAIAAXrg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AvOL4IAA3vIedAAIAAXvg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AvRL6IAA3zIejAAIAAXzg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AvUL8IAA33IepAAIAAX3g");
	var mask_3_graphics_108 = new cjs.Graphics().p("AvYL/IAA39IexAAIAAX9g");
	var mask_3_graphics_109 = new cjs.Graphics().p("AvbMBIAA4BIe3AAIAAYBg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AveMDIAA4FIe9AAIAAYFg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AviMFIAA4JIfFAAIAAYJg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AvlMHIAA4NIfLAAIAAYNg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AvpMJIAA4RIfTAAIAAYRg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AvsMLIAA4VIfZAAIAAYVg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AvvMNIAA4ZIffAAIAAYZg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AvyMPIAA4dIflAAIAAYdg");
	var mask_3_graphics_117 = new cjs.Graphics().p("Av2MSIAA4jIftAAIAAYjg");
	var mask_3_graphics_118 = new cjs.Graphics().p("Av5MUIAA4nIfzAAIAAYng");
	var mask_3_graphics_119 = new cjs.Graphics().p("Av8MWIAA4rIf5AAIAAYrg");
	var mask_3_graphics_120 = new cjs.Graphics().p("Av9MWIAA4rIf7AAIAAYrg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AwBMaIAA4zMAgDAAAIAAYzg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AwGMeIAA47MAgOAAAIAAY7g");
	var mask_3_graphics_123 = new cjs.Graphics().p("AwOMkIAA5HMAgdAAAIAAZHg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AwYMsIAA5XMAgxAAAIAAZXg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AwlM2IAA5rMAhLAAAIAAZrg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AwzNCIAA6DMAhnAAAIAAaDg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AxENPIAA6dMAiJAAAIAAadg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AxXNfIAA69MAivAAAIAAa9g");
	var mask_3_graphics_129 = new cjs.Graphics().p("AxsNvIAA7dMAjaAAAIAAbdg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AyEODIAA8EMAkJAAAIAAcEg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AyeOXIAA8tMAk9AAAIAActg");
	var mask_3_graphics_132 = new cjs.Graphics().p("Ay6OtIAA9ZMAl1AAAIAAdZg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AzZPGIAA+LMAmzAAAIAAeLg");
	var mask_3_graphics_134 = new cjs.Graphics().p("Az5PgIAA+/MAnzAAAIAAe/g");
	var mask_3_graphics_135 = new cjs.Graphics().p("A0cP8IAA/3MAo5AAAIAAf3g");
	var mask_3_graphics_136 = new cjs.Graphics().p("A1BQZMAAAggxMAqDAAAMAAAAgxg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A1oQ5MAAAghxMArRAAAMAAAAhxg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A2SRaMAAAgizMAslAAAMAAAAizg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A2+R9MAAAgj5MAt9AAAMAAAAj5g");
	var mask_3_graphics_140 = new cjs.Graphics().p("A3sSiMAAAglDMAvZAAAMAAAAlDg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A4cTIMAAAgmPMAw5AAAMAAAAmPg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A5PTxMAAAgngMAyfAAAMAAAAngg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A6EUbMAAAgo1MA0IAAAMAAAAo1g");
	var mask_3_graphics_144 = new cjs.Graphics().p("A67VHMAAAgqNMA12AAAMAAAAqNg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A70V1MAAAgroMA3pAAAMAAAArog");
	var mask_3_graphics_146 = new cjs.Graphics().p("A8wWkMAAAgtHMA5gAAAMAAAAtHg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A9mXPMAAAgudMA7NAAAMAAAAudg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A+dX6MAAAgvzMA87AAAMAAAAvzg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A/TYlMAAAgxJMA+nAAAMAAAAxJg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EggKAZQMAAAgyfMBAVAAAMAAAAyfg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EghAAZ7MAAAgz1MBCBAAAMAAAAz1g");
	var mask_3_graphics_152 = new cjs.Graphics().p("Egh3AamMAAAg1KMBDvAAAMAAAA1Kg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EgiuAbQMAAAg2fMBFcAAAMAAAA2fg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EgjkAb7MAAAg31MBHJAAAMAAAA31g");
	var mask_3_graphics_155 = new cjs.Graphics().p("EgkbAcmMAAAg5LMBI3AAAMAAAA5Lg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EglRAdRMAAAg6hMBKjAAAMAAAA6hg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EgmIAd8MAAAg73MBMRAAAMAAAA73g");
	var mask_3_graphics_158 = new cjs.Graphics().p("Egm/AenMAAAg9NMBN/AAAMAAAA9Ng");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_3_graphics_29,x:84.3,y:276.7}).wait(1).to({graphics:mask_3_graphics_30,x:84.3,y:276.7}).wait(1).to({graphics:mask_3_graphics_31,x:84.3,y:276.7}).wait(1).to({graphics:mask_3_graphics_32,x:84.3,y:276.7}).wait(1).to({graphics:mask_3_graphics_33,x:84.2,y:276.7}).wait(1).to({graphics:mask_3_graphics_34,x:84.2,y:276.7}).wait(1).to({graphics:mask_3_graphics_35,x:84.1,y:276.7}).wait(1).to({graphics:mask_3_graphics_36,x:84,y:276.7}).wait(1).to({graphics:mask_3_graphics_37,x:83.9,y:276.7}).wait(1).to({graphics:mask_3_graphics_38,x:83.8,y:276.6}).wait(1).to({graphics:mask_3_graphics_39,x:83.7,y:276.6}).wait(1).to({graphics:mask_3_graphics_40,x:83.6,y:276.6}).wait(1).to({graphics:mask_3_graphics_41,x:83.4,y:276.6}).wait(1).to({graphics:mask_3_graphics_42,x:83.3,y:276.5}).wait(1).to({graphics:mask_3_graphics_43,x:83.1,y:276.5}).wait(1).to({graphics:mask_3_graphics_44,x:82.9,y:276.5}).wait(1).to({graphics:mask_3_graphics_45,x:82.7,y:276.4}).wait(1).to({graphics:mask_3_graphics_46,x:82.5,y:276.4}).wait(1).to({graphics:mask_3_graphics_47,x:82.3,y:276.4}).wait(1).to({graphics:mask_3_graphics_48,x:82.1,y:276.3}).wait(1).to({graphics:mask_3_graphics_49,x:81.8,y:276.3}).wait(1).to({graphics:mask_3_graphics_50,x:81.5,y:276.2}).wait(1).to({graphics:mask_3_graphics_51,x:81.3,y:276.2}).wait(1).to({graphics:mask_3_graphics_52,x:81,y:276.1}).wait(1).to({graphics:mask_3_graphics_53,x:80.7,y:276.1}).wait(1).to({graphics:mask_3_graphics_54,x:80.4,y:276}).wait(1).to({graphics:mask_3_graphics_55,x:80.1,y:276}).wait(1).to({graphics:mask_3_graphics_56,x:80.1,y:276}).wait(1).to({graphics:mask_3_graphics_57,x:80.1,y:276}).wait(1).to({graphics:mask_3_graphics_58,x:80.1,y:276}).wait(1).to({graphics:mask_3_graphics_59,x:80.1,y:276}).wait(1).to({graphics:mask_3_graphics_60,x:80.1,y:276}).wait(1).to({graphics:mask_3_graphics_61,x:80.2,y:276}).wait(1).to({graphics:mask_3_graphics_62,x:80.2,y:275.9}).wait(1).to({graphics:mask_3_graphics_63,x:80.2,y:275.9}).wait(1).to({graphics:mask_3_graphics_64,x:80.2,y:276}).wait(1).to({graphics:mask_3_graphics_65,x:80.2,y:276}).wait(1).to({graphics:mask_3_graphics_66,x:80.2,y:275.9}).wait(1).to({graphics:mask_3_graphics_67,x:80.2,y:275.9}).wait(1).to({graphics:mask_3_graphics_68,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_69,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_70,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_71,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_72,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_73,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_74,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_75,x:80.3,y:275.9}).wait(1).to({graphics:mask_3_graphics_76,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_77,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_78,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_79,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_80,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_81,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_82,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_83,x:80.4,y:275.9}).wait(1).to({graphics:mask_3_graphics_84,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_85,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_86,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_87,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_88,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_89,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_90,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_91,x:80.5,y:275.9}).wait(1).to({graphics:mask_3_graphics_92,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_93,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_94,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_95,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_96,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_97,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_98,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_99,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_100,x:80.6,y:275.9}).wait(1).to({graphics:mask_3_graphics_101,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_102,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_103,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_104,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_105,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_106,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_107,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_108,x:80.7,y:275.9}).wait(1).to({graphics:mask_3_graphics_109,x:80.8,y:275.9}).wait(1).to({graphics:mask_3_graphics_110,x:80.8,y:275.8}).wait(1).to({graphics:mask_3_graphics_111,x:80.8,y:275.9}).wait(1).to({graphics:mask_3_graphics_112,x:80.8,y:275.9}).wait(1).to({graphics:mask_3_graphics_113,x:80.8,y:275.9}).wait(1).to({graphics:mask_3_graphics_114,x:80.8,y:275.8}).wait(1).to({graphics:mask_3_graphics_115,x:80.8,y:275.8}).wait(1).to({graphics:mask_3_graphics_116,x:80.8,y:275.8}).wait(1).to({graphics:mask_3_graphics_117,x:80.9,y:275.9}).wait(1).to({graphics:mask_3_graphics_118,x:80.9,y:275.8}).wait(1).to({graphics:mask_3_graphics_119,x:80.9,y:275.8}).wait(1).to({graphics:mask_3_graphics_120,x:80.9,y:275.9}).wait(1).to({graphics:mask_3_graphics_121,x:80.9,y:276}).wait(1).to({graphics:mask_3_graphics_122,x:80.9,y:276.1}).wait(1).to({graphics:mask_3_graphics_123,x:80.9,y:276.3}).wait(1).to({graphics:mask_3_graphics_124,x:80.9,y:276.6}).wait(1).to({graphics:mask_3_graphics_125,x:81,y:277}).wait(1).to({graphics:mask_3_graphics_126,x:81,y:277.4}).wait(1).to({graphics:mask_3_graphics_127,x:81,y:277.9}).wait(1).to({graphics:mask_3_graphics_128,x:81.1,y:278.4}).wait(1).to({graphics:mask_3_graphics_129,x:81.1,y:279}).wait(1).to({graphics:mask_3_graphics_130,x:81.2,y:279.7}).wait(1).to({graphics:mask_3_graphics_131,x:81.2,y:280.4}).wait(1).to({graphics:mask_3_graphics_132,x:81.3,y:281.2}).wait(1).to({graphics:mask_3_graphics_133,x:81.3,y:282}).wait(1).to({graphics:mask_3_graphics_134,x:81.4,y:282.9}).wait(1).to({graphics:mask_3_graphics_135,x:81.5,y:283.9}).wait(1).to({graphics:mask_3_graphics_136,x:81.6,y:285}).wait(1).to({graphics:mask_3_graphics_137,x:81.6,y:286.1}).wait(1).to({graphics:mask_3_graphics_138,x:81.7,y:287.2}).wait(1).to({graphics:mask_3_graphics_139,x:81.8,y:288.5}).wait(1).to({graphics:mask_3_graphics_140,x:81.9,y:289.8}).wait(1).to({graphics:mask_3_graphics_141,x:82,y:291.1}).wait(1).to({graphics:mask_3_graphics_142,x:82.1,y:292.6}).wait(1).to({graphics:mask_3_graphics_143,x:82.2,y:294.1}).wait(1).to({graphics:mask_3_graphics_144,x:82.3,y:295.6}).wait(1).to({graphics:mask_3_graphics_145,x:82.4,y:297.2}).wait(1).to({graphics:mask_3_graphics_146,x:82.6,y:298.9}).wait(1).to({graphics:mask_3_graphics_147,x:82.5,y:299.7}).wait(1).to({graphics:mask_3_graphics_148,x:82.3,y:300.5}).wait(1).to({graphics:mask_3_graphics_149,x:82.2,y:301.3}).wait(1).to({graphics:mask_3_graphics_150,x:82.1,y:302}).wait(1).to({graphics:mask_3_graphics_151,x:82,y:302.8}).wait(1).to({graphics:mask_3_graphics_152,x:81.9,y:303.6}).wait(1).to({graphics:mask_3_graphics_153,x:81.8,y:304.4}).wait(1).to({graphics:mask_3_graphics_154,x:81.7,y:305.2}).wait(1).to({graphics:mask_3_graphics_155,x:81.6,y:306}).wait(1).to({graphics:mask_3_graphics_156,x:81.5,y:306.8}).wait(1).to({graphics:mask_3_graphics_157,x:81.4,y:307.6}).wait(1).to({graphics:mask_3_graphics_158,x:81.3,y:308.3}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_13 = new lib.echo3_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(84.8,279.3,0.034,0.034,0,0,0,158.5,22.2);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},0).to({regX:156,regY:18.1,scaleX:0.46,scaleY:0.46,x:83.8,y:330.5},26,cjs.Ease.get(-1)).to({regY:18.2,scaleX:0.51,scaleY:0.51,x:83.5,y:335.7},64).to({regX:155.8,scaleX:1,scaleY:1,x:85.6,y:394.4},27,cjs.Ease.get(-1)).to({scaleX:2.05,scaleY:2.05,x:97.6,y:534.2,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_14 = new lib.echo1_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(87.9,276.9,0.035,0.035,0,0,0,67.8,132.8);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).to({regX:63.6,regY:131.6,scaleX:0.5,scaleY:0.5,x:129,y:275.8},26,cjs.Ease.get(-1)).to({regX:63.8,regY:131.7,scaleX:0.6,scaleY:0.6,rotation:4.7,x:144.4},64).to({regX:63.7,regY:131.4,scaleX:1.14,scaleY:1.14,rotation:12.8,x:220.9,y:265.9},27,cjs.Ease.get(-1)).to({regX:63.6,scaleX:2.33,scaleY:2.33,x:374.6,y:271.1,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_15 = new lib.echo2_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(82.3,277.5,0.035,0.035,0,0,0,99.5,114);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({_off:false},0).to({regX:97.4,regY:113.9,scaleX:0.5,scaleY:0.5,x:49.7,y:284.7},26,cjs.Ease.get(-1)).to({regX:97.2,regY:114,scaleX:0.6,scaleY:0.6,rotation:-3.2,x:29.7,y:286.9},64).to({regY:113.9,scaleX:1.14,scaleY:1.14,rotation:-1.2,x:-62.5,y:328.9},27,cjs.Ease.get(-1)).to({regY:114,scaleX:2.33,scaleY:2.33,rotation:-1.2,x:-205.4,y:400.4,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 1
	this.instance_16 = new lib.Tween4("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(84.5,276.9,0.035,0.035,0,0,0,2.9,1.4);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween5("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(80.1,276,0.503,0.503,0,0,0,0.1,0.2);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(29).to({_off:false},0).to({_off:true,regX:0.1,regY:0.2,scaleX:0.5,scaleY:0.5,x:80.1,y:276},26,cjs.Ease.get(-1)).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(29).to({_off:false},26,cjs.Ease.get(-1)).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:79.6,y:275.8},64).to({regX:0.2,regY:0.2,scaleX:1.14,scaleY:1.14,x:82.3,y:297.8},27,cjs.Ease.get(-1)).to({regX:0.1,scaleX:2.33,scaleY:2.33,x:90.6,y:336.4,alpha:0},12).to({_off:true},1).wait(56));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(7.5,543.4,1,1,0,0,0,55.5,22.5);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(160).to({_off:false},0).to({alpha:1},3).wait(52));

	// legal
	this.instance_18 = new lib.legal_withpurchase();
	this.instance_18.parent = this;
	this.instance_18.setTransform(78.7,589.1,1.147,1.147,0,0,0,117.9,8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(173).to({_off:false},0).to({y:579.1,alpha:1},7).wait(35));

	// Layer 7
	this.instance_19 = new lib.legal_limitedtime();
	this.instance_19.parent = this;
	this.instance_19.setTransform(81.2,454.6,1.274,1.274,0,0,0,-80.3,137.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(167).to({_off:false},0).to({y:444.6,alpha:1},7).wait(41));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_157 = new cjs.Graphics().p("AqwFdIAAq5IVhAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_4_graphics_157,x:73.9,y:419.8}).wait(58));

	// price
	this.instance_20 = new lib.newPrice();
	this.instance_20.parent = this;
	this.instance_20.setTransform(74.7,199.7,1,1,0,0,0,57.5,33.2);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(157).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_157 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_158 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_159 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_160 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_161 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_162 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_163 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_165 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_166 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_5_graphics_167 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_5_graphics_157,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_158,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_159,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_160,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_161,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_162,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_163,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_164,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_165,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_166,x:81.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_167,x:81.8,y:351.5}).wait(48));

	// rift
	this.instance_21 = new lib.logo_rifttouch();
	this.instance_21.parent = this;
	this.instance_21.setTransform(78.7,345,0.476,0.476,0,0,0,81.5,66);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(157).to({_off:false},0).to({y:306},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_157 = new cjs.Graphics().p("AobCkIAAlHIQ4AAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_6_graphics_157,x:80.2,y:308.8}).wait(58));

	// oculus
	this.instance_22 = new lib.logo_oculus();
	this.instance_22.parent = this;
	this.instance_22.setTransform(80,317.8,0.63,0.63,0,0,0,81.4,66);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(157).to({_off:false},0).to({y:281.8},10,cjs.Ease.get(1)).wait(48));

	// stadium
	this.instance_23 = new lib.logo_stadium();
	this.instance_23.parent = this;
	this.instance_23.setTransform(81.6,361.8,0.417,0.417,0,0,0,81.5,66);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(157).to({_off:false},0).to({y:336.8},10,cjs.Ease.get(1)).wait(48));

	// touch RT
	this.instance_24 = new lib.hardware_touch_RT_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(69.5,227.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(151).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:40.5,y:168.2},13,cjs.Ease.get(-1)).wait(51));

	// touch LT
	this.instance_25 = new lib.hardware_touch_LT_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(80.4,227.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(151).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:119.9,y:166.8},13,cjs.Ease.get(-1)).wait(51));

	// rift
	this.instance_26 = new lib.hardware_rift_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(76.5,220.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(151).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:91.4,y:114.3},13,cjs.Ease.get(-1)).wait(51));

	// bg
	this.instance_27 = new lib.bg();
	this.instance_27.parent = this;
	this.instance_27.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(215));

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