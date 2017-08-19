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


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAVIAAgoIALAAIAAAHQACgEACgCIADgBIAEgBIAFABIAAAKIgHAAIgEAAIgDACIgCAFIAAADIAAAUg");
	this.shape.setTransform(26.5,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_1.setTransform(22.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAbQgCgBgBgCIgCgGIgCgIIAAgOIgHAAIAAgKIAHAAIAAgNIALAAIAAANIALAAIAAAKIgLAAIAAAOIABAHQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAGgBIAAAKIgJABIgGgBg");
	this.shape_2.setTransform(18.3,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAfIgKgDIADgLIAJADIAJABIAFAAIADgBIADgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgKgEIgGgCIgGgCQgCgCgBgDQgCgDABgEIAAgFIABgEQADgDADgCIAHgDIAIgBIALABIAIADIgCALIgIgDIgJgCQgFABgCABIgDACIgBADIABAEIAFADIAKADIAGACIAFADIAEAEQABAEAAAEIAAAFIgCAEIgDADIgDADQgDACgFABIgIABIgLgBg");
	this.shape_3.setTransform(14.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAVQgFgCgDgCIgDgDIgCgEIgBgFIAAgEQAAgFABgEIAEgHIAHgEQAEgBAEgBQAEABAEABIAGAEIAEAHQABAEAAAEIAAAEIgcAAIABADIADADIAEACIAEAAIAHAAIAHgCIAAAKIgHABIgHAAIgJAAgAAJgDIgBgEIgCgDIgCgCIgEAAIgCAAIgDACIgCADIgBAEIARAAIAAAAg");
	this.shape_4.setTransform(9.2,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAVIAAgWQAAgFgBgCIgCgBIgEgBIgEABIgDACIgCAEIgBAEIAAAUIgJAAIAAgWQgBgFgBgCIgCgBIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIAKAAIABAHIADgEIAEgCQADgCAEAAIAFABIADABIACADIABAEIADgEIAFgDIADgBIAFgBIAGABIAEADIACAGIABAIIAAAXg");
	this.shape_5.setTransform(3.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_6.setTransform(-3,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAgIgGgCIgGgCIgFgEIgEgEIgDgGIgCgHIgBgHIABgHIACgHIADgFIAEgFIAGgDIAGgCIAGgCIAHAAIAKAAIAJADIAAALIgKgDIgKgBQgFAAgDACQgEABgDACIgDADIgCAEIgCAFIAAAEIAAAFIACAEQABAEADADIAHAEIAIABIAMgBIAAgPIgNAAIAAgKIAZAAIAAAgIgNAEIgLABIgGAAg");
	this.shape_7.setTransform(-8.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_8.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,53.6,14.2);


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
	this.shape.graphics.f("#000000").s().p("AABARIAFgRIAHgQIAKABQgHAUgCAMgAgVARQABgKAKgXIAJABIgJAgg");
	this.shape.setTransform(294.6,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQAEAAACACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_1.setTransform(289.7,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAuIAAg9IAKAAIAAA9gAgEggQgCgCgBgEQABgDACgCQACgCACAAQAEAAACACQABACAAADQAAAEgBACQgCACgEAAQgCAAgCgCg");
	this.shape_2.setTransform(286.5,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_3.setTransform(281.4,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAxIgGgDIgGgEIgFgGIAAAAIAAAMIgLAAIAAhgIALAAIAAAiIAAAMIAAAAIAFgGIAFgEIAHgCIAHgBQAGAAAGACQAFACAEAFQAEAEADAFQACAGAAAIQAAAHgCAGQgDAGgEAFQgEAEgFACQgGACgGAAIgHAAgAgIgEQgEACgDACQgDADgBAEQgCAFAAAFIABAJQACAEADADQADADAEACQAEACAEAAQAFAAAEgCQAEgBADgEQADgDABgEQACgEAAgFQAAgGgCgEQgBgEgDgDQgDgCgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_4.setTransform(273.9,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGAEgEIAFgDIAGgBIAGAAIAAAMIgHgBQgFAAgDACIgEAEIgEAHIgBAIIAAAfg");
	this.shape_5.setTransform(267.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAgIgGgCQgGgCgFgFQgEgEgCgGQgCgGAAgHQAAgGACgGQACgGAEgEQAFgFAGgCIAGgCIAHgBQAGAAAIADQAGACAFAFQADAEADAGQACAGAAAGQAAAHgCAGQgDAGgDAEQgFAFgGACQgIADgGAAgAgJgUQgEABgDAEQgCADgBAEQgCAEAAAEQAAAFACAEQABAEACADQADAEAEABQAEACAFAAQAFAAAFgCQAEgBACgEQADgDABgEQACgEAAgFQAAgEgCgEQgBgEgDgDQgCgEgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_6.setTransform(261.2,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAfIgZg9IANAAIARAyIATgyIAMAAIgZA9g");
	this.shape_7.setTransform(254,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAwIgMgDIAAgKIAMADIAMABQAFAAAEgCQAFgBADgCQADgDACgEQACgFAAgGIAAgMIAAAAQgHAIgEACIgGACIgHABQgGAAgGgCQgFgCgEgFQgEgEgDgFQgCgHAAgGQAAgIACgHQADgFAEgEQAEgFAFgDQAGgBAGAAIAHAAIAGACIAGAFIAFAFIAAAAIAAgLIALAAIAAA9IgBAJIgCAHIgDAFIgFAFQgEAEgHABQgGADgGAAIgNgBgAgIgkQgEABgDAEIgEAGQgCAFAAAGQAAAFACAEIAEAGQADADAEACQAEACAEgBQAEAAAFgBQAEgCADgDQADgCABgEQACgFAAgEQAAgGgBgDIgFgIQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(243.4,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAgIAAglIgBgGQgBgDgCgCQgBgDgDgBQgDgCgEAAIgHACQgDABgDADQgEAEgBAEQgBAFgBAEIAAAfIgKAAIAAg9IAKAAIAAAMIAEgGIAGgEIAGgDIAHgBQAGAAAEACQAFABACAEQADADABAFQACAEgBAGIAAAmg");
	this.shape_9.setTransform(235.8,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAeQgEgCgDgDIgEgIIgBgKIAAgmIALAAIAAAkIABAHIACAGQACACADABQACACAEgBIAHgBQAEgCACgDQADgDABgEQACgGAAgEIAAgeIALAAIAAA9IgKAAIAAgLIgBAAQgFAHgDADIgHACIgHABQgFAAgFgCg");
	this.shape_10.setTransform(228.4,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGAEgEIAFgDIAGgBIAGAAIAAAMIgHgBQgFAAgDACIgEAEIgEAHIgBAIIAAAfg");
	this.shape_11.setTransform(222.6,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAwIAAglIgBgHQgBgDgCgBQgBgCgDgCQgDgBgEAAIgHABQgEACgDACQgCADgCAEQgCAGABAFIAAAeIgLAAIAAhgIALAAIAAAjIgBAMIABAAIADgFIAGgFIAHgDIAGAAQAGgBAFACQAEACACAEQADACABAFQABAEABAGIAAAmg");
	this.shape_12.setTransform(216.2,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAfQgFgBgCgCQgEgDgCgEQgCgEAAgFQAAgFACgEQACgDAEgCIAHgDIAKgBIAUACIAAgEIgBgHIgDgEIgGgDIgHgBIgLACIgLADIAAgKIALgDIANgBQAGAAAFACQAFABAEADQADAEACAEQACAEAAAGIAAAnIgLAAIAAgMIgBAAIgEAHIgGAEIgHACIgFABIgIgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIgCAFIACAGQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAQAEADAFAAIAHgBQAEgBADgDQADgCABgEQACgFABgGIgSgBQgJABgDACg");
	this.shape_13.setTransform(208.7,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHAwIAAg0IgMAAIAAgJIAMAAIAAgMIABgKQABgEADgDQABgCADgCIAIgBIAKABIAAAKQgEgCgFABQgEAAgCACQgCADAAAHIAAAMIAPAAIAAAJIgPAAIAAA0g");
	this.shape_14.setTransform(203.4,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGADgEIAGgDIAHgBIAFAAIgBAMIgGgBQgEAAgEACIgEAEIgEAHIgBAIIAAAfg");
	this.shape_15.setTransform(199.1,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAvIAAhdIA8AAIAAAKIgxAAIAAAgIAuAAIgBAJIgtAAIAAAgIAyAAIAAAKg");
	this.shape_16.setTransform(192.6,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGADgEIAGgDIAHgBIAFAAIgBAMIgGgBQgFAAgDACIgFAEIgDAHIgBAIIAAAfg");
	this.shape_17.setTransform(183,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_18.setTransform(176.7,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAgIgKgEIACgKIAKAEIALACQAGAAAEgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIACgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBIgEgDIgMgDQgKgDgDgBQgDgCgBgDQgCgDAAgEQAAgFACgDQACgEADgCQADgDAFgBIAIgBQAGAAAFACQAGABAFACIgDAKQgEgDgFgBIgKgCQgEAAgEACQgEADABAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEADIAMAEIAHACIAGACQADACACADQABADAAAEQAAAFgCAEQgDAEgDADIgJADIgJABIgNgBg");
	this.shape_19.setTransform(170.2,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_20.setTransform(163.6,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAuIAAg9IAKAAIAAA9gAgFggQgBgCAAgEQAAgDABgCQADgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgDgCg");
	this.shape_21.setTransform(158.5,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAvQgGgCgEgEQgEgFgCgGQgDgGAAgHQAAgIADgGQACgFAEgEQAEgFAGgCQAFgCAHAAIAGABQAEAAADACQAEACAGAIIAAAAIAAgMIAAgiIALAAIAABgIgLAAIAAgMIAAAAIgFAGIgGAEIgGADIgGAAQgHAAgFgCgAgIgEQgEACgCACQgDADgCAEQgCAEAAAGQAAAFACAEQACAEADADQACAEAEABQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgEIABgJQAAgFgBgFQgCgEgDgDQgDgCgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_22.setTransform(152.8,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARAgIAAglIAAgGQgBgDgCgCQgCgDgCgBQgDgCgEAAIgHACQgDABgDADQgDAEgCAEQgBAFgBAEIAAAfIgKAAIAAg9IAKAAIAAAMIAFgGIAFgEIAGgDIAHgBQAGAAAEACQAFABACAEQADADABAFQABAEAAAGIAAAmg");
	this.shape_23.setTransform(141.9,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOAfQgDgBgEgCQgDgDgBgEQgCgEAAgFQAAgFACgEQABgDADgCIAIgDIAKgBIAVACIAAgEIgBgHIgEgEIgFgDIgHgBIgLACIgMADIAAgKIAMgDIAMgBQAGAAAFACQAFABADADQAEAEACAEQABAEAAAGIAAAnIgKAAIAAgMIAAAAIgFAHIgGAEIgHACIgGABIgIgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAIAAAFIAAAGQABAAAAABQAAAAABABQAAAAABABQAAAAAAAAQAFADAFAAIAHgBQAEgBACgDQAEgCACgEQABgFABgGIgSgBQgJABgDACg");
	this.shape_24.setTransform(134.4,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAoQgCgBgCgEIgDgIIAAgNIAAgaIgNAAIABgJIAMAAIAAgUIAKAAIAAAUIARAAIAAAJIgRAAIAAAcQAAAJABAEIADACIAEABQAFAAAFgBIAAAJQgGACgHAAQgFAAgDgCg");
	this.shape_25.setTransform(125.3,2.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASAwIAAglIgCgHQAAgDgCgBQgCgCgCgCQgDgBgEAAIgHABQgDACgEACQgDADgBAEQgBAGAAAFIAAAeIgMAAIAAhgIAMAAIAAAjIgBAMIABAAIADgFIAGgFIAGgDIAHAAQAGgBAEACQAEACADAEQADACABAFQABAEABAGIAAAmg");
	this.shape_26.setTransform(119.4,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAfQgGgCgFgEQgEgEgDgGIgCgPQAAgFACgJQADgGAEgEQAFgEAGgCQAGgCAHAAIAKABQAGABAEACIAAAKIgKgDIgKgBQgFAAgDABQgFACgDADQgDADgBAEQgCAEAAAFQAAAGACAEQABAFADACQADADAFACQADABAFAAIAKgBIAKgDIAAAKQgEACgGABIgKABQgHAAgGgCg");
	this.shape_27.setTransform(112.4,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAuIAAg9IALAAIAAA9gAgFggQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_28.setTransform(107.5,1.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAgIAAglIgCgGQAAgDgCgCQgCgDgCgBQgDgCgEAAIgHACQgDABgEADQgDAEgBAEQgBAFAAAEIAAAfIgMAAIAAg9IALAAIAAAMIAEgGIAGgEIAGgDIAHgBQAGAAAEACQAEABADAEQADADABAFQABAEABAGIAAAmg");
	this.shape_29.setTransform(102.3,3.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AARAgIAAglIAAgGQgBgDgCgCQgCgDgCgBQgDgCgEAAIgHACQgDABgDADQgDAEgCAEQgBAFgBAEIAAAfIgKAAIAAg9IAKAAIAAAMIAFgGIAFgEIAGgDIAHgBQAGAAAEACQAFABACAEQADADABAFQABAEAAAGIAAAmg");
	this.shape_30.setTransform(91.5,3.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGQgCgEgBgLQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_31.setTransform(84.2,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAmAgIAAglIAAgGIgDgFQgBgDgDgBQgDgCgEAAQgEABgDACQgDABgDADIgEAHQgCAEAAAEIAAAgIgKAAIAAglIAAgGIgCgFQgCgDgDgBQgCgCgEAAQgEAAgDACQgEABgDADIgDAIQgCAFAAAEIAAAfIgLAAIAAg9IAKAAIAAAMIABAAIAEgGIAFgEIAGgDIAHgBIAIABQAEABABACIAEAFIACAGIAFgGIAFgFIAGgDIAIgBQAGAAAEACQADABAEAEIADAIIABAKIAAAmg");
	this.shape_32.setTransform(74.9,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAmAgIAAglIAAgGIgDgFQgBgDgDgBQgDgCgEAAQgDABgEACQgDABgDADIgEAHQgBAEAAAEIAAAgIgKAAIAAglIgBgGIgDgFQgBgDgDgBQgCgCgEAAQgFAAgDACQgDABgCADIgFAIQgBAFAAAEIAAAfIgLAAIAAg9IAKAAIAAAMIABAAIAEgGIAFgEIAHgDIAHgBIAHABQADABACACIAEAFIACAGIAEgGIAGgFIAHgDIAHgBQAFAAAFACQADABADAEIAEAIIABAKIAAAmg");
	this.shape_33.setTransform(63.4,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHAgIgGgCQgGgCgFgFQgEgEgCgGQgCgGAAgHQAAgGACgGQACgGAEgEQAFgFAGgCIAGgCIAHgBQAGAAAIADQAGACAFAFQADAEADAGQACAGAAAGQAAAHgCAGQgDAGgDAEQgFAFgGACQgIADgGAAgAgJgUQgEABgDAEQgCADgBAEQgCAEAAAEQAAAFACAEQABAEACADQADAEAEABQAEACAFAAQAFAAAFgCQAEgBACgEQADgDABgEQACgEAAgFQAAgEgCgEQgBgEgDgDQgCgEgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_34.setTransform(53.7,3.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAwIgdggIgBAAIAAAgIgLAAIAAhgIALAAIAAA8IABAAIAagZIAPAAIgeAbIAgAig");
	this.shape_35.setTransform(46.9,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgNAgIgLgEIACgKIAKAEIALACQAGAAAEgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIABgEQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBIgEgDIgMgDQgJgDgEgBQgDgCgBgDQgCgDAAgEQAAgFACgDQACgEAEgCQADgDAEgBIAIgBQAGAAAGACQAFABAFACIgDAKQgDgDgFgBIgKgCQgGAAgDACQgDADgBAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAEADIAMAEIAHACIAGACQADACABADQACADAAAEQAAAFgDAEQgBAEgFADIgIADIgJABIgMgBg");
	this.shape_36.setTransform(36.9,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AASAgIAAglIgBgGQgBgDgCgCQgBgDgDgBQgDgCgEAAIgHACQgDABgDADQgDAEgCAEQgBAFgBAEIAAAfIgKAAIAAg9IAKAAIAAAMIAFgGIAFgEIAGgDIAHgBQAGAAAEACQAFABACAEQADADABAFQACAEgBAGIAAAmg");
	this.shape_37.setTransform(30.2,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOAfQgDgBgEgCQgDgDgBgEQgCgEAAgFQAAgFACgEQABgDADgCIAIgDIAKgBIAVACIAAgEIgBgHIgEgEIgFgDIgHgBIgMACIgLADIAAgKIALgDIANgBQAGAAAFACQAFABADADQAEAEACAEQABAEABAGIAAAnIgLAAIAAgMIAAAAIgFAHIgGAEIgHACIgGABIgIgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIgBAFIABAGQAAAAAAABQAAAAABABQAAAAABABQAAAAAAAAQAFADAFAAIAHgBQAEgBADgDQADgCABgEQADgFAAgGIgSgBQgJABgDACg");
	this.shape_38.setTransform(22.7,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAvIAAhdIA7AAIAAAKIgvAAIAAAgIAsAAIAAAJIgsAAIAAAqg");
	this.shape_39.setTransform(15.9,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_40.setTransform(9.3,3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAOAwIgdggIgBAAIAAAgIgLAAIAAhgIALAAIAAA8IABAAIAagZIAPAAIgeAbIAgAig");
	this.shape_41.setTransform(3.9,1.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_42.setTransform(-3.3,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGADgEIAGgDIAGgBIAGAAIgBAMIgGgBQgFAAgDACIgEAEIgEAHIgBAIIAAAfg");
	this.shape_43.setTransform(-8.9,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAvIAAhTIghAAIAAgKIBLAAIAAAKIggAAIAABTg");
	this.shape_44.setTransform(-15.6,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_45.setTransform(-22,3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAgIAAg9IALAAIAAAMIAAAAQADgGAEgEIAFgDIAHgBIAFAAIgBAMIgGgBQgEAAgEACIgFAEIgDAHIgBAIIAAAfg");
	this.shape_46.setTransform(-26.5,3.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgOAfQgDgBgEgCQgDgDgBgEQgCgEAAgFQAAgFACgEQABgDADgCIAIgDIAKgBIAVACIAAgEIgBgHIgEgEIgFgDIgHgBIgLACIgMADIAAgKIAMgDIAMgBQAGAAAFACQAFABADADQAEAEACAEQABAEAAAGIAAAnIgKAAIAAgMIAAAAIgFAHIgGAEIgHACIgGABIgIgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAIAAAFIAAAGQABAAAAABQAAAAABABQAAAAABABQAAAAAAAAQAFADAFAAIAHgBQAEgBACgDQAEgCACgEQABgFABgGIgSgBQgJABgDACg");
	this.shape_47.setTransform(-33,3.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAAAoQgCgBgCgEIgDgIIAAgNIAAgaIgNAAIABgJIAMAAIAAgUIAKAAIAAAUIARAAIAAAJIgRAAIAAAcQAAAJABAEIADACIAEABQAFAAAFgBIAAAJQgGACgHAAQgFAAgDgCg");
	this.shape_48.setTransform(-38.8,2.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRAvQgIgBgHgEIADgLIAOAGQAHACAHAAIAIgBIAHgDQAEgDABgDQACgDAAgEQAAgEgCgDIgGgFIgIgEIgJgDIgKgDIgIgEQgEgDgCgEQgCgFAAgGQAAgGADgGQACgFAFgDQAEgDAHgCQAFgBAGAAQAHAAAHACQAIACAHAEIgDALIgNgGQgHgCgGAAIgHAAIgHADIgFAFQgCADAAAEQAAAEADADQACADAEACQAEADANADIAJADQAFABAEADQADADACAEQADAFAAAGIgBAHIgCAGQgDAFgFAEQgFADgGACQgGABgGAAQgIAAgIgCg");
	this.shape_49.setTransform(-44.9,1.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AACAQIAIgfIANAAIgFAPIgHARgAgVAQIAIgfIAMAAIgEAPIgHARg");
	this.shape_50.setTransform(-51.8,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-8.2,356.2,19.6);


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
	this.shape.graphics.f("#000000").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape.setTransform(192.8,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_1.setTransform(188.6,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_2.setTransform(182.9,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAfQgCgCgBgCIgBgHIgBgKIAAgVIgJAAIAAgFIAJAAIAAgPIAGAAIAAAPIANAAIAAAFIgNAAIAAAYIABAKIABADIAEABIAIgCIAAAGIgJABIgGgBg");
	this.shape_3.setTransform(178.4,6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_4.setTransform(175.5,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAYIgGgDQgCgBgCgDQgBgEgBgEQABgEABgDIAEgDIAGgDIAHAAIARABIAAgDIAAgGIgDgEIgFgCIgGgBIgJABIgIADIgBgGIAJgCIAKgBIAHABQAEABADACQADACABAEQABADABAFIAAAeIgHAAIAAgKIgDAFIgGAEIgEACIgFAAIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFABIAGgBQADgBACgDQADgCACgDIABgJIgQgBg");
	this.shape_5.setTransform(171.4,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAmIAAgfIgBgFQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgGgBIgGABIgGADQgCACgCAEQgBAEAAAFIAAAYIgGAAIAAhLIAGAAIAAAbIAAAKIAAAAIADgEIAEgEQACgBADgBIAGgBQAEAAAEABQADABACAEIADAFIABAHIAAAfg");
	this.shape_6.setTransform(165.7,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAfQgBgCgCgCIgBgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIANAAIAAAFIgNAAIAAAYIABAKIACADIADABIAIgCIAAAGIgJABIgGgBg");
	this.shape_7.setTransform(161.1,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_8.setTransform(156.4,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_9.setTransform(150.8,7.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAfQgCgCAAgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYIAAAKIADADIADABIAIgCIAAAGIgJABIgGgBg");
	this.shape_10.setTransform(143.7,6.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAmIAAgfIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgGgBIgGABIgGADQgCACgCAEQgBAEAAAFIAAAYIgGAAIAAhLIAGAAIAAAbIAAAKIAAAAIADgEIAEgEQACgBADgBIAGgBQAEAAAEABQADABACAEIADAFIABAHIAAAfg");
	this.shape_11.setTransform(139,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAYQgFgCgDgDQgEgDgCgEQgBgEgBgIQAAgDACgHQACgFAEgDQADgDAFgCQAEgBAFAAIAIAAIAIADIgBAGIgIgDIgHgBIgHABIgGAEIgEAGQgCAEAAAEQAAAFACAEQABAEADACQADADADABIAHABIAHgBIAIgDIABAGIgIADIgIAAIgJgBg");
	this.shape_12.setTransform(133.6,7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgDgaIgBgEIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_13.setTransform(129.8,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_14.setTransform(125.7,7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgEQgCgGAAgFQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAGADIAIAHIAAAAIAAgJIAAgbIAGAAIAABKIgGAAIAAgJIAAAAIgEAFIgFADIgFABIgFABQgFAAgEgCgAgGgFQgEABgCADIgEAFQgCAFAAAEQAAAFACADQABAEADADIAGADIAGACQAEAAAEgCIAGgEIAEgHQABgDAAgEQAAgEgBgFQgCgDgDgBIgGgFQgDgBgEAAQgDAAgDABg");
	this.shape_15.setTransform(116.9,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_16.setTransform(111,7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgDgaIgBgEIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_17.setTransform(106.9,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAYIgIgCIABgGIAIADIAIABIAEgBIAFgBIACgDIABgEIgBgEIgDgDIgJgDQgHgBgEgCIgDgDQgBgCAAgDQAAgEABgDIAFgEIAFgDIAGAAIAIABIAIADIgCAFIgGgDIgIgBQgEAAgEACIgCACIgBAEQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIADACIAJADIAGACIAEABIAEAEIABAFQgBAEgBAEIgFAEIgFADIgHAAIgJgBg");
	this.shape_18.setTransform(103.4,7.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_19.setTransform(95.8,7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_20.setTransform(91.8,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_21.setTransform(87.9,7.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgDgaIgBgEIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_22.setTransform(83.9,6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAlIAAhIIAGAAIAAAKIABAAIAEgFIAEgDIAGgCIAEgBQAGAAAEACIAHAFQAEADABAFQACAFAAAGQAAAFgCAFQgBAEgEADQgDAEgEABQgEACgGAAIgFgBIgFgCIgFgDIgDgFIgBAAIAAAKIAAAYgAgGgdQgEACgCADQgDACgBAEQgCADAAAFIACAIIAEAFQADADADABQAEABADAAIAHgBIAGgEQACgCACgDIABgIIgBgJIgEgGQgDgDgDgBQgDgBgEAAQgEAAgDABg");
	this.shape_23.setTransform(79.7,8.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAlQgGgCgFgDIABgGQAGADAGACIAJABIAHgBIAGgCIAEgGQACgCAAgEQAAgDgCgDQgBgCgDgCIgHgDIgHgCIgHgCIgHgDQgDgDgCgEQgBgDAAgFQAAgFACgDQACgEADgCIAIgEIAIgBQAGAAAFABIALAGIgBAGIgLgGIgKgBIgGABIgGACIgDAEIgCAGQAAAEACACIAEAFIAOAFIAIACIAGADIAEAFQACAEAAAFQAAAFgCAEQgBAEgFADIgHAEIgKABIgLgBg");
	this.shape_24.setTransform(73.5,5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_25.setTransform(65.2,7.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAlIgJgCIAAgGIAJACIAJABIAIgBIAGgDQADgDABgEQACgDAAgGIAAgJQgFAFgDACIgGACIgFABQgFAAgEgCQgFgBgDgEQgDgDgCgDQgCgGAAgFQAAgGACgFQACgFADgDQADgDAFgCQAEgBAFAAIAFAAIAFACIAFADIAEAFIAAgJIAGAAIAAAuIgCAMIgDAFIgDADQgDADgFACQgFABgFABIgJgBgAgGgeQgEABgCADIgEAGQgCAFAAAEQAAAFACADQABADADADIAGADIAGACQAEAAADgCQAEgBACgDIAEgFIACgIIgBgIIgEgGQgDgDgDgCIgIgBQgDAAgDABg");
	this.shape_26.setTransform(59.2,8.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgDgaIgBgEIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_27.setTransform(55,6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_28.setTransform(50.8,7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgDgaIgBgEIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_29.setTransform(46.7,6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAlIAAhJIAsAAIAAAGIgmAAIAAAcIAkAAIAAAFIgkAAIAAAcIAnAAIAAAGg");
	this.shape_30.setTransform(42.7,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(36.4,-3,160.7,17.9), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape.setTransform(109.3,-165.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAUIgBgCIgBgFIAAgGIAAgOIgHAAIAAgEIAHAAIAAgJIACAAIAAAJIAKAAIgBAEIgJAAIAAAPIABAHIABACIADAAIAFAAIAAADIgGABIgEgBg");
	this.shape_1.setTransform(107.3,-167.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAXIAAgfIADAAIAAAfgAgBgRIgBgDIABgBIABgBIACABIABABIgBADIgCABIgBgBg");
	this.shape_2.setTransform(105.4,-167.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAQIgFgDQgDgDAAgCIgCgIIACgGQAAgDADgDIAFgDIAEgBIAHABIAEADIADAGIABAGIAAACIgZAAIABAFIADAEIAEABIAEABIAGgBIAGgBIAAADIgGADIgGAAIgGgBgAALgBIgBgFIgCgDIgDgDIgFAAIgCAAIgEADIgDADIgBAFIAVAAIAAAAg");
	this.shape_3.setTransform(102.8,-167.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAYIAAgDIAdgoIgdAAIAAgEIAjAAIAAADIgeAoIAeAAIAAAEg");
	this.shape_4.setTransform(98.7,-168);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAQIgFgDQgCgDgBgCIgCgIIACgGQABgDACgDIAFgDIAEgBIAGABIAFADIADAGIABAGIAAACIgZAAIABAFIADAEIAEABIAEABIAGgBIAGgBIAAADIgGADIgGAAIgGgBgAALgBIgBgFIgCgDIgDgDIgFAAIgDAAIgDADIgDADIgBAFIAVAAIAAAAg");
	this.shape_5.setTransform(93.1,-167.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAUIgBgCIgBgFIAAgGIAAgOIgHAAIAAgEIAHAAIAAgJIACAAIAAAJIAKAAIgBAEIgJAAIAAAPIABAHIABACIADAAIAFAAIAAADIgGABIgEgBg");
	this.shape_6.setTransform(90.1,-167.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAQIAAgDIATgZIgSAAIAAgDIAXAAIAAACIgSAZIATAAIAAAEg");
	this.shape_7.setTransform(87.5,-167.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKAQIAAgSIgBgEIgBgDIgCgCIgEAAIgDAAIgFACIgCAFIgBAEIAAAQIgEAAIAAgfIAEAAIAAAHIACgCIACgDIAEgCIADgBIAGABQAAABABAAQAAAAABABQAAAAAAABQABAAAAABIACADIABAGIAAASg");
	this.shape_8.setTransform(84.1,-167.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAQIgFgDQgDgDAAgCIgCgIIACgGQAAgDADgDIAFgDIAEgBIAHABIAEADIADAGIABAGIAAACIgZAAIABAFIADAEIAEABIAEABIAGgBIAGgBIAAADIgGADIgGAAIgGgBgAALgBIgBgFIgCgDIgDgDIgFAAIgCAAIgEADIgDADIgBAFIAVAAIAAAAg");
	this.shape_9.setTransform(80.4,-167.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAQIAAgfIAEAAIAAAHIADgFIACgCIAEgBIACABIAAAFIgDgBIgEABIgCACIgCAFIAAADIAAAQg");
	this.shape_10.setTransform(77.5,-167.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAYIgHgBIABgDIAGABIAGAAIAEAAIAEgDIADgEIABgGIAAgGIgFAFIgEACIgDAAQgDAAgDgCIgFgDQgCgCgBgCIgBgHIABgHQABgDACgDIAFgDQADgBADAAIADABIADABIAEACIACAEIAAgHIAEAAIAAAeIgBAIIgCAEIgCACQgCACgDABIgGABIgGgBgAgEgTQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAGIABAFQAAABAAABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAEABIAFgBIAEgCIACgEIABgFIAAgFIgDgEIgEgDIgFgBIgEABg");
	this.shape_11.setTransform(74,-166.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAQIgFgDQgCgDgCgCIgBgIIABgGQACgDACgDIAFgDIAEgBIAHABIAEADIADAGIABAGIAAACIgYAAIABAFIACAEIAEABIAEABIAGgBIAFgBIAAADIgFADIgGAAIgGgBgAALgBIgBgFIgCgDIgDgDIgFAAIgCAAIgEADIgCADIgBAFIAUAAIAAAAg");
	this.shape_12.setTransform(70.2,-167.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAZIgEgCIgDgCIgCgDIgBAAIAAAGIgDAAIAAgwIAEAAIAAARIAAAHIACgDIADgDIAEgBIADgBQADAAADACIAFADQACACABACIABAHIgBAHQgBADgCADIgFADQgDABgDAAIgDAAgAgEgDIgEADIgDADIgBAFIABAFIADAFIAEACIAEABIAFgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAIABgGIgBgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgFgBIgEABg");
	this.shape_13.setTransform(66.3,-168);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHAQIAAgfIAEAAIAAAHIADgFIACgCIAEgBIACABIAAAFIgDgBIgEABIgCACIgCAFIAAADIAAAQg");
	this.shape_14.setTransform(61.4,-167.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAWIgDgCIgCgFIgBgEIAAgUIAEAAIAAATIABAEIABADIACACIAEABIAEgBQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBIADgEIABgHIAAgOIAEAAIAAAfIgEAAIAAgGIgFAFIgDABIgEABIgFgBgAAEgQIgBgDIABgCIACgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAIABACIgBADIgDABIgCgBgAgIgQIgBgDIABgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBADIgDABIgCgBg");
	this.shape_15.setTransform(58.2,-167.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAYIAAgbIgHAAIAAgEIAHAAIAAgGIAAgFIACgDIABgCIAEAAIAFAAIAAADIgFAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgBAGIAAAGIAHAAIAAAEIgHAAIAAAbg");
	this.shape_16.setTransform(55.3,-168);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAQIAAgfIAEAAIAAAHIADgFIACgCIAEgBIACABIAAAFIgDgBIgEABIgCACIgCAFIAAADIAAAQg");
	this.shape_17.setTransform(51.5,-167.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAPIgDgCIgCgFIgBgEIAAgUIAEAAIAAATIABAEIABADIACACIAEABIAEgBQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBIADgEIABgGIAAgPIAEAAIAAAfIgEAAIAAgGIgFAFIgDABIgEABIgFgBg");
	this.shape_18.setTransform(48.3,-167.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAYIgfgpIAAApIgEAAIAAgvIAFAAIAeApIAAAAIAAgpIAEAAIAAAvg");
	this.shape_19.setTransform(43.7,-168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(39.1,-173.9,73.1,11.8), null);


(lib.kirk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap14, null, new cjs.Matrix2D(0.944,0,0,0.944,-151.9,-236.6)).s().p("AKQKPQgBgFAAgKIgBgQQgDgPgQgKQgJgGgJgBIAAgCIAAgEIgBgDIAAgDIgBgFIgBgCIgDgFIgCgDIgGgDIgJgDIAAACIgKABIgGADIgDADIgCAFIgCACIAAAFIgBADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAABIxnAAIAAgBIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIgBgDIAAgEIAAgDIAAgEIABgDIgBgEIAAgEIgBgDIgBgEIgCgEIgDgCIgBgBIAAgBQAEgGgDgIQgDgGgHgCQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCAAQgDAAgEAFQgIAGgCAGIgBAHIgDACIgCAEIgCADIAAABIgHAAIgGACIgBAAIAAAAIgBABIgBAAQgFABgDAFIgGAJQgCADgHADIgGAAQgIABgGAHQgDAEgCAGQgFACgEAIQgDAHACAGQABAKAIAFIAAABIgBAXQAAANACAIIAGAMIAFAMIACANImAAAQALgQACgPQABgSACgIQACgHAIgKIARgXQAIgKAGgEIADgDIAWACQAuAGASgVQALgMgDgSIAAgCIADgNQAEgMAPgUIA/hOIAxg8QAOgSAJgHIAigVQATgNAFgPQACgGABgLQABgMACgFIAPgVQAFgIAFgNIAHgVIANgaQAJgRADgJQAMgdgKgTIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgCIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIgBgEIAAgDIAAgEIAAgDIAAgDIAAgDQAGgCAMgBQASgCAegIQAhgJAOgBQAOgCAjgBQAYAAAQgDQARAEASgDQAWgCALgMQAKgNgCgSQAAgMgFgJIgBgDQACgGAAgIQABgLgEgKIgCgEIACgFQAHgHAGgIQAJgOAEgNQAHgHAFgCIAYgJQAPgFAFgJQACgCACgIQABgHACgDIAOgLQAEgEADgFQAKACAMAAQAYAAAQgEQAGgCARgHIAEgCIAHABIAZAHIAQACIALAGIAUAOQAIAFAOAUQAKANAJAKQAJAKACAGQACAGAAALQAAALACAGIAEAMQAAAEgFAJQgRAeALAYQAFAQASAGQAQAFAPgHIAUABIBHAAQBHABAdAEIASADIAMADQAVADAigCQApgCAOABIAoAFQAYADAiACQAcABALADIAaAIQATAFAXgBIABABQAPAHAMADIAEAMIAAADIAAADIAAAEIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAADIAAAEIAAADIAAADIAAAFIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAABIAAADIAAADIABACQgFAHgDAHIgBAEIgEAEIgDADIgDAEIgCAEIgCADIAAAEIAAADIAAADIgCAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAACIAAACQAAAFACAGIAAACIAAABIACAEIACADIABABIACACIAAABIAGAGIABAAIAEAEIAIAEIADAAIAOAGIATANIAYATIAcAZQARANARAGIAaAJIATAKQAQAGAdgBIANAAIATABQAIABASAJIAWAMIAKAHIAMAGIAPACQAOAFAIATIAHAPQAEAIAFAGQAGAHAKAEIADAAIAEALIAGAbQAEAPAMAWQAGAIACAGIABAQIABADg");
	this.shape.setTransform(104,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kirk, new cjs.Rectangle(0,0,208.1,131), null);


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
	this.instance.setTransform(-38,0,0.847,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-38,0,322.1,50), null);


(lib.newPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBBoQgSgEgNgJQgQgNgHgKIgIgPIgGgTIgWAAIACgaIASAAIAAgIIAAgHIgUAAIACgaIAUAAQADgNALgVQAHgKAQgNQANgJASgFQAPgEAUAAQAUAAAmAKIgCAsQgPgFgNgCQgPgDgNAAQgKAAgIACQgIABgIAEQgGAEgEAFQgGAHgDAIIBfAAIgFAaIhfAAIAAAHIAAAIIBcAAIgGAaIhQAAQADAJAFAFQAFAGAGAEQAHAEAIACQAIABAKAAQANAAAPgCIAcgIIACAsQgmAKgUAAQgUAAgPgFg");
	this.shape.setTransform(83.2,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJCmQAUgPAggkQAXgcATgfQgTAFgXAAQgVAAgUgJQgUgHgOgPQgOgOgJgSQgIgUAAgXQAAgTAKggQAGgPAVgXQARgQAYgJQAPgFAkgDQATAAAhAJQAXAJARARQAQAQAKAVQAIAWAAAYQAAAYgJAeQgJAcgQAeQgQAegUAbQgUAcgXAUgAgUhhQgJAEgIAHQgGAHgEAKQgEAJAAALQAAALAEAJQAEAJAGAIQAIAHAJAEQALADALAAQALAAAKgDQAKgEAHgHQAHgIADgJQAFgJAAgLQAAgLgFgJQgDgKgHgHQgHgHgKgEQgKgEgLAAQgLAAgLAEg");
	this.shape_1.setTransform(57.3,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMCjIAAg8IiQAAIAAg/ICRjKIBJAAIAADKIAvAAIgCA/IgtAAIAAA8gAg3AoIBDAAIAAhdIgBAAg");
	this.shape_2.setTransform(27.9,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMCjIAAg8IiQAAIAAg/ICQjKIBJAAIAADKIAxAAIgDA/IguAAIAAA8gAg3AoIBDAAIAAhdIgBAAg");
	this.shape_3.setTransform(-1.6,19.3);

	this.instance = new lib.legal_withpurchase();
	this.instance.parent = this;
	this.instance.setTransform(66.8,63.3,1.048,1.048,0,0,0,117.7,8);

	this.instance_1 = new lib.legal_limitedtime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,333.8,1.641,1.641,0,0,0,37.6,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-18.4,-9.5,168.5,80), null);


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
(lib.oculus_trek_320x50_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(161.2,23.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:542.4,y:86.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(177));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.8,24,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-255.2,y:33.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(174));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.2,23.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-108,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(171));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(164.2,23.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-161.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(168));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.2,27.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:477.6,y:36},32,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160.6,28.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-27.2,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(161.2,29.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:13.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.1,-15.5,-0.1,15.6).s().p("AmACbIAAk1IMBAAIAAE1g");
	this.shape.setTransform(250.6,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.059)"],[0,0.98],-0.1,-16.2,-0.1,16.2).s().p("AmACiIAAlDIMBAAIAAFDg");
	this.shape_1.setTransform(250.6,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.118)"],[0,0.957],-0.1,-16.8,-0.1,16.9).s().p("AmACpIAAlRIMBAAIAAFRg");
	this.shape_2.setTransform(250.6,49.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],-0.1,-17.5,-0.1,17.6).s().p("AmACwIAAlfIMBAAIAAFfg");
	this.shape_3.setTransform(250.6,48.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.239)"],[0,0.914],-0.1,-18.2,-0.1,18.2).s().p("AmAC3IAAltIMBAAIAAFtg");
	this.shape_4.setTransform(250.6,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)"],[0,0.894],-0.1,-18.9,-0.1,18.8).s().p("AmAC9IAAl5IMBAAIAAF5g");
	this.shape_5.setTransform(250.6,47.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],-0.1,-19.5,-0.1,19.5).s().p("AmADEIAAmHIMBAAIAAGHg");
	this.shape_6.setTransform(250.6,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.42)"],[0,0.851],-0.1,-20.2,-0.1,20.2).s().p("AmADLIAAmVIMBAAIAAGVg");
	this.shape_7.setTransform(250.6,45.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.478)"],[0,0.827],-0.1,-20.9,-0.1,20.8).s().p("AmADRIAAmhIMBAAIAAGhg");
	this.shape_8.setTransform(250.6,45.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmADYIAAmvIMBAAIAAGvg");
	this.shape_9.setTransform(250.6,44.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmBDYIAAmvIMDAAIAAGvg");
	this.shape_10.setTransform(250.6,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmCDYIAAmvIMEAAIAAGvg");
	this.shape_11.setTransform(250.6,44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmCDYIAAmvIMFAAIAAGvg");
	this.shape_12.setTransform(250.6,44.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmDDYIAAmvIMHAAIAAGvg");
	this.shape_13.setTransform(250.5,44.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmEDYIAAmvIMJAAIAAGvg");
	this.shape_14.setTransform(250.5,44.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmFDYIAAmvIMLAAIAAGvg");
	this.shape_15.setTransform(250.5,44.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmGDYIAAmvIMNAAIAAGvg");
	this.shape_16.setTransform(250.5,44.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmHDYIAAmvIMPAAIAAGvg");
	this.shape_17.setTransform(250.5,44.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmIDYIAAmvIMRAAIAAGvg");
	this.shape_18.setTransform(250.5,44.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmJDYIAAmvIMTAAIAAGvg");
	this.shape_19.setTransform(250.5,44.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmKDYIAAmvIMVAAIAAGvg");
	this.shape_20.setTransform(250.5,44.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmLDYIAAmvIMXAAIAAGvg");
	this.shape_21.setTransform(250.5,44.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmMDYIAAmvIMZAAIAAGvg");
	this.shape_22.setTransform(250.5,44.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmMDYIAAmvIMaAAIAAGvg");
	this.shape_23.setTransform(250.5,44.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmNDYIAAmvIMbAAIAAGvg");
	this.shape_24.setTransform(250.5,44.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmODYIAAmvIMdAAIAAGvg");
	this.shape_25.setTransform(250.5,44.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmPDYIAAmvIMeAAIAAGvg");
	this.shape_26.setTransform(250.5,44.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmPDYIAAmvIMfAAIAAGvg");
	this.shape_27.setTransform(250.5,44.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmQDYIAAmvIMgAAIAAGvg");
	this.shape_28.setTransform(250.5,44.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmQDYIAAmvIMhAAIAAGvg");
	this.shape_29.setTransform(250.5,44.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmRDYIAAmvIMiAAIAAGvg");
	this.shape_30.setTransform(250.5,44.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-21.6,-0.1,21.4).s().p("AmRDYIAAmvIMjAAIAAGvg");
	this.shape_31.setTransform(250.5,44.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmSDYIAAmvIMlAAIAAGvg");
	this.shape_32.setTransform(250.5,44.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmTDYIAAmvIMnAAIAAGvg");
	this.shape_33.setTransform(250.5,44.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmUDYIAAmvIMpAAIAAGvg");
	this.shape_34.setTransform(250.5,44.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmVDYIAAmvIMrAAIAAGvg");
	this.shape_35.setTransform(250.5,44.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmWDYIAAmvIMtAAIAAGvg");
	this.shape_36.setTransform(250.5,44.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmXDYIAAmvIMvAAIAAGvg");
	this.shape_37.setTransform(250.5,44.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmYDYIAAmvIMxAAIAAGvg");
	this.shape_38.setTransform(250.5,44.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmZDYIAAmvIMzAAIAAGvg");
	this.shape_39.setTransform(250.5,44.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmaDYIAAmvIM1AAIAAGvg");
	this.shape_40.setTransform(250.5,44.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmbDYIAAmvIM3AAIAAGvg");
	this.shape_41.setTransform(250.5,44.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmcDYIAAmvIM4AAIAAGvg");
	this.shape_42.setTransform(250.5,44.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmcDYIAAmvIM5AAIAAGvg");
	this.shape_43.setTransform(250.5,44.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmdDYIAAmvIM6AAIAAGvg");
	this.shape_44.setTransform(250.5,44.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmdDYIAAmvIM7AAIAAGvg");
	this.shape_45.setTransform(250.5,44.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.4).s().p("AmeDYIAAmvIM8AAIAAGvg");
	this.shape_46.setTransform(250.5,44.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.5).s().p("AmfDYIAAmvIM/AAIAAGvg");
	this.shape_47.setTransform(250.4,44.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.6,0,21.6).s().p("AmkDZIAAmxINJAAIAAGxg");
	this.shape_48.setTransform(250.1,44.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-21.8,0,21.7).s().p("AmrDbIAAm1INXAAIAAG1g");
	this.shape_49.setTransform(249.6,44.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-22,0,21.9).s().p("Am2DcIAAm3INtAAIAAG3g");
	this.shape_50.setTransform(249,44.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-22.3,0,22.2).s().p("AnEDfIAAm9IOJAAIAAG9g");
	this.shape_51.setTransform(248.1,44.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-22.6,0,22.5).s().p("AnUDiIAAnDIOpAAIAAHDg");
	this.shape_52.setTransform(247.1,44.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-22.9,-0.1,22.8).s().p("AnpDmIAAnLIPSAAIAAHLg");
	this.shape_53.setTransform(245.9,44.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-23.4,-0.1,23.2).s().p("AoADqIAAnTIQAAAIAAHTg");
	this.shape_54.setTransform(244.5,44.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],0,-23.9,0,23.7).s().p("AoZDvIAAndIQzAAIAAHdg");
	this.shape_55.setTransform(242.9,44.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-24.4,-0.1,24.2).s().p("Ao2D0IAAnnIRtAAIAAHng");
	this.shape_56.setTransform(241.2,44.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-25,-0.1,24.8).s().p("ApWD6IAAnzISuAAIAAHzg");
	this.shape_57.setTransform(239.2,44.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-25.6,-0.1,25.5).s().p("Ap6EAIAAn/IT1AAIAAH/g");
	this.shape_58.setTransform(237.1,44);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-26.4,-0.1,26.1).s().p("AqgEHIAAoOIVBAAIAAIOg");
	this.shape_59.setTransform(234.8,43.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-27.1,-0.1,26.9).s().p("ArJEPIAAodIWTAAIAAIdg");
	this.shape_60.setTransform(232.2,43.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-27.9,-0.1,27.7).s().p("Ar2EXIAAotIXtAAIAAItg");
	this.shape_61.setTransform(229.5,43.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-28.8,-0.1,28.5).s().p("AslEgIAAo/IZLAAIAAI/g");
	this.shape_62.setTransform(226.7,43.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-29.7,-0.1,29.4).s().p("AtYEpIAApRIaxAAIAAJRg");
	this.shape_63.setTransform(223.6,43.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-30.7,-0.1,30.4).s().p("AuNEzIAAplIcbAAIAAJlg");
	this.shape_64.setTransform(220.3,43.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-31.7,-0.1,31.5).s().p("AvGE9IAAp5IeNAAIAAJ5g");
	this.shape_65.setTransform(216.9,43);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.1,-32.8,-0.1,32.5).s().p("AwBFIIAAqPMAgDAAAIAAKPg");
	this.shape_66.setTransform(213.2,42.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-34,-0.2,33.7).s().p("AxAFTIAAqlMAiBAAAIAAKlg");
	this.shape_67.setTransform(209.5,42.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-35.2,-0.2,34.9).s().p("AyCFgIAAq/MAkFAAAIAAK/g");
	this.shape_68.setTransform(205.4,42.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-36.4,-0.2,36.1).s().p("AzGFsIAArXMAmOAAAIAALXg");
	this.shape_69.setTransform(201.3,42.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.494)"],[0,0.824],-0.2,-35.2,-0.2,34.9).s().p("AznFgIAAq/MAnPAAAIAAK/g");
	this.shape_70.setTransform(191.8,42.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.447)"],[0,0.839],-0.2,-34.1,-0.2,33.7).s().p("A0IFUIAAqnMAoRAAAIAAKng");
	this.shape_71.setTransform(182.3,42.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.404)"],[0,0.855],-0.2,-32.8,-0.2,32.6).s().p("A0pFIIAAqPMApTAAAIAAKPg");
	this.shape_72.setTransform(172.9,42.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],-0.2,-31.6,-0.2,31.4).s().p("A1JE8IAAp3MAqUAAAIAAJ3g");
	this.shape_73.setTransform(163.4,43.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.314)"],[0,0.886],-0.2,-30.4,-0.2,30.2).s().p("A1qEwIAApfMArVAAAIAAJfg");
	this.shape_74.setTransform(153.9,43.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.271)"],[0,0.906],-0.2,-29.1,-0.2,29).s().p("A2LEkIAApHMAsXAAAIAAJHg");
	this.shape_75.setTransform(144.5,43.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.224)"],[0,0.922],-0.2,-28,-0.2,27.8).s().p("A2sEYIAAovMAtZAAAIAAIvg");
	this.shape_76.setTransform(135,43.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],-0.2,-26.7,-0.2,26.6).s().p("A3MEMIAAoXMAuZAAAIAAIXg");
	this.shape_77.setTransform(125.5,44);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,0.953],-0.2,-25.5,-0.2,25.5).s().p("A3tD/IAAn9MAvbAAAIAAH9g");
	this.shape_78.setTransform(116.1,44.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.09)"],[0,0.969],-0.2,-24.3,-0.2,24.3).s().p("A4ODzIAAnmMAwdAAAIAAHmg");
	this.shape_79.setTransform(106.6,44.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.043)"],[0,0.984],-0.2,-23,-0.2,23.1).s().p("A4vDnIAAnNMAxfAAAIAAHNg");
	this.shape_80.setTransform(97.2,44.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.2,-21.9,-0.2,21.9).s().p("A5PDbIAAm1MAyfAAAIAAG1g");
	this.shape_81.setTransform(87.7,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[]},1).wait(60));

	// Layer 9
	this.instance_7 = new lib.flare_1("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(246.6,40,0.255,0.255,0,0,0,53.3,101);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72).to({_off:false},0).to({_off:true},38).wait(100));

	// Layer 2
	this.instance_8 = new lib.kirk();
	this.instance_8.parent = this;
	this.instance_8.setTransform(163.7,16.1,0.019,0.019,0,0,0,121,80.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({regX:104.7,regY:65.7,scaleX:0.26,scaleY:0.26,x:250.5,y:49.4},20).to({regX:104.8,regY:66.3,scaleX:0.28,scaleY:0.28,y:51.3},67).to({regX:104.4,regY:66.1,scaleX:0.8,scaleY:0.8,x:200.7,y:101},23,cjs.Ease.get(-1)).to({_off:true},1).wait(72));

	// Layer 15
	this.instance_9 = new lib.logo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(163,14.2,0.007,0.007,0,0,0,123.5,87.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({regX:118.4,regY:64.9,scaleX:0.15,scaleY:0.15,x:249.7,y:12.1},20).wait(67).to({regX:118.6,regY:65.5,scaleX:0.33,scaleY:0.33,x:198.3,y:-12.9},23,cjs.Ease.get(-1)).to({regX:117.3,regY:63.7,scaleX:0.71,scaleY:0.71,x:84.7,y:-42.6,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 1
	this.instance_10 = new lib.Tween5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(163.7,15.1,0.018,0.018,0,0,0,17.1,5.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({regX:1.1,regY:0.8,scaleX:0.24,scaleY:0.24,x:250.3,y:22.4},20).to({regX:1,regY:0.6,scaleX:0.26,scaleY:0.26,y:22},67).to({regX:0.8,scaleX:0.76,scaleY:0.76,x:199.8,y:15.9},23,cjs.Ease.get(-1)).to({regX:0.6,regY:0.1,scaleX:1.39,scaleY:1.39,x:86.8,y:4.7,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_41 = new cjs.Graphics().p("AyIA5IAAhyMAkRAAAIAAByg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_graphics_41,x:94.8,y:19.5}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 12
	this.instance_11 = new lib.text2_mc("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(41.9,30.4,0.498,0.498,0,0,0,0.3,0.1);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({_off:false},0).to({regY:0.3,y:19},9).wait(54).to({startPosition:0},0).to({regX:0.2,regY:0.4,scaleX:1.01,scaleY:1.01,x:-260.5,y:16.1},23,cjs.Ease.get(-1)).to({regX:0.3,regY:0.2,scaleX:1.25,scaleY:1.25,x:-584.9,y:19.4,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("AqIA6IAAhzIURAAIAABzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:147.8,y:27.9}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 13
	this.instance_12 = new lib.text3_mc("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(183.8,39.9,0.498,0.498,0,0,0,0.2,0.3);
	this.instance_12._off = true;

	this.instance_13 = new lib.text3("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-207.5,43.7,1.955,1.955,0,0,0,0.2,0.2);
	this.instance_13.alpha = 0;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},56).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_12}]},49).to({state:[{t:this.instance_12}]},23).to({state:[{t:this.instance_13}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(56).to({_off:false},0).to({regY:0.2,y:27.9},9).wait(49).to({startPosition:0},0).to({regX:0.4,regY:0.4,scaleX:1.2,scaleY:1.2,x:34.9,y:34.4},23,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.2,scaleX:1.96,scaleY:1.96,x:-207.5,y:43.7,alpha:0},12).wait(61));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(265.2,25,0.646,0.646,0,0,0,127.9,-4.7);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(145).to({_off:false},0).wait(65));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_146 = new cjs.Graphics().p("AnrDLIAAmVIPXAAIAAGVg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_2_graphics_146,x:172,y:25.2}).wait(64));

	// price
	this.instance_14 = new lib.newPrice();
	this.instance_14.parent = this;
	this.instance_14.setTransform(169.8,59.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(146).to({_off:false},0).to({y:24.1},10,cjs.Ease.get(1)).wait(54));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_146 = new cjs.Graphics().p("An9BEIAAiHIP7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_3_graphics_146,x:63.4,y:26.2}).wait(64));

	// oculus
	this.instance_15 = new lib.logo_oculus();
	this.instance_15.parent = this;
	this.instance_15.setTransform(64,40.1,0.07,0.07,0,0,0,155.6,288.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(146).to({_off:false},0).to({y:25.1},10,cjs.Ease.get(1)).wait(54));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(186.8,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.8,25,322.1,50);
// library properties:
lib.properties = {
	id: '6FEEF5B8C11D47359487AB28B63508D1',
	width: 320,
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
an.compositions['6FEEF5B8C11D47359487AB28B63508D1'] = {
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