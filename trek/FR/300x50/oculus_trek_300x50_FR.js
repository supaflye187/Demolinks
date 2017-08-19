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


(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,50);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAhQgHgCgGgFQgFgEgCgHQgCgEgBgLQABgFACgKQACgGAFgFQAGgEAHgCQAGgCAHgBIAMACIALADIgBALQgFgDgHgBIgKgBQgFAAgEACQgEABgEADQgDADgBAFQgCAEAAAGQAAAGACAFQABAEADADQAEAEAEABQAEACAFAAIAKgCQAHgBAFgCIABALIgLADIgMABQgHAAgGgCg");
	this.shape.setTransform(93.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAFgFQAEgEAGgCQAGgCAGgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQABAGABAEQACADAEADQADACAEACIAJABIAMgCQAGgBAFgCIABALIgMADIgMABQgHAAgHgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_1.setTransform(86.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_2.setTransform(78.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_3.setTransform(71.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAiIgMgDIADgLIAKADQAGACAGAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgCgDAAgFQAAgFACgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgFgBIgMgBQgEAAgFACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAFADIANAEIAHACQAEABADABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgDACgGABQgFABgFAAIgNgBg");
	this.shape_4.setTransform(60.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAwQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgGACgJQADgGAEgFQAFgEAGgCQAHgCAGgBQAGABAGACQAFACAEAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGACAEQABADADADQADACAFACIAJABIAMgBQAGgCAGgCIAAALIgMADIgMABQgIAAgGgCgAAVAKIgCgJQgCgDgCgDIgGgDIgIgBIgGABIgHADIgFAGQgCAEAAAFIAoAAIAAAAgAgDgbIAPgXIALACIgSAVg");
	this.shape_5.setTransform(53.7,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAArQgCgBgDgEIgCgKIgBgNIAAgcIgNAAIAAgKIANAAIAAgVIALAAIAAAVIATAAIAAAKIgTAAIAAAeQAAAKACAEIADADIAEABIAKgCIAAAKQgGACgHAAQgGAAgDgCg");
	this.shape_6.setTransform(47.3,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_7.setTransform(43.2,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_8.setTransform(39.9,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_9.setTransform(34.1,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJAwQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgGADgJQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAGAAAIIAAAFIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgBQAHgCAEgCIABALIgMADIgMABQgIAAgGgCgAAUAKIgBgJQgBgDgDgDIgGgDIgIgBIgHABIgGADIgFAGQgCAEAAAFIAnAAIAAAAgAgCgbIANgXIANACIgSAVg");
	this.shape_10.setTransform(26.6,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAiIAAhBIAMAAIAAAMIAAAAQAEgGADgEIAGgDQADgCAFAAIAFACIAAALIgHgBQgFAAgDACQgEACgCADIgDAIIgCAIIAAAhg");
	this.shape_11.setTransform(20.5,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAiIgMgDIADgLIAKADQAGACAGAAQAHABAEgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgCgDAAgFQAAgFACgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgFgBIgMgBQgEAAgFACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAFADIANAEIAHACQAEABADABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgDACgGABQgFABgFAAIgNgBg");
	this.shape_12.setTransform(10.7,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAEgFQAFgEAGgCQAGgCAHgBQAGABAGACQAFACAEAEQAFAFACAGQACAHAAAIIAAAEIgzAAQABAGACAEQABADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgCgEgCgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_13.setTransform(3.7,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_14.setTransform(-1.8,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_15.setTransform(-5.1,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAFgCAGgBQAIABAFACQAFACAFAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAGgBAFgCIABALIgMADIgMABQgHAAgHgCgAAUgEIgBgJQgBgEgDgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_16.setTransform(-10.6,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_17.setTransform(-18,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAgQgEgCgDgEQgDgDgBgFQgCgFABgGIAAgoIALAAIAAAmIABAIQABADACADQACACACACQADABAFAAQADAAAFgCQADgCAEgDIAEgJQACgEgBgGIAAgfIANAAIAABBIgMAAIAAgMIgBAAQgFAIgEACIgHADIgHABQgGAAgGgCg");
	this.shape_18.setTransform(-25.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAiIgHgCQgGgCgFgFQgFgFgCgGQgCgHAAgHQAAgHACgGQACgHAFgEQAFgFAGgCIAHgDIAHgBQAGABAJADQAGACAGAFQAEAEACAHQADAGAAAHQAAAHgDAHQgCAGgEAFQgGAFgGACQgJADgGAAgAgKgWQgEACgDADQgCAEgCAEQgBAEgBAFQABAFABAEIAEAIQADAEAEACQAFACAFAAQAGAAAFgCQAEgCADgEIAEgIQACgEgBgFQABgFgCgEQgCgEgCgEQgDgDgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(-33.6,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAiIAAgnIgBgHIgCgGQgCgDgDAAQgDgCgEAAQgEAAgEACQgEABgDADIgFAIQgCAGAAAEIAAAhIgMAAIAAhBIAMAAIAAAMIAAAAIAFgGIAFgEIAHgDIAIgCQAGABAFACQAEACADADQADAEABAEQACAGAAAFIAAApg");
	this.shape_20.setTransform(-41.9,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAFgFQAEgEAGgCQAGgCAGgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQABAGABAEQACADAEADQADACAEACIAJABIAMgCQAGgBAFgCIABALIgMADIgMABQgHAAgHgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_21.setTransform(-53.3,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAzQgGgDgEgFQgEgEgDgHQgCgGAAgIQAAgIACgHQADgFAEgFQAFgFAFgCQAGgDAHAAIAIABIAHADQAEACAGAIIABAAIAAgMIAAglIALAAIAABnIgLAAIAAgMIgGAGIgGAFIgHACIgHABQgHAAgGgCgAgIgFIgIAFQgDADgBAEQgCAFAAAGQAAAFACAFQABAFADADQAEADAEACQAEACAEAAQAFAAAFgCQAEgCADgEQAEgDABgFQACgEAAgFQAAgGgCgEIgFgIQgDgDgFgBQgEgCgFAAQgEAAgEABg");
	this.shape_22.setTransform(-61.6,-1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgbAhIAAgHIAlgwIgkAAIAAgKIA1AAIAAAGIgmAyIAnAAIAAAJg");
	this.shape_23.setTransform(-72.5,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAEgFQAFgEAGgCQAGgCAHgBQAGABAGACQAFACAEAEQAFAFACAGQACAHAAAIIAAAEIgzAAQABAGACAEQABADADADQAEACAEACIAJABIAMgCQAHgBAFgCIAAALIgMADIgMABQgHAAgHgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_24.setTransform(-79.4,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_25.setTransform(-86.8,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_26.setTransform(-92,-1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAzIgohlIAOAAIAfBVIAghVIANAAIgnBlg");
	this.shape_27.setTransform(-98.5,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-12.2,204.6,20.8);


(lib.text2_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape.setTransform(44.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_1.setTransform(35,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_2.setTransform(25.8,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(15.9,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHA+IAAhtIgpAAIAAgOIBiAAIAAAOIgrAAIAABtg");
	this.shape_4.setTransform(5.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAtIAAgoIgoAAIAAgKIAoAAIAAgmIAKAAIAAAmIAmAAIAAAKIgmAAIAAAog");
	this.shape_5.setTransform(-9.7,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAA1QgDgCgCgFQgDgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMABAEQACADACABIAFABQAIAAAFgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_6.setTransform(-22.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGADgDQACgEAEgBQADgCAHAAIANACIAAAMIgLgBQgGAAgDAEQgCADAAAKIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_7.setTransform(-28.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQADgEADAAQAEAAADAEQACACAAAEQAAAFgCACQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(-33.4,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_9.setTransform(-40.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-12.2,99.9,24.4);


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
	this.shape.graphics.f("#000000").s().p("AgDBfQgOgFgLgIQgMgJgIgNQgGgIgGgVIgUAAIABgWIARAAIAAgJIAAgJIgSAAIABgVIATAAQADgLAJgSQAIgNAMgJQALgIAOgEQAPgFAQAAQANAAAOADQAMADAPAGIgCAfQgNgFgNgDQgNgCgNAAQgJAAgJACQgIADgGAEQgGAEgFAGQgFAIgDAIIBZAAIgEAVIhZAAIAAAJIAAAJIBUAAIgEAWIhMAAQADAIAFAHQAFAHAGAFQAGAEAIACQAJACAJAAQANAAANgDQANgDANgFIACAhQgPAFgMADQgOADgNgBQgRAAgOgDg");
	this.shape.setTransform(70.5,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhCCXQARgOAeghQAVgZARgcQgRADgVAAQgUABgSgIQgQgGgOgOQgNgNgIgQQgHgTAAgUQAAgRAJgdQAGgOASgVQAQgOAVgIQAOgFAggDQASAAAeAJQAVAIAPAPQAPAOAIAUQAIATAAAWQAAAXgIAaQgIAagPAbQgOAbgSAYQgSAagVATgAgShYQgIADgHAHQgGAHgDAIQgEAIAAAKQAAAKAEAIQADAJAGAHQAHAGAIAEQAJADAKgBQALABAJgDQAIgEAIgGQAGgHADgJQADgIAAgKQAAgKgDgIQgDgIgGgHQgIgHgIgDQgJgEgLAAQgKAAgJAEg");
	this.shape_1.setTransform(47.3,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKCUIAAg3IiCAAIAAg5ICDi3IBCAAIAAC3IAsAAIgCA5IgqAAIAAA3gAgyAkIA8AAIAAhVIAAAAg");
	this.shape_2.setTransform(20.7,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALCUIAAg3IiDAAIAAg5ICDi3IBCAAIAAC3IAsAAIgCA5IgqAAIAAA3gAgyAkIA9AAIAAhVIgBAAg");
	this.shape_3.setTransform(-6.1,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-21.2,-2.4,103.3,55.7), null);


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
	this.shape_9.setTransform(55.1,168.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-28.8,134.9,231.2,62.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap16, null, new cjs.Matrix2D(1,0,0,1,-159.9,-67.3)).s().p("AmcJwIAAkJIrxAAIAAvWMAkaAAAIAAPhIskAAIAABqIoRAAIAACUg");
	this.shape.setTransform(116.6,67.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,4.9,233.1,124.9), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape.setTransform(175.6,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAdIgKgDIACgHIAJAEIALABIAFgBIAFgBIADgEQACgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgDgDIgMgEQgJgBgDgCQgDgCgBgCQgCgDAAgEQAAgEACgEIAFgFIAHgDIAHgBIAKABIAJAEIgCAHQgDgDgFgBIgJgBQgGAAgDACIgEADIgBAFQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAIAEADIALADIAHACIAGACIAEAFQACADgBAEQAAAEgBAEIgGAGQgDACgEABIgIABIgMgCg");
	this.shape_1.setTransform(171.2,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAcQgEgCgDgDQgCgDgBgEIgBgJIAAgkIAHAAIAAAjIABAGIACAGIAFAEQADACAEAAQADAAAEgDQAEgBADgDQADgEABgFQACgEAAgFIAAgcIAHAAIAAA5IgHAAIAAgMIAAAAQgEAHgEADIgGADIgIABQgFAAgEgCg");
	this.shape_2.setTransform(165,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAtIAAhaIAHAAIAABag");
	this.shape_3.setTransform(160.1,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAdQgGgCgEgEQgEgDgDgGQgBgEgBgKQAAgEACgJQADgGAEgEQAEgDAGgCQAFgCAHAAIAJABIAJADIAAAHIgJgDIgJgBQgGAAgDABQgEACgDADQgEADgCAEQgBAFAAAFQAAAGABAFQACAEAEADQADADAEACQADABAGAAIAJgBIAJgDIAAAHQgDACgGABIgJABQgHAAgFgCg");
	this.shape_4.setTransform(155.6,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAeIAAgjIgBgHIgCgGQgCgCgCgBQgEgCgDABIgHABIgIAFQgDADgBAEQgDAFAAAFIAAAdIgGAAIAAg6IAGAAIAAANIABAAIADgGIAFgEIAGgDIAIgBQAFAAAEABIAHAGIADAHIABAJIAAAkg");
	this.shape_5.setTransform(148.9,9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDArIAAg6IAHAAIAAA6gAgDghQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_6.setTransform(143.9,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAeIAAgjIgBgHIgCgGQgCgCgCgBQgEgCgDABIgHABIgIAFQgDADgBAEQgDAFAAAFIAAAdIgGAAIAAg6IAGAAIAAANIABAAIADgGIAFgEIAGgDIAIgBQAFAAAEABIAHAGIADAHIABAJIAAAkg");
	this.shape_7.setTransform(135.8,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMAcQgFgCgFgEQgDgEgCgGQgDgGAAgGQAAgFADgGQACgGADgEQAFgEAFgCQAEgCAIgBQAFAAAIADQAFACAEAEQAEAEACAGQADAGAAAFQAAAGgDAGQgCAGgEAEQgEAEgFACQgIADgFAAQgIgBgEgCgAgJgVQgFACgCADQgDADgCAFIgBAIQAAAFABAEQACAFADADQACADAFACQAEACAFAAQAGAAAEgCQAFgCACgDQADgDACgFQABgEAAgFIgBgIQgCgFgDgDQgCgDgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_8.setTransform(128.6,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAeIAAgjIgBgHIgCgGQgBgCgEgBQgDgCgDABIgHABIgHAFQgEADgCAEQgCAFAAAFIAAAdIgHAAIAAg6IAHAAIAAANIABAAIADgGIAFgEIAHgDIAHgBQAFAAAEABIAHAGIAEAHIAAAJIAAAkg");
	this.shape_9.setTransform(121.3,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAdIgTgZIgRAZIgJAAIAXgeIgWgbIAKAAIAPAWIAQgWIAKAAIgWAbIAYAeg");
	this.shape_10.setTransform(111.7,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNAcQgEgCgDgDQgCgDgBgEIgBgJIAAgkIAHAAIAAAjIABAGIACAGIAFAEQADACAEAAQADAAAEgDQAEgBADgDQADgEABgFQACgEAAgFIAAgcIAHAAIAAA5IgHAAIAAgMIAAAAQgEAHgEADIgGADIgIABQgFAAgEgCg");
	this.shape_11.setTransform(105.2,9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIAdQgGgCgEgEQgEgDgCgGQgCgEAAgKQgBgEADgJQACgGAFgEQADgDAGgCQAEgCAFAAQAGAAAFACQAEACAEADQAEAEACAGQACAGAAAHIAAADIguAAQAAAGACAEQABAEADACQADADAEABQAFABADAAIALgBIALgDIAAAHQgEACgHABIgKABQgGAAgGgCgAAUgCQAAgFgBgEQgCgEgCgDIgGgEQgDgBgFAAQgDAAgEABQgDABgDADQgDACgBAEQgCAEgBAGIAnAAIAAAAg");
	this.shape_12.setTransform(98.4,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMA6IAAgHIAIABIAEgBIACgDIABgMIAAhCIAIAAIAABEIgBAJQgBAEgCADIgEADQgDACgEAAIgIgBgAADgwQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_13.setTransform(92.9,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAdIgKgDIACgHIAJAEIAKABIAGgBIAFgBIADgEQACgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgDgDIgMgEQgJgBgDgCQgDgCgBgCQgCgDAAgEQAAgEACgEIAFgFIAHgDIAHgBIAKABIAJAEIgCAHQgDgDgFgBIgJgBQgGAAgDACIgEADIgBAFQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAIAEADIALADIAHACIAGACIAEAFQACADgBAEQAAAEgBAEIgGAGQgDACgFABIgIABIgLgCg");
	this.shape_14.setTransform(86.1,9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAeIAAgjIgBgHIgCgGQgBgCgEgBQgDgCgDABIgHABIgHAFQgEADgCAEQgCAFAAAFIAAAdIgHAAIAAg6IAHAAIAAANIABAAIADgGIAFgEIAHgDIAHgBQAFAAAEABIAHAGIAEAHIAAAJIAAAkg");
	this.shape_15.setTransform(79.8,9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDArIAAg6IAHAAIAAA6gAgDghQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(74.9,8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAdQgEAAgDgDQgDgCgCgEQgCgEAAgFQAAgEACgEIAFgEIAHgEIAJgBIAVACIAAgEQAAgEgCgDQgBgDgCgBIgFgDIgIgBIgKABIgKAEIAAgHIAKgDIALgBIAJABQAGABACADQAEADACAEQABAEAAAFIAAAlIgHAAIAAgMIgBAAQgBAEgDADIgFADIgHADIgFAAIgIgBgAgIABIgFABIgDAEQgBACgBADQABAEABADIADADIAFADIAGAAIAHgBIAGgEIAGgHQACgFAAgGIgUgBg");
	this.shape_17.setTransform(69.8,9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAlQgCgBgBgDQgCgEAAgFIgBgMIAAgaIgLAAIAAgGIALAAIAAgSIAHAAIAAASIARAAIAAAGIgRAAIAAAeIABAMIADAEIAEABIAJgCIAAAGQgEACgGAAQgFAAgDgCg");
	this.shape_18.setTransform(64.5,8.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAeIAAg6IAHAAIAAANIAAAAQADgGAEgDIAEgEIAHgBIAEAAIAAAIIgFAAQgEAAgEABQgCACgCAEQgDADgBADQgBAFAAAEIAAAdg");
	this.shape_19.setTransform(60.6,9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAdQgGgCgEgEQgEgDgCgGQgCgEgBgKQABgEACgJQACgGAEgEQAEgDAFgCQAFgCAFAAQAGAAAFACQAEACAEADQAEAEABAGQACAGAAAHIAAADIguAAQAAAGACAEQACAEADACQADADAFABQADABAFAAIAKgBIAKgDIABAHQgEACgGABIgLABQgGAAgGgCgAAUgCQAAgFgCgEQAAgEgDgDIgGgEQgDgBgFAAQgDAAgDABQgEABgDADQgDACgCAEQgBAEgBAGIAnAAIAAAAg");
	this.shape_20.setTransform(54.7,9.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAtIgKgCIgIgEIgGgGIgFgGIgDgIIgCgJIgBgKIABgJIACgJIADgIIAFgGIAGgGIAIgEIAKgCIAKgBIAPABIAPAFIAAAIIgQgFIgPgCIgIABIgIACIgGADIgFAFIgEAGIgDAGQgCAKAAAFQAAALACAFIADAGIAEAGIAFAFIAGADIAIACIAIABQAIAAAHgCIAQgFIAAAIIgPAFIgPABIgKgBg");
	this.shape_21.setTransform(47,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(38.9,-2.8,142,21.7), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgCIACgBIADABIABACQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(168.9,-165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAUIgHgEQgCgDgCgEIgCgJIACgIQACgEADgDIAFgEIAGgBIAIABIAGAEQACADABADQACAEgBAFIAAACIgeAAIABAHIADAEQACACADAAIAFABIAHgBIAHgCIAAAFIgHACIgHABIgHgBgAAOgBIgBgGIgDgFIgEgCIgGgBIgDABIgFACIgDAEIgBAHIAaAAIAAAAg");
	this.shape_1.setTransform(165.3,-166.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAdIgHgEQgDgDgBgEIgCgJIACgJQACgDADgDIAGgEIAFgBIAIABIAGAEQACADABADQABADAAAFIAAADIgeAAIABAHIADAEQACACADAAIAGABIAGgBIAHgCIAAAFIgHACIgGABIgIgBgAAOAHIgBgGIgDgEIgEgCIgGgBIgDABIgFACIgDADIgBAHIAaAAIAAAAgAgBgPIAIgOIAGACIgLAMg");
	this.shape_2.setTransform(160.5,-167.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAZQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgBgGIAAgIIAAgRIgIAAIAAgEIAIAAIAAgMIAEAAIAAAMIALAAIAAAEIgLAAIAAATIAAAJIACACIADABIAGgBIAAAEIgHABIgFgBg");
	this.shape_3.setTransform(156.5,-167.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAdIAAgnIAEAAIAAAngAgCgVIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_4.setTransform(153.8,-167.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaAUIAAgXIgBgFIgCgDIgDgDIgDgBIgGABIgEAEIgEAEIgBAGIAAAUIgDAAIAAgXIgBgFIgCgDIgCgDIgFgBIgFABIgFADIgDAGIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIADgEIADgDIAEgCIAFAAIAFAAIAEADIACADIABAEIACgEIAEgDIAEgCIAGgBIAFABIAFADIACAFIAAAGIAAAYg");
	this.shape_5.setTransform(148.8,-166.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBAdIAAgnIAEAAIAAAngAgCgVIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_6.setTransform(143.9,-167.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_7.setTransform(141.7,-167.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAUIgHgEQgDgDgBgEIgCgJIACgIQACgEADgDIAGgEIAFgBIAIABIAGAEQACADABADQABAEAAAFIAAACIgeAAIABAHIADAEQACACADAAIAGABIAGgBIAHgCIAAAFIgHACIgGABIgIgBgAAOgBIgBgGIgDgFIgEgCIgGgBIgDABIgFACIgDAEIgBAHIAaAAIAAAAg");
	this.shape_8.setTransform(135.7,-166.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAeIgHgEQgCgDgCgEQgBgEAAgFQAAgEABgEQACgDACgDIAHgEIAHgBIAEAAIAFACIAGAHIAAgIIAAgWIAFAAIAAA8IgFAAIAAgIIgDAEIgEADIgEACIgEAAIgHgBgAgFgEIgFAEIgDAEIgBAHIABAGIADAFIAFAEIAFABQADAAADgCQADgBACgCIADgFQACgDAAgEQAAgDgCgDQgBgDgCgBIgFgEIgGgBIgFABg");
	this.shape_9.setTransform(130.5,-167.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHATQgEgBgDgDIgEgHQgCgEAAgEIACgHIAEgHQADgDAEgBIAHgCIAJACQADABADADIAFAHIABAHIgBAIIgFAHQgDADgDABIgJACIgHgCgAgGgOQgDABgCADIgDAFIAAAFIAAAGIADAFIAFAEQADABADAAQAEAAADgBQADgBACgDIACgFIABgGIgBgFIgCgFQgCgDgDgBQgDgBgEAAQgDAAgDABg");
	this.shape_10.setTransform(125.2,-166.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBAdIAAgnIAEAAIAAAngAgCgVIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_11.setTransform(121.5,-167.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAUIAAgmIAFAAIAAAIIAAAAIAEgGIADgCIAEgBIADAAIAAAFIgDAAIgGABIgCADIgCAFIgBAGIAAATg");
	this.shape_12.setTransform(119,-166.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAdIgHgEQgCgDgCgEIgBgJIABgJQABgDAEgDIAFgEIAHgBIAHABIAFAEQADADABADQABADAAAFIAAADIgfAAIACAHIADAEQACACADAAIAFABIAIgBIAHgCIAAAFIgHACIgIABIgHgBgAANAHIgBgGIgCgEIgEgCIgFgBIgFABIgEACIgDADIgCAHIAaAAIAAAAgAgBgPIAJgOIAFACIgLAMg");
	this.shape_13.setTransform(114.7,-167.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAeIAAg6IAFAAIAAAIIADgEIAEgDIAEgCIAEAAIAIABIAGAEQADADABAEIABAJQAAAEgBAEQgBADgDADIgGAEIgIABIgEAAIgEgCIgEgDIgDgEIAAAIIAAAUgAgFgXQgDABgCACQgCACgBADIgBAGIABAHIADAEIAFAEIAGABIAGgBIAEgEIADgEIABgHIgBgGIgDgFIgEgEIgGgBQgDAAgDACg");
	this.shape_14.setTransform(109.7,-165.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAUIgHgEQgCgDgCgEIgBgJIABgIQABgEAEgDIAFgEIAHgBIAHABIAFAEQADADABADQABAEAAAFIAAACIgfAAIACAHIADAEQACACADAAIAFABIAHgBIAIgCIAAAFIgIACIgHABIgHgBgAANgBIgBgGIgCgFIgEgCIgFgBIgFABIgDACIgEAEIgCAHIAaAAIAAAAg");
	this.shape_15.setTransform(102.1,-166.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMAUIAAgXIAAgFIgCgDQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgEgBIgFABIgFADIgDAGQgBADAAADIAAATIgFAAIAAgmIAFAAIAAAIIACgEIAEgCIAEgCIAEgBIAHABIAEADIADAFIAAAGIAAAYg");
	this.shape_16.setTransform(97.1,-166.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJATIgEgDIgCgFIgBgGIAAgYIAFAAIAAAXIAAAEIACAEIADADIAFABIAEgBIAFgEIADgFQABgEAAgDIAAgSIAFAAIAAAmIgFAAIAAgIQgDAFgCABIgFACIgEABIgHgBg");
	this.shape_17.setTransform(92.1,-166.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAZQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgBgGIAAgIIAAgRIgIAAIAAgEIAIAAIAAgMIAEAAIAAAMIALAAIAAAEIgLAAIAAATIAAAJIACACIADABIAGgBIAAAEIgHABIgFgBg");
	this.shape_18.setTransform(85.6,-167.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAMAUIAAgXIAAgFIgCgDQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgEgBIgFABIgFADIgDAGQgBADAAADIAAATIgFAAIAAgmIAFAAIAAAIIACgEIAEgCIAEgCIAEgBIAHABIAEADIADAFIAAAGIAAAYg");
	this.shape_19.setTransform(81.5,-166.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAUIgEgDIgDgDQgBgDgBgEIABgFIAEgDIAEgBIAHgBIANABIAAgDIgBgFIgBgCIgEgCIgGgBIgGABIgHACIAAgFIAHgCIAHgBIAHABIAFADIAEAFIABAGIAAAZIgGAAIAAgIIgCAEIgEACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDABIgGgBgAgIACIgCACIgBAEIABAEIACADIACABIAFAAIAEgBIAFgCQACgCABgDQABgDAAgEIgMgBIgFAAIgDACg");
	this.shape_20.setTransform(76.5,-166.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAeIgHgEQgCgDgCgEQgBgEAAgFQAAgEABgEQACgDACgDIAHgEIAHgBIAEAAIAFACIAGAHIAAgIIAAgWIAFAAIAAA8IgFAAIAAgIIgDAEIgEADIgEACIgEAAIgHgBgAgFgEQgDABgCADIgDAEIgBAHIABAGIADAFQACADADABIAFABQADAAADgCQADgBACgCIADgFQACgDAAgEQAAgDgCgDQgBgDgCgBIgFgEIgGgBIgFABg");
	this.shape_21.setTransform(71.3,-167.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAMAUIAAgXIAAgFIgCgDQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgEgBIgFABIgFADIgDAGQgBADAAADIAAATIgFAAIAAgmIAFAAIAAAIIACgEIAEgCIAEgCIAEgBIAHABIAEADIADAFIAAAGIAAAYg");
	this.shape_22.setTransform(66.2,-166.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAUIgHgEQgDgDgBgEIgBgJIABgIQABgEADgDIAHgEIAGgBIAHABIAFAEQADADABADQACAEAAAFIAAACIggAAIACAHIADAEQACACADAAIAGABIAHgBIAGgCIAAAFIgGACIgHABIgIgBgAANgBIgBgGIgCgFIgEgCIgFgBIgFABIgDACIgEAEIgCAHIAaAAIAAAAg");
	this.shape_23.setTransform(61.3,-166.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAeIAAg7IAVAAIAIABIAGAEIADAGIABAIIgBAHIgDAFIgGAEQgEACgEAAIgQAAIAAAWgAgOADIAQAAIAGgBIAEgCIACgEIABgGIgBgGIgCgEIgEgDIgGgBIgQAAg");
	this.shape_24.setTransform(56.3,-167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(51.1,-174.9,121.8,14.6), null);


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


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-72,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-72,0,380,50), null);


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
(lib.oculus_trek_300x50_FR = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// unspoken
	this.instance = new lib.game_unspoken();
	this.instance.parent = this;
	this.instance.setTransform(150.3,25,0.067,0.067,0,0,0,65.5,65.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-255.2,y:33.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(151));

	// lone echo
	this.instance_1 = new lib.game_loneecho();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.7,25.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-108,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(148));

	// roborecall
	this.instance_2 = new lib.game_roborecall();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.7,25.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-161.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.2,25.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:477.6,y:36},32,cjs.Ease.get(-1)).to({_off:true},1).wait(142));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.1,25.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-27.2,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.2,26.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:13.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(136));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.2,-30.1,-0.2,30.2).s().p("ArrEuIAApbIXXAAIAAJbg");
	this.shape.setTransform(216.7,76.3,0.913,0.913);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.059)"],[0,0.98],-0.2,-28.7,-0.2,28.7).s().p("AqqEgIAAo/IVUAAIAAI/g");
	this.shape_1.setTransform(216.7,75.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.118)"],[0,0.957],-0.2,-30,-0.2,29.8).s().p("AqqErIAApVIVUAAIAAJVg");
	this.shape_2.setTransform(216.7,74);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],-0.2,-31.1,-0.2,31).s().p("AqqE3IAApuIVUAAIAAJug");
	this.shape_3.setTransform(216.7,72.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.239)"],[0,0.914],-0.2,-32.3,-0.2,32.2).s().p("AqqFDIAAqFIVUAAIAAKFg");
	this.shape_4.setTransform(216.7,71.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)"],[0,0.894],-0.2,-33.5,-0.2,33.4).s().p("AqqFPIAAqdIVUAAIAAKdg");
	this.shape_5.setTransform(216.7,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],-0.2,-34.7,-0.2,34.5).s().p("AqqFbIAAq1IVUAAIAAK1g");
	this.shape_6.setTransform(216.7,69.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.42)"],[0,0.851],-0.2,-35.9,-0.2,35.7).s().p("AqqFnIAArNIVUAAIAALNg");
	this.shape_7.setTransform(216.7,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.478)"],[0,0.827],-0.2,-37.1,-0.2,36.8).s().p("AqqFzIAArlIVUAAIAALlg");
	this.shape_8.setTransform(216.7,66.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-42,-0.2,41.6).s().p("ArrGjIAAtGIXXAAIAANGg");
	this.shape_9.setTransform(216.7,65.7,0.913,0.913);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqrF/IAAr9IVWAAIAAL9g");
	this.shape_10.setTransform(216.7,65.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqsF/IAAr9IVYAAIAAL9g");
	this.shape_11.setTransform(216.7,65.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqtF/IAAr9IVaAAIAAL9g");
	this.shape_12.setTransform(216.7,65.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqtF/IAAr9IVbAAIAAL9g");
	this.shape_13.setTransform(216.7,65.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AquF/IAAr9IVdAAIAAL9g");
	this.shape_14.setTransform(216.7,65.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqvF/IAAr9IVfAAIAAL9g");
	this.shape_15.setTransform(216.7,65.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqwF/IAAr9IVhAAIAAL9g");
	this.shape_16.setTransform(216.7,65.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqxF/IAAr9IVjAAIAAL9g");
	this.shape_17.setTransform(216.7,65.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqyF/IAAr9IVlAAIAAL9g");
	this.shape_18.setTransform(216.7,65.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("AqzF/IAAr9IVnAAIAAL9g");
	this.shape_19.setTransform(216.7,65.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq0F/IAAr9IVpAAIAAL9g");
	this.shape_20.setTransform(216.7,65.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq1F/IAAr9IVrAAIAAL9g");
	this.shape_21.setTransform(216.7,65.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq2F/IAAr9IVtAAIAAL9g");
	this.shape_22.setTransform(216.7,65.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq3F/IAAr9IVvAAIAAL9g");
	this.shape_23.setTransform(216.7,65.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq4F/IAAr9IVxAAIAAL9g");
	this.shape_24.setTransform(216.7,65.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq5F/IAAr9IVyAAIAAL9g");
	this.shape_25.setTransform(216.7,65.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq6F/IAAr9IV0AAIAAL9g");
	this.shape_26.setTransform(216.7,65.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq7F/IAAr9IV2AAIAAL9g");
	this.shape_27.setTransform(216.7,65.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq7F/IAAr9IV4AAIAAL9g");
	this.shape_28.setTransform(216.7,65.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq8F/IAAr9IV6AAIAAL9g");
	this.shape_29.setTransform(216.7,65.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("Aq9F/IAAr9IV8AAIAAL9g");
	this.shape_30.setTransform(216.7,65.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("Aq+F/IAAr9IV9AAIAAL9g");
	this.shape_31.setTransform(216.6,65.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("Aq/F/IAAr9IV/AAIAAL9g");
	this.shape_32.setTransform(216.6,65.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArAF/IAAr9IWBAAIAAL9g");
	this.shape_33.setTransform(216.6,65.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArBF/IAAr9IWDAAIAAL9g");
	this.shape_34.setTransform(216.6,65.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArCF/IAAr9IWFAAIAAL9g");
	this.shape_35.setTransform(216.6,65.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArDF/IAAr9IWHAAIAAL9g");
	this.shape_36.setTransform(216.6,65.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("ArEF/IAAr9IWJAAIAAL9g");
	this.shape_37.setTransform(216.6,65.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("ArFF/IAAr9IWLAAIAAL9g");
	this.shape_38.setTransform(216.6,65.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("ArGF/IAAr9IWNAAIAAL9g");
	this.shape_39.setTransform(216.6,65.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("ArHF/IAAr9IWPAAIAAL9g");
	this.shape_40.setTransform(216.6,65.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("ArIF/IAAr9IWRAAIAAL9g");
	this.shape_41.setTransform(216.6,65.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-38.3,-0.2,38).s().p("ArJF/IAAr9IWTAAIAAL9g");
	this.shape_42.setTransform(216.6,65.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArKF/IAAr9IWVAAIAAL9g");
	this.shape_43.setTransform(216.6,65.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArLF/IAAr9IWXAAIAAL9g");
	this.shape_44.setTransform(216.6,65.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArMF/IAAr9IWZAAIAAL9g");
	this.shape_45.setTransform(216.6,65.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArNF/IAAr9IWbAAIAAL9g");
	this.shape_46.setTransform(216.6,65.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArOF/IAAr9IWdAAIAAL9g");
	this.shape_47.setTransform(216.6,65.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArPF/IAAr9IWfAAIAAL9g");
	this.shape_48.setTransform(216.6,65.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArPF/IAAr9IWgAAIAAL9g");
	this.shape_49.setTransform(216.6,65.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArRF/IAAr9IWjAAIAAL9g");
	this.shape_50.setTransform(216.6,65.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArSF/IAAr9IWlAAIAAL9g");
	this.shape_51.setTransform(216.6,65.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArTF/IAAr9IWnAAIAAL9g");
	this.shape_52.setTransform(216.6,65.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArUF/IAAr9IWpAAIAAL9g");
	this.shape_53.setTransform(216.6,65.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArVF/IAAr9IWrAAIAAL9g");
	this.shape_54.setTransform(216.6,65.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArWF/IAAr9IWtAAIAAL9g");
	this.shape_55.setTransform(216.6,65.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArXF/IAAr9IWvAAIAAL9g");
	this.shape_56.setTransform(216.6,65.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArYF/IAAr9IWxAAIAAL9g");
	this.shape_57.setTransform(216.6,65.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArZF/IAAr9IWzAAIAAL9g");
	this.shape_58.setTransform(216.6,65.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("AraF/IAAr9IW1AAIAAL9g");
	this.shape_59.setTransform(216.6,65.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArbF/IAAr9IW3AAIAAL9g");
	this.shape_60.setTransform(216.5,65.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArcF/IAAr9IW5AAIAAL9g");
	this.shape_61.setTransform(216.5,65.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArdF/IAAr9IW7AAIAAL9g");
	this.shape_62.setTransform(216.5,65.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("AreF/IAAr9IW9AAIAAL9g");
	this.shape_63.setTransform(216.5,65.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.3,-0.1,38).s().p("ArfF/IAAr9IW/AAIAAL9g");
	this.shape_64.setTransform(216.5,65.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-38.2,-0.1,37.9).s().p("ArhF+IAAr7IXDAAIAAL7g");
	this.shape_65.setTransform(216.3,65.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.533)"],[0,0.808],-0.1,-38.2,-0.1,37.8).s().p("ArlF9IAAr6IXLAAIAAL6g");
	this.shape_66.setTransform(216,65.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.529)"],[0,0.812],-0.1,-38.1,-0.1,37.7).s().p("ArsF8IAAr3IXZAAIAAL3g");
	this.shape_67.setTransform(215.7,65.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.525)"],[0,0.812],-0.1,-38,-0.1,37.6).s().p("ArzF7IAAr1IXnAAIAAL1g");
	this.shape_68.setTransform(215.2,65.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.522)"],[0,0.812],-0.1,-37.8,-0.1,37.5).s().p("Ar8F5IAAryIX5AAIAALyg");
	this.shape_69.setTransform(214.5,66);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.518)"],[0,0.816],-0.1,-37.6,-0.1,37.3).s().p("AsHF3IAArtIYPAAIAALtg");
	this.shape_70.setTransform(213.8,66.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.51)"],[0,0.82],-0.1,-37.4,-0.1,37).s().p("AsUF1IAArqIYpAAIAALqg");
	this.shape_71.setTransform(213,66.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.502)"],[0,0.82],-0.1,-37.1,-0.1,36.8).s().p("AsjFzIAArlIZHAAIAALlg");
	this.shape_72.setTransform(212,66.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.494)"],[0,0.824],-0.1,-36.9,-0.1,36.5).s().p("AszFwIAArfIZnAAIAALfg");
	this.shape_73.setTransform(211,66.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.486)"],[0,0.827],-0.1,-36.6,-0.1,36.2).s().p("AtFFtIAArZIaLAAIAALZg");
	this.shape_74.setTransform(209.8,66.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.475)"],[0,0.831],-0.1,-36.2,-0.1,35.9).s().p("AtZFqIAArTIayAAIAALTg");
	this.shape_75.setTransform(208.6,66.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.463)"],[0,0.835],-0.1,-35.9,-0.1,35.5).s().p("AtuFmIAArLIbdAAIAALLg");
	this.shape_76.setTransform(207.2,66.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.451)"],[0,0.839],-0.1,-35.5,-0.1,35.1).s().p("AuFFiIAArDIcLAAIAALDg");
	this.shape_77.setTransform(205.7,67);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.439)"],[0,0.843],-0.1,-35,-0.1,34.7).s().p("AudFeIAAq7Ic8AAIAAK7g");
	this.shape_78.setTransform(204.1,67.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.424)"],[0,0.847],-0.1,-34.6,-0.1,34.3).s().p("Au4FaIAAqzIdxAAIAAKzg");
	this.shape_79.setTransform(202.3,67.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.412)"],[0,0.851],-0.1,-34.1,-0.1,33.8).s().p("AvUFVIAAqpIepAAIAAKpg");
	this.shape_80.setTransform(200.5,67.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.396)"],[0,0.859],-0.1,-33.6,-0.1,33.3).s().p("AvyFQIAAqfIflAAIAAKfg");
	this.shape_81.setTransform(198.6,67.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.38)"],[0,0.863],-0.1,-33.1,-0.1,32.7).s().p("AwRFKIAAqTMAgjAAAIAAKTg");
	this.shape_82.setTransform(196.5,68.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.361)"],[0,0.871],-0.2,-32.5,-0.2,32.2).s().p("AwzFEIAAqHMAhmAAAIAAKHg");
	this.shape_83.setTransform(194.4,68.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.345)"],[0,0.878],-0.2,-31.9,-0.2,31.6).s().p("AxVE+IAAp7MAirAAAIAAJ7g");
	this.shape_84.setTransform(192.1,68.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.325)"],[0,0.882],-0.2,-31.2,-0.2,31).s().p("Ax6E4IAApvMAj1AAAIAAJvg");
	this.shape_85.setTransform(189.7,68.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.306)"],[0,0.89],-0.2,-30.6,-0.2,30.4).s().p("AygExIAApiMAlBAAAIAAJig");
	this.shape_86.setTransform(187.2,69.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.282)"],[0,0.898],-0.2,-29.8,-0.2,29.5).s().p("Ay9EpIAApRMAl7AAAIAAJRg");
	this.shape_87.setTransform(184.3,69.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.255)"],[0,0.91],-0.2,-28.8,-0.2,28.7).s().p("AzaEhIAApBMAm1AAAIAAJBg");
	this.shape_88.setTransform(181.3,69.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,0.918],-0.2,-28,-0.2,27.9).s().p("Az2EYIAAovMAntAAAIAAIvg");
	this.shape_89.setTransform(178.3,69.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.204)"],[0,0.925],-0.2,-27.2,-0.2,27).s().p("A0TEQIAAofMAomAAAIAAIfg");
	this.shape_90.setTransform(175.4,69.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.176)"],[0,0.937],-0.2,-26.3,-0.2,26.2).s().p("A0vEIIAAoPMApfAAAIAAIPg");
	this.shape_91.setTransform(172.4,69.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.153)"],[0,0.945],-0.2,-25.5,-0.2,25.4).s().p("A1MD/IAAn9MAqZAAAIAAH9g");
	this.shape_92.setTransform(169.4,69.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.129)"],[0,0.953],-0.2,-24.6,-0.2,24.6).s().p("A1oD2IAAnrMArRAAAIAAHrg");
	this.shape_93.setTransform(166.5,69.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,0.965],-0.2,-23.7,-0.2,23.7).s().p("A2FDuIAAnbMAsLAAAIAAHbg");
	this.shape_94.setTransform(163.5,69.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.078)"],[0,0.973],-0.3,-22.9,-0.3,22.9).s().p("A2iDmIAAnKMAtFAAAIAAHKg");
	this.shape_95.setTransform(160.6,70);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.051)"],[0,0.98],-0.2,-22.1,-0.2,22).s().p("A2+DdIAAm5MAt9AAAIAAG5g");
	this.shape_96.setTransform(157.6,70.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.024)"],[0,0.992],-0.3,-21.2,-0.3,21.2).s().p("A3aDVIAAmpMAu2AAAIAAGpg");
	this.shape_97.setTransform(154.6,70.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.3,-20.3,-0.3,20.4).s().p("A33DMIAAmXMAvvAAAIAAGXg");
	this.shape_98.setTransform(151.7,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[]},1).wait(37));

	// Layer 9
	this.instance_6 = new lib.flare_1("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(209.6,57.5,0.452,0.452,0,0,0,53.5,101);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72).to({_off:false},0).to({_off:true},38).wait(77));

	// Layer 15
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.6,23.9,0.014,0.014,0,0,0,120.9,69);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).to({regX:118.9,regY:64.7,scaleX:0.27,scaleY:0.27,x:215.2,y:8},30).wait(62).to({scaleX:0.4,scaleY:0.4,x:187.2,y:-5.2,alpha:0.57},23,cjs.Ease.get(-1)).to({regX:117.7,regY:63.1,scaleX:0.56,scaleY:0.56,x:150.4,y:-22.6,alpha:0},12).to({_off:true},1).wait(37));

	// Layer 1
	this.instance_8 = new lib.Tween5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.7,24.9,0.023,0.023,0,0,0,2.2,2.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({regX:1.4,regY:1.1,scaleX:0.43,scaleY:0.43,x:216.2,y:26.4},30).to({regX:1.3,regY:0.6,scaleX:0.46,scaleY:0.46,y:25.6},62).to({regX:1.4,scaleX:0.74,scaleY:0.74,x:188.5,y:21,alpha:0.57},23,cjs.Ease.get(-1)).to({regX:0.7,regY:0.2,scaleX:1.1,scaleY:1.1,x:152,y:14.9,alpha:0},12).to({_off:true},1).wait(37));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_40 = new cjs.Graphics().p("Aq2A+IAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_graphics_40,x:66.1,y:18}).wait(73).to({graphics:null,x:0,y:0}).wait(74));

	// Layer 11
	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(64.2,30,0.533,0.533,0,0,0,0.2,0.2);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({y:18},9).wait(60).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:-137.4,y:3.7},27,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:1.78,scaleY:1.78,x:-274.1,y:-8.3,alpha:0},12).to({_off:true},1).wait(33));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_40 = new cjs.Graphics().p("Aq2A+IAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_1_graphics_40,x:66.1,y:30.2}).wait(73).to({graphics:null,x:0,y:0}).wait(74));

	// Layer 12
	this.instance_10 = new lib.text2_mc("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(64.2,41.9,0.533,0.533,0,0,0,0.2,0.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween9("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-274.1,37.7,1.776,1.776,0,0,0,0.1,-0.1);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},47).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_10}]},58).to({state:[{t:this.instance_10}]},27).to({state:[{t:this.instance_11}]},12).to({state:[]},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).to({regY:0.2,y:29.7},9).wait(58).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-137.3,y:28.2},27,cjs.Ease.get(-1)).to({_off:true,regY:-0.1,scaleX:1.78,scaleY:1.78,x:-274.1,y:37.7,alpha:0},12).wait(34));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(255.2,26,0.53,0.53,0,0,0,128,-4.6);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(148).to({_off:false},0).wait(39));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_149 = new cjs.Graphics().p("AnVAkIAAhHIOrAAIAABHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_2_graphics_149,x:170.1,y:40.3}).wait(38));

	// Layer 5
	this.instance_12 = new lib.legal_withpurchase();
	this.instance_12.parent = this;
	this.instance_12.setTransform(162.2,47.8,0.483,0.483,0,0,0,117.8,8.2);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(149).to({_off:false},0).to({y:40.3},9).wait(29));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_147 = new cjs.Graphics().p("AnVAkIAAhHIOrAAIAABHg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_3_graphics_147,x:170.1,y:33.1}).wait(40));

	// Layer 16
	this.instance_13 = new lib.legal_limitedtime();
	this.instance_13.parent = this;
	this.instance_13.setTransform(115,161.6,0.697,0.697,0,0,0,37.6,6.8);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(147).to({_off:false},0).to({y:154.1},9).wait(31));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_151 = new cjs.Graphics().p("AnVB0IAAjnIOrAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_4_graphics_151,x:170.7,y:17.5}).wait(36));

	// price
	this.instance_14 = new lib.newPrice();
	this.instance_14.parent = this;
	this.instance_14.setTransform(169.8,59.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(151).to({_off:false},0).to({y:24.1},10,cjs.Ease.get(1)).wait(26));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_146 = new cjs.Graphics().p("An9BEIAAiHIP7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_5_graphics_146,x:63.4,y:26.2}).wait(41));

	// oculus
	this.instance_15 = new lib.logo_oculus();
	this.instance_15.parent = this;
	this.instance_15.setTransform(64,40.1,0.07,0.07,0,0,0,155.6,288.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(146).to({_off:false},0).to({y:25.1},10,cjs.Ease.get(1)).wait(31));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(176,125,0.802,1,0,0,0,150.2,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(146).to({regX:150,scaleX:1,x:186.8},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.9,25,304.6,50);
// library properties:
lib.properties = {
	id: '116834966ABA4D1CB4197C92927BAD75',
	width: 300,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap14.jpg", id:"Bitmap14"},
		{src:"images/Bitmap16.jpg", id:"Bitmap16"},
		{src:"images/Bitmap34.jpg", id:"Bitmap34"},
		{src:"images/flare.png", id:"flare"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
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
an.compositions['116834966ABA4D1CB4197C92927BAD75'] = {
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