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



(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1270,66);


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
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAAAgBABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(649.6,-147.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAlIALgXIgVgyIAHAAIAQAqIARgqIAHAAIgVAxIgIAYg");
	this.shape_1.setTransform(645.7,-148.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_2.setTransform(641.9,-150.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAZIAAgdIgBgGIgCgFIgEgDIgGgBIgGACQgDABgDACIgEAHQgBAEAAAEIAAAYIgHAAIAAgwIAHAAIAAAKIADgEIAEgEQACgCADAAIAGgBQAFAAADABQADABADADIADAGIABAIIAAAeg");
	this.shape_3.setTransform(637.8,-149.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAYQgEgCgEgEQgDgEgCgEQgCgFAAgFQAAgFACgEQACgFADgDQAEgEAEgCQADgBAHgBIALACQAFACADAEIAFAIQACAEAAAFIgCAKIgFAIQgDAEgFACQgHACgEAAQgHgBgDgBgAgIgSQgDABgDADIgDAHIgBAHIABAIIADAGQADADADABQAEACAEAAQAFAAAEgCQADgBADgDQACgCABgEQACgEAAgEQAAgDgCgEQgBgDgCgEQgDgDgDgBQgEgBgFAAQgEAAgEABg");
	this.shape_4.setTransform(631.7,-149.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAYQgFgCgDgDQgDgCgCgGIgCgLQAAgEACgHQACgFADgDQADgDAFgCIAIgBQAFAAAEABQAEACADADQADADACAFQABAFAAAGIAAACIgnAAIACAIQABAEADACIAGADIAHABIAJgBIAJgCIAAAFIgJADIgJABQgFAAgFgCgAARgCIgBgHIgDgGIgGgDIgGgBIgFABQgEABgCABQgCACgCAEIgCAIIAhAAIAAAAg");
	this.shape_5.setTransform(623.1,-149.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgAZIAAgdIgBgGIgBgFIgFgDIgFgBQgEAAgCACIgGAEQgCACgCADIgBAHIAAAaIgFAAIAAgdIgBgGIgCgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBgBIgFgBQgEAAgDACQgDABgCACQgDADgBAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIADgFIAEgDIAFgDIAHAAIAGAAIAEADIACAEIACAGIADgGIAFgEQACgCADAAIAHgBQAEAAADABQADACACACIADAHIABAHIAAAeg");
	this.shape_6.setTransform(615.6,-149.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgCgbQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_7.setTransform(609.7,-150.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAgQgBgCgBgCQgCgDAAgEIAAgKIAAgWIgKAAIAAgGIAKAAIAAgPIAFAAIAAAPIAOAAIAAAGIgOAAIAAAYQAAAIABADIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_8.setTransform(606.8,-150.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAlIgJgFIgFgIQgCgFAAgGQAAgGACgFQADgEACgDIAJgGQADgBAGAAIAGAAIAFADIAIAIIAAAAIAAgKIAAgbIAHAAIAABMIgHAAIAAgKIAAAAIgEAEIgFAEIgFACIgFABQgGAAgDgCgAgHgFIgFAEQgDACgCADQgBAEAAAFQAAAFABAEIAFAGQACADADAAQADACAEAAQAEAAAEgCQADgBADgDQACgCACgEQABgEAAgEQAAgFgBgEQgCgDgCgCIgGgEIgIgBQgEAAgDABg");
	this.shape_9.setTransform(599,-150.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAYQgFgCgDgDQgDgCgCgGIgCgLQAAgEACgHQACgFADgDQADgDAFgCIAIgBQAFAAAEABQAEACADADQADADACAFQABAFAAAGIAAACIgnAAIACAIQABAEADACIAGADIAHABIAJgBIAJgCIAAAFIgJADIgJABQgFAAgFgCgAARgCIgBgHIgDgGIgGgDIgGgBIgFABQgEABgCABQgCACgCAEIgCAIIAhAAIAAAAg");
	this.shape_10.setTransform(593.1,-149.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAgQgBgCgBgCQgCgDAAgEIAAgKIAAgWIgKAAIAAgGIAKAAIAAgPIAFAAIAAAPIAOAAIAAAGIgOAAIAAAYQAAAIABADIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_11.setTransform(588.5,-150.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgCgbQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_12.setTransform(585.5,-150.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAgAZIAAgdIgBgGIgCgFIgDgDIgGgBQgDAAgDACIgGAEQgCACgBADIgCAHIAAAaIgFAAIAAgdIgBgGIgCgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBIgGgBQgEAAgDACQgDABgCACQgDADAAAEQgCAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIADgFIAEgDIAFgDIAHAAIAFAAIAFADIACAEIACAGIAEgGIADgEQADgCADAAIAGgBQAFAAADABQAEACACACIACAHIABAHIAAAeg");
	this.shape_13.setTransform(579.7,-149.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgCgbQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_14.setTransform(573.8,-150.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgWAlIAAhJIAHAAIAABDIAlAAIAAAGg");
	this.shape_15.setTransform(570.3,-150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(564.4,-159.5,89.3,17.5), null);


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


(lib.Tween5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.Tween4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


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
	this.instance = new lib.Bitmap39();
	this.instance.parent = this;
	this.instance.setTransform(-163.1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-163.1,-15,1270,66), null);


(lib.newPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(151.6,295.1,1.488,1.488,0,0,0,37.6,6.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQCeIAAgXQgWAAgYgEQgZgEgTgGIAEgxQANAFAZAFQAbAEAVABIAAhFQgtgKgRgKQgOgIgHgNQgIgOAAgTQAAgSAHgPQAIgNANgKQANgIARgGQAPgFASgCIAAgYIAgAAIAAAYQAVAAAUAEQAXAEAPAGIgDAvQgMgFgWgEQgXgEgTgBIAABAIAhAIQARAGAMAIQAPAIAHAMQAIAPAAASQAAATgHAPQgHAOgNAKQgMAJgSAGQgPAFgUADIAAAYgAAQBWQARgCAKgHQALgIAAgMQAAgMgLgIQgJgHgSgEgAgqhNQgLAHAAAMQAAALALAIQAJAGARAEIAAg4QgQABgKAHg");
	this.shape.setTransform(927.7,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah4ESQAfgaA3g7QAlguAfgzQgfAIglAAQglAAgggOQgggMgYgYQgYgYgOgfQgNghAAglQAAgfAQg1QAKgYAjgnQAdgaAmgOQAZgJA7gFQAgAAA3APQAmAPAcAcQAbAaAOAjQAPAkAAAnQAAApgPAwQgPAvgaAyQgZAxgiAtQgiAtglAigAgiigQgPAGgMAMQgLAMgHAPQgFAQAAARQAAASAFAPQAHAQALAMQAMAMAQAGQARAGASAAQATAAASgGQAPgGAMgMQALgMAGgQQAGgPAAgSQAAgRgGgQQgGgPgLgMQgMgMgPgGQgSgHgTAAQgTAAgRAHg");
	this.shape_1.setTransform(1047.4,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah4ESQAfgaA3g7QAlguAfgzQgfAIglAAQglAAgggOQgggMgYgYQgYgYgOgfQgNghAAglQAAgfAQg1QAKgYAjgnQAdgaAmgOQAZgJA7gFQAgAAA3APQAmAPAcAcQAbAaAOAjQAPAkAAAnQAAApgPAwQgPAvgaAyQgZAxgiAtQgiAtglAigAgiigQgPAGgMAMQgLAMgHAPQgFAQAAARQAAASAFAPQAHAQALAMQAMAMAQAGQARAGASAAQATAAASgGQAPgGAMgMQALgMAGgQQAGgPAAgSQAAgRgGgQQgGgPgLgMQgMgMgPgGQgSgHgTAAQgTAAgRAHg");
	this.shape_2.setTransform(1002.4,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah1EUQgugGglgKIAIh1QB5AYA2AAIAlgEQARgDAMgIQAMgHAGgMQAGgLAAgQQAAgUgKgNQgIgMgRgIQgYgLgsAAIhuAAIgDhmIB8AAQAhAAAVgLQANgGAGgKQAIgLAAgQQAAgQgIgLQgIgKgOgGQgWgJgoAAQg7AAhgAVIgFhzIBSgOQAxgHAqAAQAnAAAiAGQAnAHAcAPQAfAQAQAYQAJANAFAQQAFAQAAATQAAAYgIAWQgHAVgNASQgOASgTAOQgTAOgYAKIAAACQAZAGAUAMQAVAMAQARQAQATAIAWQAKAXAAAbQAAAUgGASQgFARgKAPQgTAbgiATQgfARgrAJQgnAIgqAAQgoAAgxgGg");
	this.shape_3.setTransform(961,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(912.2,-24.8,163.5,98.3), null);


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
(lib.oculus_echo_970x66_ER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(485,35.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:1162.4,y:205.4},24,cjs.Ease.get(-1)).to({_off:true},1).wait(186));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-175.2,y:203.2},24,cjs.Ease.get(-1)).to({_off:true},1).wait(183));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485,36.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-168,y:-155.2},24,cjs.Ease.get(-1)).to({_off:true},1).wait(180));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(486,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:74.4,y:-161.2},24,cjs.Ease.get(-1)).to({_off:true},1).wait(177));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(486.2,36.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:1187.6,y:6},24,cjs.Ease.get(-1)).to({_off:true},1).wait(174));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(486.1,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:176.4},24,cjs.Ease.get(-1)).to({_off:true},1).wait(171));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(486,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:663.2,y:-161.6},18,cjs.Ease.get(-1)).to({_off:true},1).wait(174));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:213.5,y:16.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance_7 = new lib.text1_mc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(210,38.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(210,16.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({_off:true,y:16.5},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(49).to({_off:false},9).wait(57).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:182.8,y:-5.7},23,cjs.Ease.get(-1)).to({scaleX:3.33,scaleY:3.33,x:156,y:-22.3,alpha:0},8).to({_off:true},1).wait(64));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:213.5,y:39.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_9 = new lib.text2_mc("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(210,61.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween9("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(156,64.1,3.334,3.334);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},54).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},52).to({state:[{t:this.instance_9}]},23).to({state:[{t:this.instance_10}]},8).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(54).to({_off:false},0).to({y:38.5},9).wait(52).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:182.8,y:40.4},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:156,y:64.1,alpha:0},8).wait(65));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:217.5,y:54.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 13
	this.instance_11 = new lib.text3_mc("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(290,73.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.text3("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(413.4,139.4,3.334,3.334);
	this.instance_12.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},59).to({state:[{t:this.instance_11}]},9).to({state:[{t:this.instance_11}]},47).to({state:[{t:this.instance_11}]},23).to({state:[{t:this.instance_12}]},8).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({y:54.5},9).wait(47).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:343.2,y:81.7},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:413.4,y:139.4,alpha:0},8).wait(65));

	// game_BG copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_31 = new cjs.Graphics().p("EAjGABVIDcAAIAAC2IjcAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EAhxgAhIFxAAIAAEvIlxAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EAgcgCYIIGAAIAAGpIoGAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AfHkPIKbAAIAAIjIqbAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AdylPIMwAAIAAKfIswAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AcdmMIPFAAIAAMZIvFAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AbInJIRaAAIAAOTIxaAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AZzoGITvAAIAAQNIzvAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AYepDIWEAAIAASHI2EAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AXJqBIYZAAIAAUDI4ZAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AV0q+IauAAIAAV9I6uAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AUfr7IdDAAIAAX3I9DAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("ATKs4IfYAAIAAZxI/YAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AR1t1MAhtAAAIAAbrMghtAAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AQguzMAkCAAAIAAdnMgkCAAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("APLvwMAmXAAAIAAfhMgmXAAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AN2wtMAosAAAMAAAAhbMgosAAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AMhxqMArBAAAMAAAAjVMgrBAAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("ALMyoMAtWAAAMAAAAlRMgtWAAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AJ3zlMAvrAAAMAAAAnLMgvrAAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AIm0iMAyAAAAMAAAApFMgyAAAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AIi0kMAyFAAAMAAAApJMgyFAAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AIf0mMAyJAAAMAAAApNMgyJAAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AIb0oMAyPAAAMAAAApRMgyPAAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AIX0qMAyUAAAMAAAApVMgyUAAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AIU0sMAyYAAAMAAAApZMgyYAAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AIQ0uMAydAAAMAAAApdMgydAAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AIM0wMAyjAAAMAAAAphMgyjAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AIJ0yMAynAAAMAAAAplMgynAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AIF00MAysAAAMAAAAppMgysAAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AIC02MAywAAAMAAAAptMgywAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AH+04MAy2AAAMAAAApxMgy2AAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AH606MAy7AAAMAAAAp1Mgy7AAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AH308MAy/AAAMAAAAp5Mgy/AAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AHz0+MAzEAAAMAAAAp9MgzEAAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AHv1AMAzKAAAMAAAAqBMgzKAAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AHs1CMAzOAAAMAAAAqFMgzOAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AHo1EMAzTAAAMAAAAqJMgzTAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AHk1GMAzYAAAMAAAAqNMgzYAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AHh1IMAzdAAAMAAAAqRMgzdAAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AHd1KMAziAAAMAAAAqVMgziAAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AHZ1MMAznAAAMAAAAqZMgznAAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AHW1OMAzrAAAMAAAAqdMgzrAAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AHS1QMAzxAAAMAAAAqhMgzxAAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AHP1SMAz1AAAMAAAAqlMgz1AAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AHL1UMAz6AAAMAAAAqpMgz6AAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AHH1WMAz/AAAMAAAAqtMgz/AAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AHE1YMA0EAAAMAAAAqxMg0EAAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AHA1aMA0JAAAMAAAAq1Mg0JAAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AG81cMA0OAAAMAAAAq5Mg0OAAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AG51eMA0SAAAMAAAAq9Mg0SAAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AG11gMA0XAAAMAAAArBMg0XAAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AGx1iMA0dAAAMAAAArFMg0dAAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AGu1kMA0hAAAMAAAArJMg0hAAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AGq1mMA0mAAAMAAAArNMg0mAAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AGm1oMA0rAAAMAAAArRMg0rAAAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AGj1qMA0wAAAMAAAArVMg0wAAAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AGf1sMA01AAAMAAAArZMg01AAAg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AGb1uMA06AAAMAAAArdMg06AAAg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AGY1wMA0+AAAMAAAArhMg0+AAAg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AGU1yMA1EAAAMAAAArlMg1EAAAg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AGR10MA1IAAAMAAAArpMg1IAAAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AGN12MA1NAAAMAAAArtMg1NAAAg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AGJ14MA1SAAAMAAAArxMg1SAAAg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AGG16MA1XAAAMAAAAr1Mg1XAAAg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AGC18MA1cAAAMAAAAr5Mg1cAAAg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AF+1+MA1hAAAMAAAAr9Mg1hAAAg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AF72AMA1lAAAMAAAAsBMg1lAAAg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AF32CMA1rAAAMAAAAsFMg1rAAAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AFz2EMA1wAAAMAAAAsJMg1wAAAg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AFw2GMA10AAAMAAAAsNMg10AAAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AFs2IMA15AAAMAAAAsRMg15AAAg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AFo2KMA1/AAAMAAAAsVMg1/AAAg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AFl2MMA2DAAAMAAAAsZMg2DAAAg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AFh2OMA2IAAAMAAAAsdMg2IAAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AFe2QMA2MAAAMAAAAshMg2MAAAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AFa2SMA2RAAAMAAAAslMg2RAAAg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AFW2UMA2XAAAMAAAAspMg2XAAAg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AFT2WMA2bAAAMAAAAstMg2bAAAg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AFP2YMA2gAAAMAAAAsxMg2gAAAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AFL2aMA2lAAAMAAAAs1Mg2lAAAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AFI2cMA2qAAAMAAAAs5Mg2qAAAg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AFE2eMA2vAAAMAAAAs9Mg2vAAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AFA2gMA20AAAMAAAAtBMg20AAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AE92iMA24AAAMAAAAtFMg24AAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AE72kMA27AAAMAAAAtJMg27AAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AE02nMA3EAAAMAAAAtPMg3EAAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AEp2tMA3TAAAMAAAAtbMg3TAAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AEa22MA3nAAAMAAAAttMg3nAAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AEH3AMA4BAAAMAAAAuBMg4BAAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("ADv3NMA4hAAAMAAAAubMg4hAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("ADT3dMA5GAAAMAAAAu7Mg5GAAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("ACz3vMA5xAAAMAAAAvfMg5xAAAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("ACO4DMA6jAAAMAAAAwHMg6jAAAg");
	var mask_3_graphics_125 = new cjs.Graphics().p("ABl4ZMA7aAAAMAAAAwzMg7aAAAg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AA44yMA8WAAAMAAAAxlMg8WAAAg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AAG5OMA9ZAAAMAAAAydMg9ZAAAg");
	var mask_3_graphics_128 = new cjs.Graphics().p("Agv5rMA+hAAAMAAAAzXMg+hAAAg");
	var mask_3_graphics_129 = new cjs.Graphics().p("Ahp6LMA/uAAAMAAAA0XMg/uAAAg");
	var mask_3_graphics_130 = new cjs.Graphics().p("Aio6uMBBDAAAMAAAA1dMhBDAAAg");
	var mask_3_graphics_131 = new cjs.Graphics().p("Ajr7TMBCcAAAMAAAA2nMhCcAAAg");
	var mask_3_graphics_132 = new cjs.Graphics().p("Aky76MBD8AAAMAAAA31MhD8AAAg");
	var mask_3_graphics_133 = new cjs.Graphics().p("Al98kMBFgAAAMAAAA5JMhFgAAAg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AnN9QMBHMAAAMAAAA6hMhHMAAAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("Aoh9+MBI8AAAMAAAA79MhI8AAAg");
	var mask_3_graphics_136 = new cjs.Graphics().p("Ap6+vMBKzAAAMAAAA9fMhKzAAAg");
	var mask_3_graphics_137 = new cjs.Graphics().p("ArW/iMBMvAAAMAAAA/FMhMvAAAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("EgM4ggXMBOyAAAMAAABAvMhOyAAAg");
	var mask_3_graphics_139 = new cjs.Graphics().p("EgOdghPMBQ6AAAMAAABCfMhQ6AAAg");
	var mask_3_graphics_140 = new cjs.Graphics().p("EgQHgiJMBTIAAAMAAABETMhTIAAAg");
	var mask_3_graphics_141 = new cjs.Graphics().p("EgR1gjGMBVbAAAMAAABGNMhVbAAAg");
	var mask_3_graphics_142 = new cjs.Graphics().p("EgTngkFMBXzAAAMAAABILMhXzAAAg");
	var mask_3_graphics_143 = new cjs.Graphics().p("EgVjglIMBaYAAAMAAABKRMhaYAAAg");
	var mask_3_graphics_144 = new cjs.Graphics().p("EgXegmMMBc8AAAMAAABMZMhc8AAAg");
	var mask_3_graphics_145 = new cjs.Graphics().p("EgZagnPMBfhAAAMAAABOfMhfhAAAg");
	var mask_3_graphics_146 = new cjs.Graphics().p("EgbVgoTMBiFAAAMAAABQnMhiFAAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("EgdQgpWMBkpAAAMAAABStMhkpAAAg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EgfMgqaMBnOAAAMAAABU1MhnOAAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("EghHgrdMBpyAAAMAAABW7MhpyAAAg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EgjCgshMBsWAAAMAAABZDMhsWAAAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("Egk+gtkMBu7AAAMAAABbJMhu7AAAg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Egm5guoMBxfAAAMAAABdRMhxfAAAg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Ego1gvrMB0DAAAMAAABfXMh0DAAAg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EgqwgwvMB2nAAAMAAABhfMh2nAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_3_graphics_31,x:246.6,y:26.7}).wait(1).to({graphics:mask_3_graphics_32,x:253,y:27}).wait(1).to({graphics:mask_3_graphics_33,x:259.4,y:27.3}).wait(1).to({graphics:mask_3_graphics_34,x:265.8,y:27.6}).wait(1).to({graphics:mask_3_graphics_35,x:272.2,y:22.3}).wait(1).to({graphics:mask_3_graphics_36,x:278.6,y:16.9}).wait(1).to({graphics:mask_3_graphics_37,x:285,y:11.4}).wait(1).to({graphics:mask_3_graphics_38,x:291.4,y:5.9}).wait(1).to({graphics:mask_3_graphics_39,x:297.8,y:0.4}).wait(1).to({graphics:mask_3_graphics_40,x:304.2,y:-5.1}).wait(1).to({graphics:mask_3_graphics_41,x:310.6,y:-10.6}).wait(1).to({graphics:mask_3_graphics_42,x:317,y:-16.1}).wait(1).to({graphics:mask_3_graphics_43,x:323.4,y:-21.6}).wait(1).to({graphics:mask_3_graphics_44,x:329.8,y:-27.1}).wait(1).to({graphics:mask_3_graphics_45,x:336.2,y:-32.6}).wait(1).to({graphics:mask_3_graphics_46,x:342.6,y:-38}).wait(1).to({graphics:mask_3_graphics_47,x:349,y:-43.5}).wait(1).to({graphics:mask_3_graphics_48,x:355.4,y:-49}).wait(1).to({graphics:mask_3_graphics_49,x:361.8,y:-54.5}).wait(1).to({graphics:mask_3_graphics_50,x:368.2,y:-60}).wait(1).to({graphics:mask_3_graphics_51,x:375,y:-65.5}).wait(1).to({graphics:mask_3_graphics_52,x:375.1,y:-65.5}).wait(1).to({graphics:mask_3_graphics_53,x:375.2,y:-65.5}).wait(1).to({graphics:mask_3_graphics_54,x:375.4,y:-65.5}).wait(1).to({graphics:mask_3_graphics_55,x:375.5,y:-65.5}).wait(1).to({graphics:mask_3_graphics_56,x:375.6,y:-65.5}).wait(1).to({graphics:mask_3_graphics_57,x:375.7,y:-65.5}).wait(1).to({graphics:mask_3_graphics_58,x:375.9,y:-65.5}).wait(1).to({graphics:mask_3_graphics_59,x:376,y:-65.5}).wait(1).to({graphics:mask_3_graphics_60,x:376.1,y:-65.5}).wait(1).to({graphics:mask_3_graphics_61,x:376.2,y:-65.5}).wait(1).to({graphics:mask_3_graphics_62,x:376.4,y:-65.5}).wait(1).to({graphics:mask_3_graphics_63,x:376.5,y:-65.5}).wait(1).to({graphics:mask_3_graphics_64,x:376.6,y:-65.6}).wait(1).to({graphics:mask_3_graphics_65,x:376.7,y:-65.6}).wait(1).to({graphics:mask_3_graphics_66,x:376.9,y:-65.6}).wait(1).to({graphics:mask_3_graphics_67,x:377,y:-65.6}).wait(1).to({graphics:mask_3_graphics_68,x:377.1,y:-65.6}).wait(1).to({graphics:mask_3_graphics_69,x:377.2,y:-65.6}).wait(1).to({graphics:mask_3_graphics_70,x:377.4,y:-65.6}).wait(1).to({graphics:mask_3_graphics_71,x:377.5,y:-65.6}).wait(1).to({graphics:mask_3_graphics_72,x:377.6,y:-65.6}).wait(1).to({graphics:mask_3_graphics_73,x:377.7,y:-65.6}).wait(1).to({graphics:mask_3_graphics_74,x:377.9,y:-65.6}).wait(1).to({graphics:mask_3_graphics_75,x:378,y:-65.6}).wait(1).to({graphics:mask_3_graphics_76,x:378.1,y:-65.6}).wait(1).to({graphics:mask_3_graphics_77,x:378.2,y:-65.6}).wait(1).to({graphics:mask_3_graphics_78,x:378.4,y:-65.6}).wait(1).to({graphics:mask_3_graphics_79,x:378.5,y:-65.6}).wait(1).to({graphics:mask_3_graphics_80,x:378.6,y:-65.6}).wait(1).to({graphics:mask_3_graphics_81,x:378.7,y:-65.6}).wait(1).to({graphics:mask_3_graphics_82,x:378.8,y:-65.6}).wait(1).to({graphics:mask_3_graphics_83,x:379,y:-65.6}).wait(1).to({graphics:mask_3_graphics_84,x:379.1,y:-65.6}).wait(1).to({graphics:mask_3_graphics_85,x:379.2,y:-65.6}).wait(1).to({graphics:mask_3_graphics_86,x:379.3,y:-65.6}).wait(1).to({graphics:mask_3_graphics_87,x:379.5,y:-65.6}).wait(1).to({graphics:mask_3_graphics_88,x:379.6,y:-65.6}).wait(1).to({graphics:mask_3_graphics_89,x:379.7,y:-65.6}).wait(1).to({graphics:mask_3_graphics_90,x:379.8,y:-65.7}).wait(1).to({graphics:mask_3_graphics_91,x:380,y:-65.7}).wait(1).to({graphics:mask_3_graphics_92,x:380.1,y:-65.7}).wait(1).to({graphics:mask_3_graphics_93,x:380.2,y:-65.7}).wait(1).to({graphics:mask_3_graphics_94,x:380.3,y:-65.7}).wait(1).to({graphics:mask_3_graphics_95,x:380.5,y:-65.7}).wait(1).to({graphics:mask_3_graphics_96,x:380.6,y:-65.7}).wait(1).to({graphics:mask_3_graphics_97,x:380.7,y:-65.7}).wait(1).to({graphics:mask_3_graphics_98,x:380.8,y:-65.7}).wait(1).to({graphics:mask_3_graphics_99,x:381,y:-65.7}).wait(1).to({graphics:mask_3_graphics_100,x:381.1,y:-65.7}).wait(1).to({graphics:mask_3_graphics_101,x:381.2,y:-65.7}).wait(1).to({graphics:mask_3_graphics_102,x:381.3,y:-65.7}).wait(1).to({graphics:mask_3_graphics_103,x:381.5,y:-65.7}).wait(1).to({graphics:mask_3_graphics_104,x:381.6,y:-65.7}).wait(1).to({graphics:mask_3_graphics_105,x:381.7,y:-65.7}).wait(1).to({graphics:mask_3_graphics_106,x:381.8,y:-65.7}).wait(1).to({graphics:mask_3_graphics_107,x:381.9,y:-65.7}).wait(1).to({graphics:mask_3_graphics_108,x:382.1,y:-65.7}).wait(1).to({graphics:mask_3_graphics_109,x:382.2,y:-65.7}).wait(1).to({graphics:mask_3_graphics_110,x:382.3,y:-65.7}).wait(1).to({graphics:mask_3_graphics_111,x:382.4,y:-65.7}).wait(1).to({graphics:mask_3_graphics_112,x:382.6,y:-65.7}).wait(1).to({graphics:mask_3_graphics_113,x:382.7,y:-65.7}).wait(1).to({graphics:mask_3_graphics_114,x:382.8,y:-65.7}).wait(1).to({graphics:mask_3_graphics_115,x:382.9,y:-65.7}).wait(1).to({graphics:mask_3_graphics_116,x:383,y:-65.8}).wait(1).to({graphics:mask_3_graphics_117,x:383.2,y:-65.8}).wait(1).to({graphics:mask_3_graphics_118,x:383.6,y:-65.8}).wait(1).to({graphics:mask_3_graphics_119,x:384.1,y:-65.8}).wait(1).to({graphics:mask_3_graphics_120,x:384.8,y:-65.8}).wait(1).to({graphics:mask_3_graphics_121,x:385.6,y:-65.8}).wait(1).to({graphics:mask_3_graphics_122,x:386.5,y:-65.9}).wait(1).to({graphics:mask_3_graphics_123,x:387.6,y:-65.9}).wait(1).to({graphics:mask_3_graphics_124,x:388.9,y:-65.9}).wait(1).to({graphics:mask_3_graphics_125,x:390.3,y:-66}).wait(1).to({graphics:mask_3_graphics_126,x:391.8,y:-66}).wait(1).to({graphics:mask_3_graphics_127,x:393.5,y:-66.1}).wait(1).to({graphics:mask_3_graphics_128,x:395.4,y:-66.1}).wait(1).to({graphics:mask_3_graphics_129,x:397.3,y:-66.2}).wait(1).to({graphics:mask_3_graphics_130,x:399.5,y:-66.2}).wait(1).to({graphics:mask_3_graphics_131,x:401.7,y:-66.3}).wait(1).to({graphics:mask_3_graphics_132,x:404.2,y:-66.4}).wait(1).to({graphics:mask_3_graphics_133,x:406.7,y:-66.5}).wait(1).to({graphics:mask_3_graphics_134,x:409.5,y:-66.5}).wait(1).to({graphics:mask_3_graphics_135,x:412.3,y:-66.6}).wait(1).to({graphics:mask_3_graphics_136,x:415.3,y:-66.7}).wait(1).to({graphics:mask_3_graphics_137,x:418.5,y:-66.8}).wait(1).to({graphics:mask_3_graphics_138,x:421.8,y:-66.9}).wait(1).to({graphics:mask_3_graphics_139,x:425.3,y:-67}).wait(1).to({graphics:mask_3_graphics_140,x:428.9,y:-67.1}).wait(1).to({graphics:mask_3_graphics_141,x:432.6,y:-67.2}).wait(1).to({graphics:mask_3_graphics_142,x:436.4,y:-67.3}).wait(1).to({graphics:mask_3_graphics_143,x:440.5,y:-67.7}).wait(1).to({graphics:mask_3_graphics_144,x:444.6,y:-68.1}).wait(1).to({graphics:mask_3_graphics_145,x:448.7,y:-68.4}).wait(1).to({graphics:mask_3_graphics_146,x:452.8,y:-68.8}).wait(1).to({graphics:mask_3_graphics_147,x:456.9,y:-69.2}).wait(1).to({graphics:mask_3_graphics_148,x:461,y:-69.5}).wait(1).to({graphics:mask_3_graphics_149,x:465.1,y:-69.9}).wait(1).to({graphics:mask_3_graphics_150,x:469.2,y:-70.3}).wait(1).to({graphics:mask_3_graphics_151,x:473.3,y:-70.6}).wait(1).to({graphics:mask_3_graphics_152,x:477.4,y:-71}).wait(1).to({graphics:mask_3_graphics_153,x:481.4,y:-71.4}).wait(1).to({graphics:mask_3_graphics_154,x:485.5,y:-71.7}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_13 = new lib.echo3_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(482.5,51.6,0.069,0.069,0,0,0,156.7,18.9);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({_off:false},0).to({regX:156,regY:18,scaleX:0.94,scaleY:0.94,x:597.1,y:48.3},20).wait(64).to({regX:155.9,regY:18.1,scaleX:1.59,scaleY:1.59,x:596.9,y:88.3},27,cjs.Ease.get(-1)).to({scaleX:2.18,scaleY:2.18,x:597,y:109.3,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_14 = new lib.echo1_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(489,44.3,0.069,0.069,0,0,0,63.8,131.9);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({_off:false},0).to({regX:63.4,regY:131.5,scaleX:1,scaleY:1,x:687.1,y:-65.9},20).to({regX:63.5,regY:131.4,scaleX:1.1,scaleY:1.1,rotation:4.7,x:707.9,y:-66.1},64).to({regX:63.6,scaleX:1.76,scaleY:1.76,rotation:12.8,x:806.3,y:-116.4},27,cjs.Ease.get(-1)).to({regY:131.2,scaleX:2.37,scaleY:2.37,rotation:27,x:866.8,y:-171.4,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_15 = new lib.echo2_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(478.1,45.5,0.069,0.069,0,0,0,97.9,113.9);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({_off:false},0).to({regX:97.4,regY:113.8,scaleX:1,scaleY:1,x:529.4,y:-48},20).to({regX:97.3,scaleX:1.1,scaleY:1.1,rotation:-3.2,x:499.6,y:-45.6},64).to({scaleX:1.76,scaleY:1.76,rotation:-1.2,x:368.6,y:-19.1},27,cjs.Ease.get(-1)).to({scaleX:2.37,scaleY:2.37,rotation:-1.2,x:256,y:-3.5,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape.setTransform(591.6,-129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_1.setTransform(591.6,-129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_2.setTransform(591.6,-129);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_3.setTransform(591.6,-129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_4.setTransform(591.6,-129);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_5.setTransform(591.6,-129);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_6.setTransform(591.6,-129);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_7.setTransform(591.6,-129);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_8.setTransform(591.6,-129);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_9.setTransform(591.6,-129);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_10.setTransform(591.6,-129);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_11.setTransform(591.6,-129);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_12.setTransform(591.6,-129);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],0,64.8,0,-64.7).s().p("A3lKIIAA0PMAvLAAAIAAUPg");
	this.shape_13.setTransform(591.6,-127.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],0,66.6,0,-66.5).s().p("A3lKaIAA0zMAvLAAAIAAUzg");
	this.shape_14.setTransform(591.6,-125.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],0,68.4,0,-68.3).s().p("A3lKsIAA1XMAvLAAAIAAVXg");
	this.shape_15.setTransform(591.6,-123.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],0,70.2,0,-70.1).s().p("A3lK+IAA16MAvLAAAIAAV6g");
	this.shape_16.setTransform(591.6,-121.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],0,72,0,-71.9).s().p("A3lLQIAA2eMAvLAAAIAAWeg");
	this.shape_17.setTransform(591.6,-120);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],0,73.8,0,-73.7).s().p("A3lLiIAA3CMAvLAAAIAAXCg");
	this.shape_18.setTransform(591.6,-118.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],0,75.5,0,-75.5).s().p("A3lLzIAA3lMAvLAAAIAAXlg");
	this.shape_19.setTransform(591.6,-116.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],0,77.3,0,-77.3).s().p("A3lMFIAA4JMAvLAAAIAAYJg");
	this.shape_20.setTransform(591.6,-114.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],0,79.2,0,-79).s().p("A3lMXIAA4tMAvLAAAIAAYtg");
	this.shape_21.setTransform(591.6,-112.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],0,80.9,0,-80.9).s().p("A3lMpIAA5RMAvLAAAIAAZRg");
	this.shape_22.setTransform(591.6,-111.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],0,82.7,0,-82.7).s().p("A3lM7IAA51MAvLAAAIAAZ1g");
	this.shape_23.setTransform(591.6,-109.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,84.5,0,-84.4).s().p("A3lNNIAA6ZMAvLAAAIAAaZg");
	this.shape_24.setTransform(591.6,-107.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},80).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(56));

	// game_BG
	this.instance_16 = new lib.Tween4copy("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(482.3,44.3,0.069,0.069,0,0,0,0.8,0);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween5copy("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(590,-65.5);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(31).to({_off:false},0).to({_off:true,regX:0,scaleX:1,scaleY:1,x:590,y:-65.5},20).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(31).to({_off:false},20).to({scaleX:1.1,scaleY:1.1,x:590.3,y:-65.7},64).to({scaleX:1.76,scaleY:1.76,x:591.9,y:-67.3},27,cjs.Ease.get(-1)).to({scaleX:2.37,scaleY:2.37,x:591.5,y:-71.7,alpha:0},12).to({_off:true},1).wait(56));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(851.6,33.1,0.907,0.907,0,0,0,127.8,-4.7);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(152).to({_off:false},0).to({alpha:1},4).wait(55));

	// legal
	this.instance_18 = new lib.legal_withpurchase();
	this.instance_18.parent = this;
	this.instance_18.setTransform(679.4,55,0.965,0.965,0,0,0,117.9,8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(159).to({_off:false},0).to({alpha:1},10).wait(42));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_152 = new cjs.Graphics().p("AtCEMIAAoXIaFAAIAAIXg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(152).to({graphics:mask_4_graphics_152,x:668.2,y:32.7}).wait(59));

	// price
	this.instance_19 = new lib.newPrice();
	this.instance_19.parent = this;
	this.instance_19.setTransform(124.8,73.6,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(152).to({_off:false},0).to({y:28.6},10,cjs.Ease.get(1)).wait(49));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_152 = new cjs.Graphics().p("AzDCUIAAknMAmHAAAIAAEng");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(152).to({graphics:mask_5_graphics_152,x:174.2,y:34.2}).wait(59));

	// oculus
	this.instance_20 = new lib.logo_oculus();
	this.instance_20.parent = this;
	this.instance_20.setTransform(173.8,68.2,0.156,0.156,0,0,0,156.5,295.6);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(152).to({_off:false},0).to({y:33.2},10,cjs.Ease.get(1)).wait(49));

	// touch RT
	this.instance_21 = new lib.hardware_touch_RT_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(467.5,40.8,0.176,0.176,0,0,0,32.5,29.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(142).to({_off:false},0).to({scaleX:0.58,scaleY:0.58,x:395,y:39.4},12,cjs.Ease.get(-1)).wait(57));

	// touch LT
	this.instance_22 = new lib.hardware_touch_LT_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(506.1,38.7,0.176,0.176,0,0,0,23.1,23.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(142).to({_off:false},0).to({scaleX:0.58,scaleY:0.58,x:521.6,y:43.3},12,cjs.Ease.get(-1)).wait(57));

	// rift
	this.instance_23 = new lib.hardware_rift_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(487.9,33.3,0.176,0.176,0,0,0,69,42.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(142).to({_off:false},0).to({scaleX:0.58,scaleY:0.58,x:459,y:33.8},12,cjs.Ease.get(-1)).wait(57));

	// bg
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(320,140,1.033,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(481.5,33,1311.9,66);
// library properties:
lib.properties = {
	id: '735F5B0AFF004AAA9DAA07843FE852F3',
	width: 970,
	height: 66,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap39.png", id:"Bitmap39"},
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
an.compositions['735F5B0AFF004AAA9DAA07843FE852F3'] = {
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