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



(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,50);


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
p.nominalBounds = new cjs.Rectangle(0,0,131,131);// helper functions:

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


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(121.7,-127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(62.5,-162.7,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC2IAAiTQAAgQgDgMQgEgMgGgKQgIgJgLgFQgLgFgRAAQgRAAgRAGQgRAHgMAMQgNAMgHASQgIAUAAAYIAAB1IgaAAIAAlrIAaAAIAACBIgBAyIACAAIANgVQAJgKALgHQAMgJAOgEQAPgFARABQAWAAARAGQAPAHALANQAKANAFARQAEAOABAVIAACUg");
	this.shape.setTransform(185.9,165.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXB0QgYgHgQgPQgSgPgIgXQgGgQgDgoQAAgVAJgiQAIgXASgPQAQgPAYgIQAWgGAbAAQARAAATADQAVAFARAIIgCAZQgRgJgWgEQgTgFgPAAQgWAAgRAGQgSAGgNAMQgNAMgIATQgHATAAAZQAAAZAHAUQAIASANANQANAMASAGQARAGAWAAQAPAAATgFQAWgFARgJIACAZQgQAJgWAEQgTAEgRAAQgbABgWgIg");
	this.shape_1.setTransform(159.5,172.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2BxQgQgHgKgNQgKgNgFgQQgEgRAAgSIAAiVIAZAAIAACQQAAAQAEAMQADAOAHAKQAHAKAMAFQAMAGARAAQARAAAQgHQAQgHAMgOQAMgOAHgTQAHgWAAgZIAAhtIAZAAIAADqIgYAAIAAgyIgBAAQgQAcgPAKQgMAJgOAEQgPAFgSABQgXgBgQgHg");
	this.shape_2.setTransform(133.9,172.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyByQgXgJgQgSQgPgQgJgXQgIgXAAgZQAAgYAIgXQAJgWAPgRQAQgSAXgJQAXgKAbABQAcgBAXAKQAWAJARASQAPARAIAWQAJAXAAAYQAAAZgJAXQgIAXgPAQQgRASgWAJQgXAKgcgBQgbABgXgKgAgqhbQgSAHgMAPQgMAOgGASQgFARAAAUQAAAUAFASQAGASAMAOQAMAOASAHQATAJAXAAQAYAAATgJQASgHAMgOQALgOAGgSQAGgSAAgUQAAgUgGgRQgGgSgLgOQgMgPgSgHQgTgIgYAAQgXAAgTAIg");
	this.shape_3.setTransform(104.1,172.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIAAAYIhFAAIAAB7QAAApAEAMQAEAIAGAEQAGAFALAAQAVAAASgGIAAAXQgRAGgaAAQgRAAgLgHg");
	this.shape_4.setTransform(81.7,168.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIgBAYIhEAAIAAB7QAAApAEAMQADAIAHAEQAGAFALAAQAVAAARgGIAAAXQgPAGgaAAQgTAAgKgHg");
	this.shape_5.setTransform(27,168.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVC1IAAjTIgwAAIAAgXIAwAAIAAgzQAAgVAEgQQADgOAIgJQAGgJALgDQAKgEANAAQAUAAAQAEIAAAZQgPgFgUAAQgSAAgHAMQgHALAAAdIAAAzIA2AAIgBAXIg1AAIAADTg");
	this.shape_6.setTransform(11.6,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCsIAAjqIAZAAIAADqgAgPiIQgEgFAAgKQgBgIAFgGQAGgGAJgBQAKABAFAGQAFAGAAAIQAAAKgFAFQgFAHgKAAQgJgBgGgGg");
	this.shape_7.setTransform(-2.8,166.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7B4IAAjqIAaAAIAAAyIABAAQAMgXAQgOQAJgJALgEQANgGANABIASACIgBAbQgKgDgLAAQgQAAgNAHQgMAIgKAOQgJANgGARQgFASAAATIAAB1g");
	this.shape_8.setTransform(-16.8,171.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhFAAIAAgXIBFAAIAAhBIAWAAIAABBIBKAAIAAAXIhKAAIAABNg");
	this.shape_9.setTransform(55.1,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-28.8,134.9,231.2,62.8), null);


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
	this.shape.graphics.f("#000000").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(205.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAqQgFgCgEgEQgDgEgCgFQgCgGAAgGQAAgHACgGQACgEADgEQAEgEAFgBQAFgCAFAAIAHAAIAGADQAEACAFAHIABAAIgBgLIAAgfIAHAAIAABVIgGAAIAAgLIgBAAIgEAGIgGAEIgGACIgGABQgFAAgFgCgAgIgGIgGAFQgDACgCAEQgBAEAAAGQAAAFABAEQACAEADADQADADADACQAEABAEAAIAJgBIAHgFIAEgIQACgEAAgEQAAgFgCgFQgCgEgDgCQgDgDgEgBQgEgCgEAAQgEAAgEABg");
	this.shape_1.setTransform(200.3,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAbQgFgBgEgEQgEgEgCgFQgBgEgBgJIACgNQACgFAEgEQAEgDAFgBQAFgCAEAAQAGAAAEACQAFACADACQADAEACAFQACAGAAAHIAAADIgsAAQAAAFACAEQACAEADACQACACAFABIAHABIAKgBIAKgCIAAAGQgDACgGABIgLABQgFAAgGgCgAATgDQAAgEgCgEQgBgDgCgDQgCgDgEgBQgDgBgEAAIgGABIgGAEQgDACgCADQgCAFAAAEIAlAAIAAAAg");
	this.shape_2.setTransform(193.7,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAqQgFgCgEgEQgDgEgCgFQgCgGAAgGQAAgHACgGQACgEADgEQAEgEAFgBQAFgCAFAAIAHAAIAGADQAEACAFAHIABAAIgBgLIAAgfIAHAAIAABVIgGAAIAAgLIgBAAIgEAGIgGAEIgGACIgGABQgFAAgFgCgAgIgGIgGAFQgDACgCAEQgBAEAAAGQAAAFABAEQACAEADADQADADADACQAEABAEAAQAEAAAFgBIAHgFIAEgIQACgEAAgEQAAgFgCgFQgCgEgDgCQgDgDgEgBQgEgCgEAAQgEAAgEABg");
	this.shape_3.setTransform(186.8,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAaQgDgBgDgDIgDgHIgBgIIAAgiIAIAAIAAAhIAAAGQAAADACACIAEAEIAHABQADAAAEgCQAEgBADgDIADgIQACgFAAgEIAAgaIAHAAIAAA2IgHAAIAAgLIAAAAQgEAGgDADIgGACIgHABQgGAAgEgCg");
	this.shape_4.setTransform(180,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDArIAAhVIAGAAIAABVg");
	this.shape_5.setTransform(175.4,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAbQgGgBgDgEQgEgEgDgFQgBgEAAgJQgBgEACgIQADgGAEgEQADgDAGgBQAFgCAGAAIAIABIAJADIAAAHIgJgEIgIgBQgFAAgDABQgFACgDADQgCADgCAEQgCAEABAFQgBAGACAEQACAEACADQADADAFABQADACAFgBIAIgBIAJgCIAAAGIgIADIgJABQgGAAgFgCg");
	this.shape_6.setTransform(171.1,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARAcIAAghIAAgHIgDgFIgEgDQgDgBgDAAIgHABQgEACgDADQgDADgBAEQgCAEAAAFIAAAbIgHAAIAAg2IAHAAIAAALIAAAAIADgFIAFgEIAGgCIAHgBQAFAAAEABQADACADADQACADABAEIABAIIAAAig");
	this.shape_7.setTransform(164.8,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCApIAAg3IAGAAIAAA3gAgDgeQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAIABAEIgBAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_8.setTransform(160.1,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAjQgBgBgCgDQgBgDAAgFIgBgLIAAgZIgLAAIAAgGIALAAIAAgRIAGAAIAAARIAQAAIAAAGIgQAAIAAAcIABAMQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAAAIAEABQAFAAAEgBIAAAGQgEACgGAAQgEAAgDgCg");
	this.shape_9.setTransform(153.8,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAbQgGgDgDgDQgEgEgCgGQgCgFAAgGQAAgFACgGQACgFAEgEQADgEAGgCQADgBAIgBIAMACQAFACAEAEQAEAEACAFQACAGAAAFQAAAGgCAFQgCAGgEAEQgEADgFADQgIACgEAAQgIgBgDgBgAgJgUQgEACgDADIgEAHIgBAIIABAJIAEAGQADAEAEACQAEABAFAAQAFAAAFgBQAEgCACgEIAEgGQACgFAAgEQAAgEgCgEIgEgHQgCgDgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_10.setTransform(148.4,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAcIAAghIAAgHIgDgFIgEgDQgDgBgDAAIgHABQgEACgDADQgDADgBAEQgCAEAAAFIAAAbIgHAAIAAg2IAHAAIAAALIAAAAIADgFIAFgEIAGgCIAHgBQAFAAAEABQADACADADQACADABAEIABAIIAAAig");
	this.shape_11.setTransform(141.6,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLAcIgJgDIABgHIAJADIAJABIAGAAIAEgCIAEgDIABgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgEgDIgLgDIgLgDIgEgEQgBgDgBgEQABgDABgEQACgDADgBIAGgEIAGAAIAKABIAIADIgCAHQgDgDgEgBQgEgBgFAAQgFAAgDACIgDADIgBAEQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIAEADIALACIAGACIAFACIAEAEQABADAAAEQAAAEgBAEQgDADgDACIgHADIgIABIgKgBg");
	this.shape_12.setTransform(132.7,8.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAbQgFgBgEgEQgEgEgCgFQgBgEgBgJIACgNQACgFAEgEQAEgDAFgBQAFgCAEAAQAGAAAEACQAFACADACQADAEACAFQACAGAAAHIAAADIgsAAQAAAFACAEQACAEADACQACACAFABIAHABIAKgBIAKgCIAAAGQgDACgGABIgLABQgFAAgGgCgAATgDQAAgEgCgEQgBgDgCgDQgCgDgEgBQgDgBgEAAIgGABIgGAEQgDACgCADQgCAFAAAEIAlAAIAAAAg");
	this.shape_13.setTransform(126.9,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkAcIAAghIgBgGIgCgFIgEgEQgDgBgEAAQgEAAgDACQgDABgDADIgEAGQgBAEgBAEIAAAdIgGAAIAAghIAAgGIgCgFQgCgDgCgBQgDgBgEAAQgEAAgEABQgDACgDADIgDAHIgBAJIAAAbIgIAAIAAg2IAHAAIAAALIABAAIACgFIAFgEQADgCADAAIAHgBIAHABIAEACIADAFIACAGIAEgGIAFgEIAGgDIAHgBQAFAAADABQAEACADADQABADABAEIABAIIAAAig");
	this.shape_14.setTransform(118.6,8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAcIgGgDQgDgDgCgDQgBgEgBgEQABgFABgDQABgDAEgBQACgCAEgBIAIgBIAVACIAAgEQAAgEgCgDIgDgEIgFgDIgHgBIgKACIgJACIgBgGIAKgDIALgBIAJABQAEACADACQADADACAEQABAEAAAFIAAAjIgGAAIAAgMIgFAGIgFAEIgGACIgGABIgHgBgAgHABIgGABIgCAEIgBAFIABAFIACAEIAFACIAFABQADAAAEgCQAEgBADgCQACgDACgEQADgEAAgGIgTgBg");
	this.shape_15.setTransform(110,8.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAqIgKgCIAAgHIAKADIALAAIAJgBIAHgEQADgCACgFQABgEAAgGIABgLIgBAAQgFAHgEACIgGACIgGABQgGAAgFgCQgFgCgDgDQgEgEgCgFQgCgFAAgHQAAgHACgFQACgFAEgEQADgEAFgCQAFgCAGAAIAFABIAGACIAGAEIAEAFIABAAIAAgLIAGAAIAAA2IgCAOIgDAFIgDAEQgEADgGACQgFACgGAAIgLgBgAgIgiIgGAEQgDADgCAFQgBAEAAAFQAAAFABAFQACADADADQADADADABQAEACAEAAQAEAAAEgCQAEgBADgDQADgDACgEQACgEAAgFQAAgFgCgEIgEgHQgDgDgEgCQgFgCgEAAQgEAAgEACg");
	this.shape_16.setTransform(103.3,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAbQgFgBgEgEQgEgEgCgFQgBgEgBgJIACgNQACgFAEgEQAEgDAFgBQAFgCAEAAQAGAAAEACQAFACADACQADAEACAFQACAGAAAHIAAADIgsAAQAAAFACAEQACAEADACQACACAFABIAHABIAKgBIAKgCIAAAGQgDACgGABIgLABQgFAAgGgCgAATgDQAAgEgCgEQgBgDgCgDQgCgDgEgBQgDgBgEAAIgGABIgGAEQgDACgCADQgCAFAAAEIAlAAIAAAAg");
	this.shape_17.setTransform(93.7,8.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAkAcIAAghIgBgGIgCgFIgEgEQgDgBgEAAQgEAAgDACQgEABgCADIgEAGQgBAEgBAEIAAAdIgGAAIAAghIAAgGIgDgFQgBgDgCgBQgDgBgEAAQgEAAgEABQgDACgDADIgDAHIgBAJIAAAbIgIAAIAAg2IAHAAIAAALIABAAIACgFIAFgEQADgCADAAIAGgBIAIABIAEACIADAFIADAGIADgGIAFgEIAGgDIAHgBQAFAAADABQAEACACADQACADABAEIABAIIAAAig");
	this.shape_18.setTransform(85.3,8.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLAbQgGgDgDgDQgEgEgCgGQgCgFAAgGQAAgFACgGQACgFAEgEQADgEAGgCQADgBAIgBIAMACQAFACAEAEQAEAEACAFQACAGAAAFQAAAGgCAFQgCAGgEAEQgEADgFADQgIACgEAAQgIgBgDgBgAgJgUQgEACgDADIgEAHIgBAIIABAJIAEAGQADAEAEACQAEABAFAAQAFAAAFgBQAEgCACgEIAEgGQACgFAAgEQAAgEgCgEIgEgHQgCgDgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_19.setTransform(76.6,8.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNAqQgIgCgGgDIACgHIANAFIALACIAIgBIAHgEQADgBACgDQACgEAAgEQAAgEgCgDQgCgDgEgCIgHgDIgIgDIgJgCIgHgEIgGgHQgCgDAAgGQAAgFADgFQACgEAEgDIAJgEQAEgBAFAAQAGAAAGACIAOAGIgCAGIgNgFQgFgCgGgBIgHACQgEABgCACQgDABgCADQgBADAAAEQAAAEACADQABADAEACQAEACALADIAJADIAIAEQADADACADQACAEAAAGQAAAGgDAFQgCAEgEADQgEADgFABIgLABIgMgBg");
	this.shape_20.setTransform(69.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(63.5,-3,146.6,19.6), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape.setTransform(133.8,-164.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAdIAHgSIgPgnIAFAAIAMAhIANghIAFAAIgPAmIgHATg");
	this.shape_1.setTransform(130.7,-165.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_2.setTransform(127.8,-167.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_3.setTransform(124.6,-166.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIATQgDgCgDgDQgCgCgCgEIgBgIIABgHIAEgGQADgDADgCIAIgBIAIABQAEACADADIADAGQACAEAAADQAAAEgCAEQgBAEgCACQgDADgEACIgIABIgIgBgAgGgNIgEADIgDAFIgBAFIABAGIADAFIAEAEIAGABIAHgBIAEgEIADgFIABgGIgBgFIgDgFQgCgCgCgBQgDgCgEAAQgDAAgDACg");
	this.shape_4.setTransform(119.9,-166);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgDgCgCgEIgBgJIABgIIAFgGQACgDAEgBIAFgBQAFAAACABQADABADADQACACABAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_5.setTransform(113.2,-166);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZAUIAAgXIgBgEIgBgEIgDgCIgEgBIgGABIgDADIgDAFIgBAFIAAAUIgFAAIAAgXIAAgEIgBgEIgDgCIgFgBIgFABIgEADQgCACAAADIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIACgDIACgDIAFgCIAEgBIAGABIADACIABADIACAFIADgFIACgDIAFgCIAFgBQADAAADACIAEADIACAFIABAGIAAAXg");
	this.shape_6.setTransform(107.4,-166.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_7.setTransform(102.8,-166.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_8.setTransform(100.5,-166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAdIgGgEIgEgGQgCgEAAgFQAAgFACgDQABgDADgDIAGgEQADgBAEAAIAEABIAEABIAHAGIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHIgEAEIgDACIgEACIgEAAQgEAAgDgBgAgFgEIgFADIgDAEIgBAHIABAHIADAFIAFADIAFABIAGgBIAFgEIADgFIABgGIgBgGQgBgDgDgBIgEgEIgGgBIgFABg");
	this.shape_9.setTransform(94.5,-167);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgDgCgBgEIgCgJIACgIIAEgGQACgDAEgBIAFgBQAFAAACABQADABADADQADACAAAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgEgDIgFgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_10.setTransform(89.9,-166);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_11.setTransform(86.3,-166.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_12.setTransform(84,-166.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAUIAAgXIgBgEIgBgEIgDgCIgEgBIgFABIgFADIgDAFIAAAFIAAAUIgFAAIAAgXIAAgEIgCgEIgCgCIgFgBIgFABIgEADQgCACgBADIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIACgDIAEgDIADgCIAGgBIAEABIAEACIACADIABAFIACgFIAEgDIAEgCIAFgBQAEAAACACIAEADIACAFIAAAGIAAAXg");
	this.shape_13.setTransform(79.4,-166.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_14.setTransform(74.9,-166.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAdIAAg5IAEAAIAAA1IAeAAIAAAEg");
	this.shape_15.setTransform(72.1,-167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(67.6,-173.8,69.4,13.6), null);


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


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-72,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-72,0,380,50), null);


(lib.newPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_withpurchase();
	this.instance.parent = this;
	this.instance.setTransform(51,61.6,0.963,0.963,0,0,0,117.8,8.1);

	this.instance_1 = new lib.legal_limitedtime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43.2,288.8,1.391,1.391,0,0,0,37.6,6.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEBjIAAggIARAAIAAg6IgQAAIAAgVIAQAAIAAgYQAAgQAEgLQAFgMAHgIQAIgIAMgDQANgEAPAAQANAAANACQANADANAGIgCAhQgNgFgMgDQgNgDgMAAQgHAAgGABQgFACgDAEQgDADgCAGQgBAFgBAIIAAAYIA7AAIgBAVIg6AAIAAA6IBTAAIAAAgg");
	this.shape.setTransform(-7,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPC1QAVgRAjgnQAZgeAUgiQgUAFgZAAQgYAAgVgJQgVgJgQgPQgQgQgJgUQgIgWgBgZQAAgUALgjQAHgQAXgaQASgRAagJQARgGAngDQAVAAAkAKQAZAKASASQATARAJAYQAJAXAAAaQAAAbgKAgQgJAfgSAhQgQAggWAeQgXAdgYAXgAgWhqQgLAEgHAIQgIAIgEAKQgDALAAALQAAAMADAKQAEAKAIAIQAIAIAKAEQALAEANAAQANAAALgEQAJgEAJgIQAHgIAEgKQAEgKAAgMQAAgLgEgLQgEgKgHgIQgJgIgJgEQgLgEgNAAQgNAAgLAEg");
	this.shape_1.setTransform(72.8,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPC1QAUgRAlgnQAYgeAVgiQgVAFgYAAQgYAAgWgJQgVgJgQgPQgQgQgIgUQgKgWABgZQAAgUAKgjQAHgQAWgaQAUgRAZgJQARgGAmgDQAWAAAkAKQAZAKATASQASARAJAYQAKAXAAAaQgBAbgJAgQgKAfgRAhQgSAggWAeQgWAdgYAXgAgWhqQgLAEgHAIQgHAIgFAKQgEALAAALQAAAMAEAKQAFAKAHAIQAIAIALAEQAKAEAMAAQANAAALgEQALgEAHgIQAIgIAEgKQAEgKAAgMQAAgLgEgLQgEgKgIgIQgHgIgLgEQgLgEgNAAQgMAAgLAEg");
	this.shape_2.setTransform(43,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhNC2QgegEgYgGIAEhOQBQAQAkAAIAZgCQALgDAHgFQAJgEADgIQAEgHAAgLQAAgNgGgJQgGgIgLgFQgPgHgdAAIhJAAIgChDIBSAAQAWgBAOgGQAIgEAEgHQAFgIAAgKQAAgLgGgHQgEgGgKgEQgOgHgaABQgogBg+AOIgEhMIA2gJQAggFAcAAQAZABAXAEQAaAEASAKQAVALALAPQAFAJAEALQADAKAAAMQAAAQgFAPQgFAOgJAMQgIAMgNAJQgNAKgPAGIAAABQAPAEAOAHQAOAJAKALQALANAFAOQAHAQgBASQAAAMgDAMQgEAMgFAJQgNATgXAMQgUALgdAGQgaAFgcABQgZgBghgEg");
	this.shape_3.setTransform(15.7,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-16.6,-10,156.5,79.8), null);


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


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_stadium();
	this.instance.parent = this;
	this.instance.setTransform(-506.4,655,1.809,1.809,0,0,0,81.2,66);

	this.instance_1 = new lib.logo_rifttouch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(517.6,288.3,2.9,2.9,0,0,0,86.8,166.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AapIYQhjgdhQhDIBZh4QAyAnA4AWQAoAPAoAFQAmAFAmgFQAagDAZgMQATgIAOgQQAKgPADgSQABgTgKgRQgMgTgUgJQgZgQgagGIhBgQQgxgLgygOQgygSgpgiQgmgggOgwQgQg0AOg0QALgrAdgiQAlguA5gWQAqgRAsgHQA5gHA8AJQBmAQBWA9IhVByQg0ggg+gNQgogIgqADQgVACgTAIQgPAFgLALQgLAGgFAKQgHAJgBALQgDAWANAQQARARAWAJQATAHAWAHIAwAKIA3ANQAbAJAbAKQAxATAmAfQAoAhAVAzQAOAtgHAvQgHA5gkAuQgbAigmAYQgzAdg8AKQgtAHgugBQg6gCg4gQgAuhIpQg4gCgzgSQg1gSgrggQgsghghgtQgegtgRg1QgQgzgDg2QgCg3ALg2QALg1AaguQA0hkBngxQAxgYA1gGQA3gLA2AIQBvAKBYBGIhnCAQgzgig9gIQghgEgjAGQgZAEgZAMQg6AWgeA4QgNAbgHAeQgFAeACAeQABAeAKAeQAIAcASAZQAmAzA6AUQAeAIAeACQAeAAAdgGQA8gOAugqIB0B5QgnAngvAaQgwAZg2ALQgqAJgqAAIgXgBgA9zIMQhEgcgzg0Qg1g3gZhDQgahEAAhKQAAhKAahEQAchCAzg3QA0g0BEgZQBEgbBJAAQBKAABEAbQBCAbA1A2QA0A0AZBEQAbBEAABKQAABJgcBDQgZBFg0A2Qg0A0hFAbQhEAahJAAQhJAAhEgbgA8OgTQgTAEgTAJQgSAGgRAKQgQAKgNAOQgNANgLAPQgLATgHARQgHATgDAVQgFAUgBAWQAAAXAEAUQAEAUAIAUQAHASAKASQALAQAMANQAOAMARANQAQAJASAIQASAHAVAEQATAFAVgBQAVABAVgFQAUgEATgGIAjgSQAPgLAOgOQANgNALgQQAKgRAHgRQAIgVADgUQAFgUAAgXQAAgUgFgWQgDgWgIgRQgHgSgKgRQgLgRgNgNQgMgOgQgLQgRgKgRgGQgUgIgUgEQgUgEgWAAQgVgBgUAEgAPKIiQhKgGg8gnQg6gmgkhFQgQghgIghQgIgjgDgkIgDg8IgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAHAkARAfQAXAmAmASQAmASApgCQAsABAmgTQAlgSAYglQATgeAGgjQADgSACgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICoAAIAALBIiTAAIgEhFQgaAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAkIIiQhKgGg7gnQg7gmgkhFQgQghgIghQgIgjgCgkQgDgegBgeIgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAGAkASAfQAXAmAnASQAlASAqgCQArABAngTQAkgSAYglQAUgeAFgjQAEgSABgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICnAAIAALBIiSAAIgFhFQgZAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAFeIWIAAw/ICpAAIAAQ/g");
	this.shape.setTransform(-74.2,289.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(-540.3,197.4,1393.1,182.2), null);


(lib.echo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_LoneEcho();
	this.instance.parent = this;
	this.instance.setTransform(150.3,4.3,0.22,0.22,0,0,0,706.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo3_mc, new cjs.Rectangle(-5.1,-13.9,310.8,36.4), null);


// stage content:
(lib.oculus_echo_300x50_UK = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(151.2,24.9,0.067,0.067,0,0,0,65.5,65.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:542.4,y:86.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(178));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.3,25,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-255.2,y:33.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(175));

	// roborecall
	this.instance_2 = new lib.game_roborecall();
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.2,24.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-161.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(172));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151.2,24.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:477.6,y:36},32,cjs.Ease.get(-1)).to({_off:true},1).wait(169));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.1,24.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-27.2,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.2,24.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:13.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

	// game_BG copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("AKaA1IBzAAIAABfIhzAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AKZA0IB1AAIAABgIh1AAg");
	var mask_graphics_29 = new cjs.Graphics().p("AKXAyIB5AAIAABjIh5AAg");
	var mask_graphics_30 = new cjs.Graphics().p("AKUAuICAAAIAABqIiAAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AKOApICLAAIAAByIiLAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AKIAiICYAAIAAB9IiYAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AKAAZICpAAIAACLIipAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AJ2APIC9AAIAACaIi9AAg");
	var mask_graphics_35 = new cjs.Graphics().p("AJsADIDSAAIAACtIjSAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AJfgJIDsAAIAADBIjsAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AJRgYIEJAAIAADYIkJAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AJCgpIEoAAIAADzIkoAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AIxg7IFLAAIAAEPIlLAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AIfhOIFwAAIAAEtIlwAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AILhkIGZAAIAAFPImZAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AH2h6IHEAAIAAFyInEAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AHgiTIHyAAIAAGZInyAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AHIitIIjAAIAAHBIojAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AGujIIJYAAIAAHsIpYAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AGTjlIKQAAIAAIZIqQAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AF3kEILKAAIAAJKIrKAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AFZkkIMHAAIAAJ8IsHAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AE6lGINHAAIAAKxItHAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AEZlpIOLAAIAALoIuLAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AD3mOIPRAAIAAMiIvRAAg");
	var mask_graphics_52 = new cjs.Graphics().p("ADTmvIQbAAIAANfIwbAAg");
	var mask_graphics_53 = new cjs.Graphics().p("ACunOIRnAAIAAOdIxnAAg");
	var mask_graphics_54 = new cjs.Graphics().p("ACInvIS2AAIAAPfIy2AAg");
	var mask_graphics_55 = new cjs.Graphics().p("ABkoQIUJAAIAAQhI0JAAg");
	var mask_graphics_56 = new cjs.Graphics().p("ABjoSIULAAIAAQlI0LAAg");
	var mask_graphics_57 = new cjs.Graphics().p("ABhoTIUOAAIAAQnI0OAAg");
	var mask_graphics_58 = new cjs.Graphics().p("ABfoUIUQAAIAAQpI0QAAg");
	var mask_graphics_59 = new cjs.Graphics().p("ABdoVIUTAAIAAQrI0TAAg");
	var mask_graphics_60 = new cjs.Graphics().p("ABboWIUWAAIAAQtI0WAAg");
	var mask_graphics_61 = new cjs.Graphics().p("ABZoXIUZAAIAAQvI0ZAAg");
	var mask_graphics_62 = new cjs.Graphics().p("ABYoYIUbAAIAAQxI0bAAg");
	var mask_graphics_63 = new cjs.Graphics().p("ABWoZIUdAAIAAQzI0dAAg");
	var mask_graphics_64 = new cjs.Graphics().p("ABUoaIUgAAIAAQ1I0gAAg");
	var mask_graphics_65 = new cjs.Graphics().p("ABSobIUjAAIAAQ3I0jAAg");
	var mask_graphics_66 = new cjs.Graphics().p("ABQocIUmAAIAAQ5I0mAAg");
	var mask_graphics_67 = new cjs.Graphics().p("ABOoeIUpAAIAAQ9I0pAAg");
	var mask_graphics_68 = new cjs.Graphics().p("ABNofIUrAAIAAQ/I0rAAg");
	var mask_graphics_69 = new cjs.Graphics().p("ABLogIUtAAIAARBI0tAAg");
	var mask_graphics_70 = new cjs.Graphics().p("ABJohIUwAAIAARDI0wAAg");
	var mask_graphics_71 = new cjs.Graphics().p("ABHoiIUzAAIAARFI0zAAg");
	var mask_graphics_72 = new cjs.Graphics().p("ABFojIU2AAIAARHI02AAg");
	var mask_graphics_73 = new cjs.Graphics().p("ABDokIU5AAIAARJI05AAg");
	var mask_graphics_74 = new cjs.Graphics().p("ABColIU7AAIAARLI07AAg");
	var mask_graphics_75 = new cjs.Graphics().p("ABAomIU9AAIAARNI09AAg");
	var mask_graphics_76 = new cjs.Graphics().p("AA+onIVAAAIAARPI1AAAg");
	var mask_graphics_77 = new cjs.Graphics().p("AA8ooIVDAAIAARRI1DAAg");
	var mask_graphics_78 = new cjs.Graphics().p("AA6oqIVGAAIAARVI1GAAg");
	var mask_graphics_79 = new cjs.Graphics().p("AA4orIVJAAIAARXI1JAAg");
	var mask_graphics_80 = new cjs.Graphics().p("AA3osIVKAAIAARZI1KAAg");
	var mask_graphics_81 = new cjs.Graphics().p("AA1otIVNAAIAARbI1NAAg");
	var mask_graphics_82 = new cjs.Graphics().p("AAzouIVQAAIAARdI1QAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AAxovIVTAAIAARfI1TAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AAvowIVWAAIAARhI1WAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AAtoxIVZAAIAARjI1ZAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AAsoyIVaAAIAARlI1aAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AAqozIVdAAIAARnI1dAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AAoo0IVgAAIAARpI1gAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AAmo2IVjAAIAARtI1jAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AAko3IVmAAIAARvI1mAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AAio4IVpAAIAARxI1pAAg");
	var mask_graphics_92 = new cjs.Graphics().p("AAho5IVqAAIAARzI1qAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AAfo6IVtAAIAAR1I1tAAg");
	var mask_graphics_94 = new cjs.Graphics().p("AAdo7IVwAAIAAR3I1wAAg");
	var mask_graphics_95 = new cjs.Graphics().p("AAbo8IVzAAIAAR5I1zAAg");
	var mask_graphics_96 = new cjs.Graphics().p("AAZo9IV2AAIAAR7I12AAg");
	var mask_graphics_97 = new cjs.Graphics().p("AAXo+IV4AAIAAR9I14AAg");
	var mask_graphics_98 = new cjs.Graphics().p("AAWo/IV6AAIAAR/I16AAg");
	var mask_graphics_99 = new cjs.Graphics().p("AAUpAIV9AAIAASBI19AAg");
	var mask_graphics_100 = new cjs.Graphics().p("AASpCIWAAAIAASFI2AAAg");
	var mask_graphics_101 = new cjs.Graphics().p("AAQpDIWDAAIAASHI2DAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AAOpEIWGAAIAASJI2GAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AAMpFIWIAAIAASLI2IAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AALpGIWKAAIAASNI2KAAg");
	var mask_graphics_105 = new cjs.Graphics().p("AAJpHIWNAAIAASPI2NAAg");
	var mask_graphics_106 = new cjs.Graphics().p("AAHpIIWQAAIAASRI2QAAg");
	var mask_graphics_107 = new cjs.Graphics().p("AAFpJIWTAAIAASTI2TAAg");
	var mask_graphics_108 = new cjs.Graphics().p("AADpKIWWAAIAASVI2WAAg");
	var mask_graphics_109 = new cjs.Graphics().p("AABpLIWYAAIAASXI2YAAg");
	var mask_graphics_110 = new cjs.Graphics().p("AAApMIWaAAIAASZI2aAAg");
	var mask_graphics_111 = new cjs.Graphics().p("AgBpOIWcAAIAASdI2cAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AgDpPIWfAAIAASfI2fAAg");
	var mask_graphics_113 = new cjs.Graphics().p("AgFpQIWiAAIAAShI2iAAg");
	var mask_graphics_114 = new cjs.Graphics().p("AgHpRIWkAAIAASjI2kAAg");
	var mask_graphics_115 = new cjs.Graphics().p("AgIpSIWmAAIAASlI2mAAg");
	var mask_graphics_116 = new cjs.Graphics().p("AgKpTIWpAAIAASnI2pAAg");
	var mask_graphics_117 = new cjs.Graphics().p("AgMpUIWsAAIAASpI2sAAg");
	var mask_graphics_118 = new cjs.Graphics().p("AgOpVIWvAAIAASrI2vAAg");
	var mask_graphics_119 = new cjs.Graphics().p("AgQpWIWxAAIAAStI2xAAg");
	var mask_graphics_120 = new cjs.Graphics().p("AgSpXIWzAAIAASvI2zAAg");
	var mask_graphics_121 = new cjs.Graphics().p("AgYpaIW6AAIAAS1I26AAg");
	var mask_graphics_122 = new cjs.Graphics().p("AghpeIXDAAIAAS9I3DAAg");
	var mask_graphics_123 = new cjs.Graphics().p("AgvpkIXSAAIAATJI3SAAg");
	var mask_graphics_124 = new cjs.Graphics().p("AhAprIXjAAIAATXI3jAAg");
	var mask_graphics_125 = new cjs.Graphics().p("AhWp0IX6AAIAATpI36AAg");
	var mask_graphics_126 = new cjs.Graphics().p("Ahvp/IYUAAIAAT/I4UAAg");
	var mask_graphics_127 = new cjs.Graphics().p("AiMqLIYzAAIAAUXI4zAAg");
	var mask_graphics_128 = new cjs.Graphics().p("AitqZIZVAAIAAUzI5VAAg");
	var mask_graphics_129 = new cjs.Graphics().p("AjRqpIZ7AAIAAVTI57AAg");
	var mask_graphics_130 = new cjs.Graphics().p("Aj6q7IalAAIAAV3I6lAAg");
	var mask_graphics_131 = new cjs.Graphics().p("AknrOIbUAAIAAWdI7UAAg");
	var mask_graphics_132 = new cjs.Graphics().p("AlXriIcHAAIAAXFI8HAAg");
	var mask_graphics_133 = new cjs.Graphics().p("AmLr5Ic9AAIAAXzI89AAg");
	var mask_graphics_134 = new cjs.Graphics().p("AnDsRId3AAIAAYjI93AAg");
	var mask_graphics_135 = new cjs.Graphics().p("An/srIe2AAIAAZXI+2AAg");
	var mask_graphics_136 = new cjs.Graphics().p("Ao/tGIf5AAIAAaNI/5AAg");
	var mask_graphics_137 = new cjs.Graphics().p("AqDtjMAhAAAAIAAbHMghAAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("ArKuCMAiKAAAIAAcFMgiKAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("AsWuiMAjZAAAIAAdFMgjZAAAg");
	var mask_graphics_140 = new cjs.Graphics().p("AtlvEMAkrAAAIAAeJMgkrAAAg");
	var mask_graphics_141 = new cjs.Graphics().p("Au4voMAmCAAAIAAfRMgmCAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("AwPwNMAndAAAMAAAAgbMgndAAAg");
	var mask_graphics_143 = new cjs.Graphics().p("Axqw0MAo8AAAMAAAAhpMgo8AAAg");
	var mask_graphics_144 = new cjs.Graphics().p("AzJxdMAqfAAAMAAAAi7MgqfAAAg");
	var mask_graphics_145 = new cjs.Graphics().p("A0ryHMAsFAAAMAAAAkPMgsFAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("A2RyzMAtxAAAMAAAAlnMgtxAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("A20zEMAuaAAAMAAAAmJMguaAAAg");
	var mask_graphics_148 = new cjs.Graphics().p("A3YzVMAvFAAAMAAAAmrMgvFAAAg");
	var mask_graphics_149 = new cjs.Graphics().p("A33znMAvvAAAMAAAAnPMgvvAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("A4Mz4MAwZAAAMAAAAnxMgwZAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("A4h0KMAxDAAAMAAAAoVMgxDAAAg");
	var mask_graphics_152 = new cjs.Graphics().p("A420bMAxtAAAMAAAAo3MgxtAAAg");
	var mask_graphics_153 = new cjs.Graphics().p("A5L0sMAyXAAAMAAAApZMgyXAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("A5h0+MAzDAAAMAAAAp9MgzDAAAg");
	var mask_graphics_155 = new cjs.Graphics().p("A521PMAztAAAMAAAAqfMgztAAAg");
	var mask_graphics_156 = new cjs.Graphics().p("A6L1gMA0XAAAMAAAArBMg0XAAAg");
	var mask_graphics_157 = new cjs.Graphics().p("A6g1yMA1BAAAMAAAArlMg1BAAAg");
	var mask_graphics_158 = new cjs.Graphics().p("A612DMA1rAAAMAAAAsHMg1rAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:78.1,y:14.8}).wait(1).to({graphics:mask_graphics_28,x:78.2,y:14.8}).wait(1).to({graphics:mask_graphics_29,x:78.4,y:14.9}).wait(1).to({graphics:mask_graphics_30,x:78.8,y:15.2}).wait(1).to({graphics:mask_graphics_31,x:79.3,y:15.5}).wait(1).to({graphics:mask_graphics_32,x:80,y:15.9}).wait(1).to({graphics:mask_graphics_33,x:80.9,y:16.4}).wait(1).to({graphics:mask_graphics_34,x:81.9,y:16.9}).wait(1).to({graphics:mask_graphics_35,x:83,y:17.6}).wait(1).to({graphics:mask_graphics_36,x:84.3,y:18.4}).wait(1).to({graphics:mask_graphics_37,x:85.8,y:19.2}).wait(1).to({graphics:mask_graphics_38,x:87.4,y:20.2}).wait(1).to({graphics:mask_graphics_39,x:89.2,y:21.2}).wait(1).to({graphics:mask_graphics_40,x:91.1,y:22.3}).wait(1).to({graphics:mask_graphics_41,x:93.2,y:23.5}).wait(1).to({graphics:mask_graphics_42,x:95.4,y:24.8}).wait(1).to({graphics:mask_graphics_43,x:97.8,y:26.2}).wait(1).to({graphics:mask_graphics_44,x:100.3,y:27.6}).wait(1).to({graphics:mask_graphics_45,x:103,y:29.2}).wait(1).to({graphics:mask_graphics_46,x:105.9,y:30.8}).wait(1).to({graphics:mask_graphics_47,x:108.9,y:32.6}).wait(1).to({graphics:mask_graphics_48,x:112,y:34.4}).wait(1).to({graphics:mask_graphics_49,x:115.3,y:36.3}).wait(1).to({graphics:mask_graphics_50,x:118.8,y:38.3}).wait(1).to({graphics:mask_graphics_51,x:122.4,y:40.4}).wait(1).to({graphics:mask_graphics_52,x:126.2,y:42.1}).wait(1).to({graphics:mask_graphics_53,x:130.1,y:43.5}).wait(1).to({graphics:mask_graphics_54,x:134.2,y:44.9}).wait(1).to({graphics:mask_graphics_55,x:138.9,y:45.9}).wait(1).to({graphics:mask_graphics_56,x:139,y:45.9}).wait(1).to({graphics:mask_graphics_57,x:139.1,y:45.9}).wait(1).to({graphics:mask_graphics_58,x:139.1,y:45.9}).wait(1).to({graphics:mask_graphics_59,x:139.2,y:45.9}).wait(1).to({graphics:mask_graphics_60,x:139.3,y:45.9}).wait(1).to({graphics:mask_graphics_61,x:139.4,y:45.9}).wait(1).to({graphics:mask_graphics_62,x:139.5,y:45.9}).wait(1).to({graphics:mask_graphics_63,x:139.5,y:45.9}).wait(1).to({graphics:mask_graphics_64,x:139.6,y:45.9}).wait(1).to({graphics:mask_graphics_65,x:139.7,y:45.9}).wait(1).to({graphics:mask_graphics_66,x:139.8,y:45.9}).wait(1).to({graphics:mask_graphics_67,x:139.9,y:45.9}).wait(1).to({graphics:mask_graphics_68,x:140,y:45.9}).wait(1).to({graphics:mask_graphics_69,x:140,y:45.9}).wait(1).to({graphics:mask_graphics_70,x:140.1,y:45.9}).wait(1).to({graphics:mask_graphics_71,x:140.2,y:45.9}).wait(1).to({graphics:mask_graphics_72,x:140.3,y:45.9}).wait(1).to({graphics:mask_graphics_73,x:140.4,y:45.9}).wait(1).to({graphics:mask_graphics_74,x:140.5,y:45.9}).wait(1).to({graphics:mask_graphics_75,x:140.5,y:45.9}).wait(1).to({graphics:mask_graphics_76,x:140.6,y:45.9}).wait(1).to({graphics:mask_graphics_77,x:140.7,y:45.9}).wait(1).to({graphics:mask_graphics_78,x:140.8,y:45.9}).wait(1).to({graphics:mask_graphics_79,x:140.9,y:45.9}).wait(1).to({graphics:mask_graphics_80,x:140.9,y:45.9}).wait(1).to({graphics:mask_graphics_81,x:141,y:45.9}).wait(1).to({graphics:mask_graphics_82,x:141.1,y:45.9}).wait(1).to({graphics:mask_graphics_83,x:141.2,y:45.9}).wait(1).to({graphics:mask_graphics_84,x:141.3,y:45.9}).wait(1).to({graphics:mask_graphics_85,x:141.4,y:45.9}).wait(1).to({graphics:mask_graphics_86,x:141.4,y:45.9}).wait(1).to({graphics:mask_graphics_87,x:141.5,y:45.9}).wait(1).to({graphics:mask_graphics_88,x:141.6,y:45.9}).wait(1).to({graphics:mask_graphics_89,x:141.7,y:45.9}).wait(1).to({graphics:mask_graphics_90,x:141.8,y:45.9}).wait(1).to({graphics:mask_graphics_91,x:141.9,y:45.9}).wait(1).to({graphics:mask_graphics_92,x:141.9,y:45.9}).wait(1).to({graphics:mask_graphics_93,x:142,y:45.9}).wait(1).to({graphics:mask_graphics_94,x:142.1,y:45.9}).wait(1).to({graphics:mask_graphics_95,x:142.2,y:45.9}).wait(1).to({graphics:mask_graphics_96,x:142.3,y:45.9}).wait(1).to({graphics:mask_graphics_97,x:142.3,y:45.9}).wait(1).to({graphics:mask_graphics_98,x:142.4,y:45.9}).wait(1).to({graphics:mask_graphics_99,x:142.5,y:45.9}).wait(1).to({graphics:mask_graphics_100,x:142.6,y:45.9}).wait(1).to({graphics:mask_graphics_101,x:142.7,y:45.9}).wait(1).to({graphics:mask_graphics_102,x:142.8,y:45.9}).wait(1).to({graphics:mask_graphics_103,x:142.8,y:45.9}).wait(1).to({graphics:mask_graphics_104,x:142.9,y:45.9}).wait(1).to({graphics:mask_graphics_105,x:143,y:45.9}).wait(1).to({graphics:mask_graphics_106,x:143.1,y:45.9}).wait(1).to({graphics:mask_graphics_107,x:143.2,y:45.9}).wait(1).to({graphics:mask_graphics_108,x:143.3,y:45.9}).wait(1).to({graphics:mask_graphics_109,x:143.3,y:45.9}).wait(1).to({graphics:mask_graphics_110,x:143.4,y:45.9}).wait(1).to({graphics:mask_graphics_111,x:143.5,y:45.9}).wait(1).to({graphics:mask_graphics_112,x:143.6,y:45.9}).wait(1).to({graphics:mask_graphics_113,x:143.7,y:45.9}).wait(1).to({graphics:mask_graphics_114,x:143.7,y:45.9}).wait(1).to({graphics:mask_graphics_115,x:143.8,y:45.9}).wait(1).to({graphics:mask_graphics_116,x:143.9,y:45.9}).wait(1).to({graphics:mask_graphics_117,x:144,y:45.9}).wait(1).to({graphics:mask_graphics_118,x:144.1,y:45.9}).wait(1).to({graphics:mask_graphics_119,x:144.1,y:45.9}).wait(1).to({graphics:mask_graphics_120,x:144.1,y:45.9}).wait(1).to({graphics:mask_graphics_121,x:144.2,y:45.9}).wait(1).to({graphics:mask_graphics_122,x:144.2,y:45.9}).wait(1).to({graphics:mask_graphics_123,x:144.3,y:45.8}).wait(1).to({graphics:mask_graphics_124,x:144.3,y:45.8}).wait(1).to({graphics:mask_graphics_125,x:144.4,y:45.7}).wait(1).to({graphics:mask_graphics_126,x:144.5,y:45.7}).wait(1).to({graphics:mask_graphics_127,x:144.7,y:45.6}).wait(1).to({graphics:mask_graphics_128,x:144.8,y:45.6}).wait(1).to({graphics:mask_graphics_129,x:145,y:45.5}).wait(1).to({graphics:mask_graphics_130,x:145.1,y:45.4}).wait(1).to({graphics:mask_graphics_131,x:145.3,y:45.3}).wait(1).to({graphics:mask_graphics_132,x:145.6,y:45.2}).wait(1).to({graphics:mask_graphics_133,x:145.8,y:45.1}).wait(1).to({graphics:mask_graphics_134,x:146,y:45}).wait(1).to({graphics:mask_graphics_135,x:146.3,y:44.8}).wait(1).to({graphics:mask_graphics_136,x:146.6,y:44.7}).wait(1).to({graphics:mask_graphics_137,x:146.9,y:44.5}).wait(1).to({graphics:mask_graphics_138,x:147.2,y:44.4}).wait(1).to({graphics:mask_graphics_139,x:147.5,y:44.2}).wait(1).to({graphics:mask_graphics_140,x:147.8,y:44.1}).wait(1).to({graphics:mask_graphics_141,x:148.2,y:43.9}).wait(1).to({graphics:mask_graphics_142,x:148.6,y:43.7}).wait(1).to({graphics:mask_graphics_143,x:149,y:43.5}).wait(1).to({graphics:mask_graphics_144,x:149.4,y:43.3}).wait(1).to({graphics:mask_graphics_145,x:149.8,y:43.1}).wait(1).to({graphics:mask_graphics_146,x:150.4,y:42.9}).wait(1).to({graphics:mask_graphics_147,x:151,y:42.8}).wait(1).to({graphics:mask_graphics_148,x:151.7,y:42.6}).wait(1).to({graphics:mask_graphics_149,x:152,y:42.5}).wait(1).to({graphics:mask_graphics_150,x:151.2,y:42.4}).wait(1).to({graphics:mask_graphics_151,x:150.4,y:42.2}).wait(1).to({graphics:mask_graphics_152,x:149.6,y:42.1}).wait(1).to({graphics:mask_graphics_153,x:148.8,y:42}).wait(1).to({graphics:mask_graphics_154,x:148,y:41.8}).wait(1).to({graphics:mask_graphics_155,x:147.3,y:41.7}).wait(1).to({graphics:mask_graphics_156,x:146.5,y:41.6}).wait(1).to({graphics:mask_graphics_157,x:145.7,y:41.4}).wait(1).to({graphics:mask_graphics_158,x:144.9,y:41.3}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_6 = new lib.echo3_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.7,28.6,0.036,0.036,0,0,0,158.8,18.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({regX:156,regY:18.2,scaleX:0.38,scaleY:0.38,x:216.3,y:91.7},28,cjs.Ease.get(-1)).to({regY:18.3,scaleX:0.43,scaleY:0.43,x:218.7,y:97.8},64).to({regY:18.2,scaleX:0.83,scaleY:0.83,x:157,y:123.1},27,cjs.Ease.get(-1)).to({scaleX:0.97,scaleY:0.97,x:149,y:136.7,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_7 = new lib.echo1_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(154,24.8,0.036,0.036,0,0,0,65.5,129.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({regX:63.7,regY:131.5,scaleX:0.4,scaleY:0.4,x:252.6,y:45.7},28,cjs.Ease.get(-1)).to({regX:63.8,regY:131.6,scaleX:0.46,scaleY:0.46,rotation:9.7,x:260.8,y:51.8},64).to({regY:131.2,scaleX:0.92,scaleY:0.92,rotation:20.2,x:256.3,y:96.4},27,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,rotation:27.9,x:265.4,y:105.5,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_8 = new lib.echo2_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(148.4,25.4,0.036,0.036,0,0,0,98.9,112.8);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({regX:97.8,regY:113.9,scaleX:0.4,scaleY:0.4,x:189.2,y:52.9},28,cjs.Ease.get(-1)).to({regY:114,scaleX:0.46,scaleY:0.46,rotation:-4,x:177.9,y:54},64).to({regX:97.4,regY:113.8,scaleX:0.92,scaleY:0.92,rotation:-15.7,x:95.2,y:77.1},27,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,rotation:-20.9,x:73.2,y:71.1,alpha:0},12).to({_off:true},1).wait(56));

	// game_BG
	this.instance_9 = new lib.Tween4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.6,24.8,0.036,0.036,0,0,0,2.8,-1.4);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(213.5,45.9,0.403,0.403,0,0,0,0.4,0.1);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({_off:true,regX:0.4,regY:0.1,scaleX:0.4,scaleY:0.4,x:213.5,y:45.9},28,cjs.Ease.get(-1)).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},28,cjs.Ease.get(-1)).to({regX:0.5,scaleX:0.46,scaleY:0.46,x:215.6,y:46},64).to({regX:0.1,scaleX:0.92,scaleY:0.92,x:154.4,y:42},27,cjs.Ease.get(-1)).to({regX:0.2,scaleX:1.07,scaleY:1.07,x:146,y:41.6,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_48 = new cjs.Graphics().p("Aq2A+IAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_1_graphics_48,x:66.1,y:18}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance_11 = new lib.text1_mc("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(64.2,29.7,0.533,0.533,0,0,0,0.2,0.2);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween7("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(64.2,18,0.533,0.533,0,0,0,0.2,0.2);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(53).to({_off:false},0).to({_off:true,y:18},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},9).wait(57).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:-137.4,y:3.7},27,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:1.78,scaleY:1.78,x:-274.1,y:-8.3,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_48 = new cjs.Graphics().p("Aq2A+IAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_2_graphics_48,x:66.1,y:30.2}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_13 = new lib.text2_mc("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(64.2,41.9,0.533,0.533,0,0,0,0.2,0.1);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween9("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-274.1,37.7,1.776,1.776,0,0,0,0.1,-0.1);
	this.instance_14.alpha = 0;

	var maskedShapeInstanceList = [this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},58).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},52).to({state:[{t:this.instance_13}]},27).to({state:[{t:this.instance_14}]},12).to({state:[]},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(58).to({_off:false},0).to({regY:0.2,y:29.7},9).wait(52).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-137.3,y:28.2},27,cjs.Ease.get(-1)).to({_off:true,regY:-0.1,scaleX:1.78,scaleY:1.78,x:-274.1,y:37.7,alpha:0},12).wait(57));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_48 = new cjs.Graphics().p("Aq2A9IAAh5IVtAAIAAB5g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_3_graphics_48,x:68.5,y:37.7}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 13
	this.instance_15 = new lib.text3_mc("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(107.1,47.9,0.533,0.533,0,0,0,0.2,0.3);
	this.instance_15._off = true;

	this.instance_16 = new lib.text3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-136.7,77.5,1.776,1.776,0,0,0,0.1,0.1);
	this.instance_16.alpha = 0;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},63).to({state:[{t:this.instance_15}]},9).to({state:[{t:this.instance_15}]},47).to({state:[{t:this.instance_15}]},27).to({state:[{t:this.instance_16}]},12).to({state:[]},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(63).to({_off:false},0).to({regY:0.2,y:37.7},9).wait(47).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-51.6,y:49.7},27,cjs.Ease.get(-1)).to({_off:true,scaleX:1.78,scaleY:1.78,x:-136.7,y:77.5,alpha:0},12).wait(57));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(255.2,26,0.53,0.53,0,0,0,128,-4.6);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(148).to({_off:false},0).wait(67));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_151 = new cjs.Graphics().p("AnVDFIAAmJIOrAAIAAGJg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_4_graphics_151,x:170.7,y:25.7}).wait(64));

	// price
	this.instance_17 = new lib.newPrice();
	this.instance_17.parent = this;
	this.instance_17.setTransform(169.8,59.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(151).to({_off:false},0).to({y:24.1},10,cjs.Ease.get(1)).wait(54));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_151 = new cjs.Graphics().p("An9BEIAAiHIP7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_5_graphics_151,x:63.4,y:26.2}).wait(64));

	// oculus
	this.instance_18 = new lib.logo_oculus();
	this.instance_18.parent = this;
	this.instance_18.setTransform(64,40.1,0.07,0.07,0,0,0,155.6,288.1);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(151).to({_off:false},0).to({y:25.1},10,cjs.Ease.get(1)).wait(54));

	// bg
	this.instance_19 = new lib.bg();
	this.instance_19.parent = this;
	this.instance_19.setTransform(176,125,0.802,1,0,0,0,150.2,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(146).to({regX:150,scaleX:1,x:186.8},0).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.9,25,304.6,50);
// library properties:
lib.properties = {
	id: '10D470DC8F804C67AEEAF258F033806A',
	width: 300,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap34.jpg", id:"Bitmap34"},
		{src:"images/echo1.jpg", id:"echo1"},
		{src:"images/echo2.jpg", id:"echo2"},
		{src:"images/echo3.jpg", id:"echo3"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_5_roborecall.jpg", id:"game_5_roborecall"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"}
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
an.compositions['10D470DC8F804C67AEEAF258F033806A'] = {
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