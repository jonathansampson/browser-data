define(function () {

    return ["AnalyserNode","ApplicationCache","Array","ArrayBuffer","Attr","Audio","AudioBuffer","AudioBufferSourceNode","AudioDestinationNode","AudioListener","AudioNode","AudioParam","AudioProcessingEvent","AutocompleteErrorEvent","BarProp","BeforeLoadEvent","BeforeUnloadEvent","BiquadFilterNode","Blob","Boolean","CDATASection","CSS","CSSCharsetRule","CSSFontFaceRule","CSSImportRule","CSSKeyframeRule","CSSKeyframesRule","CSSMediaRule","CSSPageRule","CSSPrimitiveValue","CSSRule","CSSRuleList","CSSStyleDeclaration","CSSStyleRule","CSSStyleSheet","CSSValue","CSSValueList","CSSVariablesMap","CSSViewportRule","CanvasGradient","CanvasPattern","CanvasRenderingContext2D","ChannelMergerNode","ChannelSplitterNode","CharacterData","ClientRect","ClientRectList","Clipboard","CloseEvent","Comment","CompositionEvent","ConvolverNode","Counter","CustomEvent","DOMException","DOMImplementation","DOMParser","DOMSettableTokenList","DOMStringList","DOMStringMap","DOMTokenList","DataTransferItemList","DataView","Date","DelayNode","DeviceMotionEvent","DeviceOrientationEvent","Document","DocumentFragment","DocumentType","DynamicsCompressorNode","Element","Entity","Error","ErrorEvent","EvalError","Event","EventSource","EventTarget","File","FileError","FileList","FileReader","Float32Array","Float64Array","FocusEvent","FormData","Function","GainNode","HTMLAllCollection","HTMLAnchorElement","HTMLAppletElement","HTMLAreaElement","HTMLAudioElement","HTMLBRElement","HTMLBaseElement","HTMLBodyElement","HTMLButtonElement","HTMLCanvasElement","HTMLCollection","HTMLContentElement","HTMLDListElement","HTMLDataListElement","HTMLDirectoryElement","HTMLDivElement","HTMLDocument","HTMLElement","HTMLEmbedElement","HTMLFieldSetElement","HTMLFontElement","HTMLFormControlsCollection","HTMLFormElement","HTMLFrameElement","HTMLFrameSetElement","HTMLHRElement","HTMLHeadElement","HTMLHeadingElement","HTMLHtmlElement","HTMLIFrameElement","HTMLImageElement","HTMLInputElement","HTMLKeygenElement","HTMLLIElement","HTMLLabelElement","HTMLLegendElement","HTMLLinkElement","HTMLMapElement","HTMLMarqueeElement","HTMLMediaElement","HTMLMenuElement","HTMLMetaElement","HTMLMeterElement","HTMLModElement","HTMLOListElement","HTMLObjectElement","HTMLOptGroupElement","HTMLOptionElement","HTMLOptionsCollection","HTMLOutputElement","HTMLParagraphElement","HTMLParamElement","HTMLPreElement","HTMLProgressElement","HTMLQuoteElement","HTMLScriptElement","HTMLSelectElement","HTMLShadowElement","HTMLSourceElement","HTMLSpanElement","HTMLStyleElement","HTMLTableCaptionElement","HTMLTableCellElement","HTMLTableColElement","HTMLTableElement","HTMLTableRowElement","HTMLTableSectionElement","HTMLTemplateElement","HTMLTextAreaElement","HTMLTitleElement","HTMLTrackElement","HTMLUListElement","HTMLUnknownElement","HTMLVideoElement","HashChangeEvent","History","IDBCursor","IDBCursorWithValue","IDBDatabase","IDBFactory","IDBIndex","IDBKeyRange","IDBObjectStore","IDBOpenDBRequest","IDBRequest","IDBTransaction","IDBVersionChangeEvent","Image","ImageBitmap","ImageData","Infinity","InputMethodContext","Int16Array","Int32Array","Int8Array","Intl","JSON","KeyboardEvent","Location","Math","MediaController","MediaElementAudioSourceNode","MediaError","MediaKeyError","MediaKeyEvent","MediaList","MediaSource","MediaStreamAudioDestinationNode","MediaStreamAudioSourceNode","MediaStreamEvent","MediaStreamTrack","MessageChannel","MessageEvent","MessagePort","MimeType","MimeTypeArray","MouseEvent","MutationEvent","MutationObserver","MutationRecord","NaN","NamedNodeMap","Navigator","Node","NodeFilter","NodeIterator","NodeList","Notation","Notification","Number","Object","OfflineAudioCompletionEvent","Option","OscillatorNode","OverflowEvent","PageTransitionEvent","Performance","PerformanceEntry","PerformanceMark","PerformanceMeasure","PerformanceNavigation","PerformanceResourceTiming","PerformanceTiming","PeriodicWave","Plugin","PluginArray","PopStateEvent","ProcessingInstruction","ProgressEvent","Promise","RGBColor","RTCIceCandidate","RTCSessionDescription","Range","RangeError","Rect","ReferenceError","RegExp","SVGAElement","SVGAltGlyphDefElement","SVGAltGlyphElement","SVGAltGlyphItemElement","SVGAngle","SVGAnimateColorElement","SVGAnimateElement","SVGAnimateMotionElement","SVGAnimateTransformElement","SVGAnimatedAngle","SVGAnimatedBoolean","SVGAnimatedEnumeration","SVGAnimatedInteger","SVGAnimatedLength","SVGAnimatedLengthList","SVGAnimatedNumber","SVGAnimatedNumberList","SVGAnimatedPreserveAspectRatio","SVGAnimatedRect","SVGAnimatedString","SVGAnimatedTransformList","SVGAnimationElement","SVGCircleElement","SVGClipPathElement","SVGColor","SVGComponentTransferFunctionElement","SVGCursorElement","SVGDefsElement","SVGDescElement","SVGDocument","SVGElement","SVGElementInstance","SVGElementInstanceList","SVGEllipseElement","SVGFEBlendElement","SVGFEColorMatrixElement","SVGFEComponentTransferElement","SVGFECompositeElement","SVGFEConvolveMatrixElement","SVGFEDiffuseLightingElement","SVGFEDisplacementMapElement","SVGFEDistantLightElement","SVGFEDropShadowElement","SVGFEFloodElement","SVGFEFuncAElement","SVGFEFuncBElement","SVGFEFuncGElement","SVGFEFuncRElement","SVGFEGaussianBlurElement","SVGFEImageElement","SVGFEMergeElement","SVGFEMergeNodeElement","SVGFEMorphologyElement","SVGFEOffsetElement","SVGFEPointLightElement","SVGFESpecularLightingElement","SVGFESpotLightElement","SVGFETileElement","SVGFETurbulenceElement","SVGFilterElement","SVGFontElement","SVGFontFaceElement","SVGFontFaceFormatElement","SVGFontFaceNameElement","SVGFontFaceSrcElement","SVGFontFaceUriElement","SVGForeignObjectElement","SVGGElement","SVGGeometryElement","SVGGlyphElement","SVGGlyphRefElement","SVGGradientElement","SVGGraphicsElement","SVGHKernElement","SVGImageElement","SVGLength","SVGLengthList","SVGLineElement","SVGLinearGradientElement","SVGMPathElement","SVGMarkerElement","SVGMaskElement","SVGMatrix","SVGMetadataElement","SVGMissingGlyphElement","SVGNumber","SVGNumberList","SVGPaint","SVGPathElement","SVGPathSeg","SVGPathSegArcAbs","SVGPathSegArcRel","SVGPathSegClosePath","SVGPathSegCurvetoCubicAbs","SVGPathSegCurvetoCubicRel","SVGPathSegCurvetoCubicSmoothAbs","SVGPathSegCurvetoCubicSmoothRel","SVGPathSegCurvetoQuadraticAbs","SVGPathSegCurvetoQuadraticRel","SVGPathSegCurvetoQuadraticSmoothAbs","SVGPathSegCurvetoQuadraticSmoothRel","SVGPathSegLinetoAbs","SVGPathSegLinetoHorizontalAbs","SVGPathSegLinetoHorizontalRel","SVGPathSegLinetoRel","SVGPathSegLinetoVerticalAbs","SVGPathSegLinetoVerticalRel","SVGPathSegList","SVGPathSegMovetoAbs","SVGPathSegMovetoRel","SVGPatternElement","SVGPoint","SVGPointList","SVGPolygonElement","SVGPolylineElement","SVGPreserveAspectRatio","SVGRadialGradientElement","SVGRect","SVGRectElement","SVGRenderingIntent","SVGSVGElement","SVGScriptElement","SVGSetElement","SVGStopElement","SVGStringList","SVGStyleElement","SVGSwitchElement","SVGSymbolElement","SVGTSpanElement","SVGTextContentElement","SVGTextElement","SVGTextPathElement","SVGTextPositioningElement","SVGTitleElement","SVGTransform","SVGTransformList","SVGUnitTypes","SVGUseElement","SVGVKernElement","SVGViewElement","SVGViewSpec","SVGZoomEvent","Screen","ScriptProcessorNode","SecurityPolicy","Selection","SharedWorker","SpeechInputEvent","SpeechSynthesisEvent","SpeechSynthesisUtterance","Storage","StorageEvent","String","StyleSheet","StyleSheetList","SyntaxError","Text","TextEvent","TextMetrics","TextTrack","TextTrackCue","TextTrackCueList","TextTrackList","TimeRanges","Touch","TouchEvent","TouchList","TrackEvent","TransitionEvent","TreeWalker","TypeError","UIEvent","URIError","URL","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray","VTTCue","ValidityState","WaveShaperNode","WebGLActiveInfo","WebGLBuffer","WebGLContextEvent","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLRenderingContext","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebKitAnimationEvent","WebKitCSSFilterRule","WebKitCSSFilterValue","WebKitCSSMatrix","WebKitCSSMixFunctionValue","WebKitCSSTransformValue","WebKitMediaSource","WebKitMutationObserver","WebKitPoint","WebKitShadowRoot","WebKitSourceBuffer","WebKitSourceBufferList","WebKitTransitionEvent","WebSocket","WheelEvent","Window","Worker","XMLDocument","XMLHttpRequest","XMLHttpRequestProgressEvent","XMLHttpRequestUpload","XMLSerializer","XPathEvaluator","XPathExpression","XPathResult","XSLTProcessor","applicationCache","chrome","clientInformation","closed","console","crypto","decodeURI","decodeURIComponent","defaultStatus","defaultstatus","devicePixelRatio","document","document","encodeURI","encodeURIComponent","escape","eval","event","external","frameElement","frames","history","indexedDB","innerHeight","innerWidth","isFinite","isNaN","length","localStorage","location","locationbar","menubar","name","navigator","offscreenBuffering","opener","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","parseFloat","parseInt","performance","personalbar","screen","screenLeft","screenTop","screenX","screenY","scrollX","scrollY","scrollbars","self","sessionStorage","speechSynthesis","status","statusbar","styleMedia","toolbar","top","undefined","unescape","webkitAudioContext","webkitAudioPannerNode","webkitIDBCursor","webkitIDBDatabase","webkitIDBFactory","webkitIDBIndex","webkitIDBKeyRange","webkitIDBObjectStore","webkitIDBRequest","webkitIDBTransaction","webkitIndexedDB","webkitMediaStream","webkitNotifications","webkitOfflineAudioContext","webkitRTCPeerConnection","webkitSpeechGrammar","webkitSpeechGrammarList","webkitSpeechRecognition","webkitSpeechRecognitionError","webkitSpeechRecognitionEvent","webkitStorageInfo","webkitURL","window"];

});