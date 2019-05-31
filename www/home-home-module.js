(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/exif-js/exif.js":
/*!**************************************!*\
  !*** ./node_modules/exif-js/exif.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"] }])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \r\n<ion-header>\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"icons\" color=\"primary\" (ionChange)=\"tabChange()\">\r\n            <ion-segment-button value=\"grid\">\r\n                <ion-icon name=\"grid\"></ion-icon>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"albums\">\r\n                <ion-icon name=\"albums\"></ion-icon>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <img #img1 class=\"image_error\"  (load)=\"imgLoaded()\">\r\n    <div class=\"swiper-container\">\r\n        <!--<div class=\"swiper-wrapper\">-->\r\n        <!--<ion-slides pager=\"false\" autoHeight=\"true\" (ionSlideDidChange)=\"slideDidChange()\" (ionSlideWillChange)=\"slideWillChange()\" [ngStyle]=\"{ 'height': slideIndex===0 ? 'auto' : '100vh' }\">-->\r\n        <ion-slides sliderperview=\"2\" pager=\"false\" [options]=\"slideOpts\" (ionSlideDidChange)=\"slideDidChange()\" (ionSlideWillChange)=\"slideWillChange()\">\r\n\r\n            <ion-slide>\r\n\r\n\r\n\r\n                <ion-grid style=\"width:100%;\">\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">This Week</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W1\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W1')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color: darkred;font-size:12px;\">Last Week</ion-label>\r\n                            </ion-item>\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W2\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W2')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">2 Weeks Ago</ion-label>\r\n                            </ion-item>\r\n\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W3\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W3')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">3 Week Ago</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W4\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W4')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">Last Month</ion-label>\r\n                            </ion-item>\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_M1\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'M1')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">2 Months Ago</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_M2\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'M2')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">Earlier in : {{strM3Qualifier}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_M3\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'M3')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y1')\">Year: {{strY1Qualifier}} </ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y1\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y1')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y2')\">Year: {{strY2Qualifier}} </ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y2\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y2')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y3')\">Year: {{strY3Qualifier}} </ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y3\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y3')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y4')\">Older... </ion-label>\r\n                            </ion-item>\r\n\r\n\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y4\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y4')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n\r\n\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n\r\n                <ion-grid class=\"MyGrid\">\r\n                    <ion-row wrap>\r\n                        <ion-col *ngFor=\"let album of Albums\">\r\n                            <img (click)=\"loadAlbum(album)\" src=\"assets/icon/albums.jpg\" />\r\n                            <ion-label align=\"center\">{{album}}</ion-label>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n\r\n\r\n            </ion-slide>\r\n\r\n        </ion-slides>\r\n    </div>\r\n\r\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"icons !='albums' \">\r\n        <ion-fab-button color=\"tertiary\" (click)=\"LoadSourceOptions()\" ion-fab mini><ion-icon name=\"cloud-upload\"></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"icons ==='albums' \">\r\n        <ion-fab-button color=\"tertiary\" (click)=\"addAlbum()\" ion-fab mini><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n    <!--<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n        <ion-fab-button color=\"secondary\" (click)=\"presentAlertSettings()\" ion-fab mini><ion-icon name=\"settings\"></ion-icon></ion-fab-button>\r\n    </ion-fab>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".square {\n  width: 100%;\n  padding-bottom: 100%;\n  background-color: black;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.wrapper * {\n  /*height: 100%;*/\n  width: 100%; }\n\n.MyGrid {\n  --ion-grid-columns: 2; }\n\n.image_error {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFtaXQucGF1bFxcRmlsZVVwbG9hZC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gscUJBQW9CO0VBQ3BCLHdCQUF1QjtFQUN2Qix5QkFBd0I7RUFDeEIsNkJBQTRCO0VBQzVCLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGlCQUFpQjtFQUNqQixZQUFXLEVBRWQ7O0FBRUQ7RUFDSSxzQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcXVhcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXIgKiB7XHJcbiAgICAvKmhlaWdodDogMTAwJTsqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLk15R3JpZCB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDI7XHJcbn1cclxuXHJcbi5pbWFnZV9lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_community_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/community.service */ "./src/app/services/community.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/masterdetail.service */ "./src/app/services/masterdetail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/ngx/index.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(exif_js__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var HomePage = /** @class */ (function () {
    /////////////////////
    function HomePage(navCtrl, transfer, camera, file, loadingCtrl, toastCtrl, httpClient, communityService, photoViewer, alertController, imagePicker, masterDetailService, route, storage, screenshot) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.httpClient = httpClient;
        this.communityService = communityService;
        this.photoViewer = photoViewer;
        this.alertController = alertController;
        this.imagePicker = imagePicker;
        this.masterDetailService = masterDetailService;
        this.route = route;
        this.storage = storage;
        this.screenshot = screenshot;
        this.newImgArray = [];
        this.slideIndex = 0;
        this.blnLoadingDismissed = false;
        this.slideOpts = {
            autoHeight: 'true',
            initialSlide: '1'
        };
        //Album Slide specific
        this.Albums = [];
        this.cntImagetoLoad = 0;
        this.icons = "grid";
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.slideIndex = 0;
        //this.presentAlertMultipleButtons();
        //this.getImageList();
        //this.presentAlertLoadError("Checking Service Version");
        this.storage.get('serviceVersion').then(function (val) {
            if (val != null) {
                console.log(val);
                if (val === "P") {
                    //this.communityService.baseUrl = "https://azcommunityrestapi20181209100659.azurewebsites.net/api";
                    //this.communityService.baseUrl = "https://95.179.202.83:443/api";
                    _this.communityService.baseUrl = "http://atozsolutions.co.za:49168/api";
                }
                else if (val === "A") {
                    _this.communityService.baseUrl = "http://10.0.2.2:49168/api";
                }
                else if (val === "B") {
                    _this.communityService.baseUrl = "http://localhost:49168/api";
                }
                //this.presentAlertLoadError("Service Version Set");
                _this.presentLoading();
                _this.getImageList();
            }
            else {
                //this.presentAlertLoadError("Service Version not found using default");
                //this.communityService.baseUrl = "https://azcommunityrestapi20181209100659.azurewebsites.net/api";
                //this.communityService.baseUrl = "https://95.179.202.83:443/api";
                _this.communityService.baseUrl = "http://atozsolutions.co.za:8100/api";
                _this.presentLoading();
                _this.getImageList();
            }
        });
        this.storage.get('imgPerRow').then(function (val) {
            if (val != null) {
                console.log(val);
                _this.masterDetailService.setImgGridCols(parseInt(val));
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });
        this.storage.get('rowsPerPage').then(function (val) {
            if (val != null) {
                console.log(val);
                _this.masterDetailService.setImgGridRows(parseInt(val));
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });
    };
    HomePage.prototype.presentImageSOurceOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Input Required!',
                            message: 'Please select image source',
                            buttons: [
                                {
                                    text: 'Camera',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        _this.getImage();
                                        console.log('Camera Selected');
                                    }
                                }, {
                                    text: 'Library',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        _this.LoadImagePicker();
                                        console.log('Image Picker Selected');
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Upload Cancelled');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.LoadSourceOptions = function () {
        this.presentImageSOurceOptions();
    };
    HomePage.prototype.presentAlertMultipleButtons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Attention!',
                            message: 'Please select the environment',
                            buttons: [
                                {
                                    text: 'Android',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.communityService.baseUrl = "http://10.0.2.2:49168/api";
                                        _this.presentLoading();
                                        _this.getImageList();
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Browser',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        _this.communityService.baseUrl = "http://localhost:49168/api";
                                        _this.presentLoading();
                                        _this.getImageList();
                                        console.log('Confirm Okay');
                                    }
                                }, {
                                    text: 'Production',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        //this.communityService.baseUrl = "https://azcommunityrestapi20181209100659.azurewebsites.net/api";
                                        _this.communityService.baseUrl = "https://95.179.202.83:443/api";
                                        _this.presentLoading();
                                        _this.getImageList();
                                        //this.slides.options = this.slideOpts;
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.LoadImage = function (imgUrl, strFilter) {
        if (imgUrl === 'assets/icon/more.png') {
            this.setImgFilter(strFilter);
        }
        else if (imgUrl != '') {
            //this.presentLoading();
            var imgName_1 = imgUrl.replace(this.masterDetailService.getThumbBase(), '');
            //let intIndex = this.objImage.findIndex(x => x.imgName === imgName);
            var intIndex = this.masterDetailService.getImages().filter(function (p) { return p.period === strFilter; }).findIndex(function (x) { return x.imgName === imgName_1; });
            if (intIndex != -1) {
                this.masterDetailService.setIndex(intIndex);
            }
            else {
                intIndex = this.getGridIndex(imgUrl, strFilter);
                this.masterDetailService.setIndex(intIndex);
            }
            //this.masterDetailService.setImages(this.objImageList.filter(p => p.period === strFilter));
            this.masterDetailService.setFilter(strFilter);
            this.masterDetailService.setListMode("GENERAL");
            this.navCtrl.navigateForward('gallery');
        }
        //this.photoViewer.show(this.objImageList.filter(p => p.imgUrl === imgUrl)[0].imgParentUrl);
    };
    HomePage.prototype.LoadImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 5,
            quality: 75,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then(function (file_uris) {
            console.log(file_uris);
            _this.masterDetailService.setUris(file_uris);
            //this.navCtrl.navigateForward('gallery');
            _this.cntImagetoLoad = file_uris.length;
            _this.presentLoading();
            for (var i = 0; i < file_uris.length; i++) {
                _this.getBase64String(file_uris[i]);
            }
            //////this.getImageList();
        }, function (err) { console.log('uh oh'); });
    };
    HomePage.prototype.getBase64String = function (imageUri) {
        var _this = this;
        var fileName = imageUri.split('/').pop();
        var path = imageUri.substring(0, imageUri.lastIndexOf("/") + 1);
        //var window: any;
        //window.resolveLocalFileSystemURI(imageUri, (fileEntry) => {
        //    fileEntry.getMetadata((metadata) => {
        //        console.log("image size : " + metadata.size);
        //        console.log("image date : " + metadata.modificationTime);
        //    });
        //});
        //this.file.getFile(path, fileName).then()
        //let img = { src: imageUri.webPath };
        //this.chosenImg = "data:image/jpeg;base64," + imageUri;
        //if (this.platform.is('ios'))
        //    this.chosenImg = normalizeURL(imageData);
        //// IF problem only occur in ios and normalizeURL 
        ////not work for you then you can also use 
        ////this.base64Image= imageData.replace(/^file:\/\//, '');
        //else
        //        this.base64Image = "data:image/jpeg;base64," + imageData;
        //}
        //this.file.resolveDirectoryUrl(path).then(dirEntry => {
        //    this.file.getFile(dirEntry, fileName, { create: false }).then(fileEntry => {
        //        fileEntry.getMetadata(function (metadata) {
        //            console.log(metadata.modificationTime)
        //        })
        //    })
        //});
        this.file.readAsDataURL(path, fileName)
            .then(function (base64File) {
            //const cameraDetail = <CameraDetail>JSON.parse(base64File.replace("data:image/jpeg;base64,", ''));
            //const exifData = <CameraExifDetail>JSON.parse(cameraDetail.json_metadata);
            //this.chosenImg = base64File;
            _this.base64Image = base64File;
            _this.img1.src = _this.base64Image;
            exif_js__WEBPACK_IMPORTED_MODULE_13__["getData"](_this.img1, function () {
                var allMetaData = exif_js__WEBPACK_IMPORTED_MODULE_13__["getAllTags"](this);
                console.log('ALL TAGS - ', allMetaData);
                var lng = exif_js__WEBPACK_IMPORTED_MODULE_13__["getTag"](this, 'GPSLongitude') || null;
                var lat = exif_js__WEBPACK_IMPORTED_MODULE_13__["getTag"](this, 'GPSLatitude') || null;
                console.log('LNG - ', lng);
                console.log('LAT - ', lat);
            });
            _this.uploadFile();
        })
            .catch(function () {
            console.log('Error reading file');
            return '';
        });
    };
    HomePage.prototype.imgLoaded = function () {
        //document.getElementById("img1")
        exif_js__WEBPACK_IMPORTED_MODULE_13__["getData"](this.img1, function () {
            var allMetaData = exif_js__WEBPACK_IMPORTED_MODULE_13__["getAllTags"](this);
            console.log('ALL TAGS - ', allMetaData);
            var lng = exif_js__WEBPACK_IMPORTED_MODULE_13__["getTag"](this, 'GPSLongitude') || null;
            var lat = exif_js__WEBPACK_IMPORTED_MODULE_13__["getTag"](this, 'GPSLatitude') || null;
            console.log('LNG - ', lng);
            console.log('LAT - ', lat);
        });
    };
    HomePage.prototype.setBase = function (baseResponse) {
        this.masterDetailService.setParentBase(baseResponse.baseParent);
        this.masterDetailService.setThumbBase(baseResponse.baseThumbnail);
    };
    HomePage.prototype.getImageList = function () {
        var _this = this;
        console.log(this.getDateTime());
        //this.presentAlertLoadError("Getting Base Urls");
        this.communityService.getImageBaseUrls().subscribe(function (resp) {
            //this.presentAlertLoadError("Base Urls Received");
            _this.setBase(resp);
            //this.presentAlertLoadError("Getting Images");
            //this.masterDetailService.setParentBase("https://s3-us-west-2.amazonaws.com/azcommunityimages/");
            //this.masterDetailService.setThumbBase("https://s3-us-west-2.amazonaws.com/azcommunityimages//Thumbnails/");
            _this.communityService.getImageList().subscribe(function (resp) {
                try {
                    //this.presentAlertLoadError("Images Received");
                    _this.masterDetailService.setImages(resp);
                    console.log(_this.masterDetailService.setImages);
                    ///////ALBUM PAGE//////////////
                    _this.Albums = _this.masterDetailService.getAlbums().split(",");
                    ///////////////////////////////
                    _this.populateGrid("W1");
                    _this.populateGrid("W2");
                    _this.populateGrid("W3");
                    _this.populateGrid("W4");
                    _this.populateGrid("M1");
                    _this.populateGrid("M3");
                    _this.populateGrid("M2");
                    _this.populateGrid("Y1");
                    _this.populateGrid("Y2");
                    _this.populateGrid("Y3");
                    _this.populateGrid("Y4");
                    ///////ALBUM PAGE//////////////
                    _this.Albums = _this.masterDetailService.getAlbums().split(",");
                    //this.slides.slideNext();
                    _this.slides.slideTo(0);
                    //this.slides.slidePrev();
                    ///////////////////////////////
                    _this.loadingCtrl.dismiss();
                }
                catch (err) {
                    _this.blnLoadingDismissed = true;
                    _this.loadingCtrl.dismiss();
                    _this.presentAlertLoadError(err);
                }
            }, function (err) {
                _this.blnLoadingDismissed = true;
                _this.loadingCtrl.dismiss();
                _this.presentAlertLoadError(err);
            });
        }, function (err) {
            _this.blnLoadingDismissed = true;
            _this.loadingCtrl.dismiss();
            _this.presentAlertLoadError(err);
        });
        //this.objcommunity = this.communityService.getCommunity(id);
        //console.log(this.objcommunity);
    };
    HomePage.prototype.presentAlertLoadError = function (strMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Load Error!',
                            message: strMessage,
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getGridIndex = function (imgUrl, strFilter) {
        var localGrid;
        var gridIndex = 0;
        var tempGridName = "grid_" + strFilter;
        localGrid = this[tempGridName];
        for (var i = 0; i < localGrid.length; i++) {
            for (var j = 0; j < localGrid[i].length; j++) {
                if (localGrid[i][j] === imgUrl) {
                    return gridIndex;
                }
                else {
                    gridIndex++;
                }
            }
        }
    };
    HomePage.prototype.populateGrid = function (periodFilter) {
        var localImgList = this.masterDetailService.getImages().filter(function (p) { return p.period === periodFilter; });
        var rowCount;
        if (localImgList.length > 20) {
            this.localGrid = Array(5);
            rowCount = 20;
        }
        else {
            this.localGrid = Array(Math.ceil(localImgList.length / 4));
            rowCount = localImgList.length;
        }
        this.rowNum = 0;
        for (var i = 0; i < rowCount; i += 4) {
            this.localGrid[this.rowNum] = Array(4);
            if (localImgList[i]) {
                this.localGrid[this.rowNum][0] = this.masterDetailService.getThumbBase() + localImgList[i].imgName;
                //this.createArrayEntry(localImgList[i].imgUrl, localImgList[i].imgParentUrl);
                this.colNum = 0;
            }
            if (localImgList[i + 1]) {
                this.localGrid[this.rowNum][1] = this.masterDetailService.getThumbBase() + localImgList[i + 1].imgName;
                this.colNum = 1;
            }
            else {
                this.localGrid[this.rowNum][1] = "";
            }
            if (localImgList[i + 2]) {
                this.localGrid[this.rowNum][2] = this.masterDetailService.getThumbBase() + localImgList[i + 2].imgName;
                this.colNum = 2;
            }
            else {
                this.localGrid[this.rowNum][2] = "";
            }
            if (localImgList[i + 3]) {
                this.localGrid[this.rowNum][3] = this.masterDetailService.getThumbBase() + localImgList[i + 3].imgName;
                this.colNum = 3;
            }
            else {
                this.localGrid[this.rowNum][3] = "";
            }
            //if (localImgList[i + 4]) {
            //    this.localGrid[this.rowNum][4] = localImgList[i + 4].imgUrl;
            //    this.colNum = 4;
            //}
            //else {
            //    this.localGrid[this.rowNum][4] = "";
            //}
            this.rowNum++;
        }
        if (localImgList.length > 20) {
            this.localGrid[4][3] = 'assets/icon/more.png';
        }
        if (periodFilter === 'W1') {
            this.grid_W1 = [];
            this.grid_W1 = this.localGrid;
        }
        else if (periodFilter === 'W2') {
            this.grid_W2 = this.localGrid;
        }
        else if (periodFilter === 'W3') {
            this.grid_W3 = this.localGrid;
        }
        else if (periodFilter === 'W4') {
            this.grid_W4 = this.localGrid;
        }
        else if (periodFilter === 'M1') {
            this.grid_M1 = this.localGrid;
        }
        else if (periodFilter === 'M2') {
            this.grid_M2 = this.localGrid;
        }
        else if (periodFilter === 'M3') {
            if (localImgList.length > 0) {
                this.strM3Qualifier = localImgList[0].imgYear;
            }
            this.grid_M3 = this.localGrid;
        }
        else if (periodFilter === 'Y1') {
            if (localImgList.length > 0) {
                this.strY1Qualifier = localImgList[0].imgYear;
            }
            this.grid_Y1 = this.localGrid;
        }
        else if (periodFilter === 'Y2') {
            if (localImgList.length > 0) {
                this.strY2Qualifier = localImgList[0].imgYear;
            }
            this.grid_Y2 = this.localGrid;
        }
        else if (periodFilter === 'Y3') {
            if (localImgList.length > 0) {
                this.strY3Qualifier = localImgList[0].imgYear;
            }
            this.grid_Y3 = this.localGrid;
        }
        else if (periodFilter === 'Y4') {
            this.grid_Y4 = this.localGrid;
        }
        this.rowNum--;
    };
    HomePage.prototype.setImgFilter = function (strFilter) {
        this.masterDetailService.setFilter(strFilter);
        if (strFilter === "Y4") {
            //this.loadingCtrl.dismiss();
            this.presentPrompt(strFilter);
        }
        else {
            this.masterDetailService.setY4Filter("");
            this.presentListLoading();
            //this.masterDetailService.setListMode("GALLERY");
            //this.masterDetailService.setIsDirty(false);
            //this.navCtrl.navigateForward('imglist');
        }
        //(this.objImageList.filter(p => p.period === strFilter));
    };
    HomePage.prototype.presentListLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Busy...'
                            //,duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        //return await loading.present();
                        return [4 /*yield*/, loading.present().then(function (val) {
                                console.log(val);
                                _this.masterDetailService.setListMode("GALLERY");
                                _this.masterDetailService.setIsDirty(false);
                                _this.navCtrl.navigateForward('imglist');
                                //loading.dismiss();
                            })];
                    case 2:
                        //return await loading.present();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentPrompt = function (strFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var localList, strYears, alertInputOptions, i, x, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localList = this.masterDetailService.getImages().filter(function (p) { return p.period === strFilter; });
                        strYears = "";
                        alertInputOptions = [];
                        for (i = 0; i < localList.length; i++) {
                            if (strYears.search(localList[i].imgYear + ",") === -1) {
                                strYears = strYears + localList[i].imgYear + ",";
                                x = {
                                    type: 'radio',
                                    label: localList[i].imgYear,
                                    name: localList[i].imgYear,
                                    value: localList[i].imgYear,
                                    checked: i === 0 ? true : false
                                };
                                alertInputOptions.push(x);
                            }
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: "Too many Images. Please select an Year to refine results",
                                inputs: alertInputOptions,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Open',
                                        handler: function (data) {
                                            _this.masterDetailService.setY4Filter(data);
                                            _this.presentListLoading();
                                            //this.masterDetailService.setListMode("GALLERY");
                                            //this.masterDetailService.setIsDirty(false);
                                            //this.navCtrl.navigateForward('imglist');
                                            //console.log(data);
                                            //console.log(data.albumname);
                                            //let strAlbum: string = data.albumname;
                                            //this.masterDetailService.addAlbum(strAlbum.toUpperCase().replace("-", "_"));
                                            //this.Albums = this.masterDetailService.getAlbums().split(",");
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.addToGrid = function (imgUrl) {
        if (this.colNum < 3) {
            this.colNum++;
            this.grid[this.rowNum][this.colNum] = imgUrl;
        }
        else {
            var rowArray = Array(4);
            var x = void 0;
            x = this.grid.push(["", "", "", ""]);
            this.rowNum++;
            this.colNum = 0;
            this.grid[this.rowNum][this.colNum] = imgUrl;
        }
    };
    HomePage.prototype.createArrayEntry = function (imgUrl, parentUrl) {
        var imgEntry = {
            "imgUrl": imgUrl,
            "imgParentUrl": parentUrl
        };
        this.newImgArray.push(imgEntry);
    };
    HomePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 65,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.presentLoading();
            _this.cntImagetoLoad = 1;
            _this.getBase64String(imageData);
            //this.file.resolveLocalFilesystemUrl(imageData).then(oneFile => {
            //    this.imageFileName = oneFile.name;
            //    this.file.readAsArrayBuffer(this.file.tempDirectory, oneFile.name).then(realFile=>{
            //        this.imageURI = realFile;
            //        console.log(this.imageFileName);
            //    });
            //});
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    HomePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Busy...'
                            //,duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        //return await loading.present();
                        return [4 /*yield*/, loading.present().then(function (val) {
                                if (_this.blnLoadingDismissed) {
                                    _this.blnLoadingDismissed = false;
                                    loading.dismiss();
                                }
                                console.log(val);
                                //loading.dismiss();
                            })];
                    case 2:
                        //return await loading.present();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getDateTime = function () {
        var currentdate = new Date();
        //let strMonth: String = currentdate.toISOString().split("T")[0].split("-")[1].padStart(2, "0");
        //let strDay: String = currentdate.toISOString().split("T")[0].split("-")[2].padStart(2, "0");
        //let datetime = currentdate.toISOString().split("T")[0].split("-")[0].toString() +
        //    +strMonth +
        //    + currentdate.toISOString().split("T")[0].split("-")[2].padStart(2, "0") + "-"
        //    + currentdate.toISOString().split("T")[1].split(":")[0] +
        //    + currentdate.toISOString().split("T")[1].split(":")[1] +
        //    + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[0]
        //    + "-" + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[1].replace("Z", "");
        var datetime = currentdate.toISOString().split("T")[0].split("-")[0].toString()
            + currentdate.toISOString().split("T")[0].split("-")[1]
            + currentdate.toISOString().split("T")[0].split("-")[2] + "-"
            + currentdate.toISOString().split("T")[1].split(":")[0]
            + currentdate.toISOString().split("T")[1].split(":")[1]
            + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[0]
            + "-" + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[1].replace("Z", "");
        return datetime;
    };
    HomePage.prototype.getDatePart = function (strPart) {
        var currentdate = new Date();
        if (strPart === "Y") {
            return currentdate.toISOString().split("T")[0].split("-")[0];
        }
        else if (strPart === "M") {
            return currentdate.toISOString().split("T")[0].split("-")[1];
        }
    };
    HomePage.prototype.uploadFile = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        var fileTransfer = this.transfer.create();
        var picDetail = {
            "imgName": this.getDateTime() + "-APP.jpg",
            "imgData": this.base64Image.replace("data:image/jpeg;base64,", '')
        };
        this.httpClient.post(this.communityService.baseUrl + '/ImageUpload/File/xyz.jpg/', picDetail, requestOptions)
            .subscribe(function (data) {
            _this.base64Image = "";
            console.log(data['_body']);
            _this.appendToImgList(JSON.parse(data['_body']));
            _this.cntImagetoLoad--;
            if (_this.cntImagetoLoad === 0) {
                _this.loadingCtrl.dismiss();
                _this.populateGrid("W1");
                _this.presentToast("Image uploaded successfully");
            }
        }, function (error) {
            console.log(error);
            _this.loadingCtrl.dismiss();
            _this.presentToast(error);
        });
    };
    HomePage.prototype.appendToImgList = function (newImg) {
        var newEntry = {
            "imgName": newImg.imgName,
            //"imgUrl": newImg.imgUrl,
            "imgParentUrl": newImg.imgParentUrl,
            "period": "W1",
            "imgAlbum": newImg.imgAlbum,
            "imgYear": newImg.imgYear,
            "imgMonth": newImg.imgMonth
        };
        this.masterDetailService.pushImage(newEntry);
        //this.populateGrid("W1");
    };
    HomePage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        //toast.onDidDismiss(() => {
                        //    console.log('Dismissed toast');
                        //});
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.slideDidChange = function () {
        var _this = this;
        this.slidesMoving = false;
        //////this.slides.getActiveIndex().then(val => {
        //////    let slideIndex: number = val;
        //////    this.slideIndex = val;
        //////    //if (this.slideIndex === 1) {
        //////    //    this.Albums = this.masterDetailService.getAlbums().split(",");
        //////    //}
        //////    //let currentSlide: Element = this.slides
        //////    //let slideNumbers : number = this.slides.length();
        //////    //if (slideIndex === 1) {
        //////    //    this.slidesHeight = 200;
        //////    //}
        //////});
        this.slides.getActiveIndex().then(function (val) {
            if (val == 0) {
                _this.icons = "grid";
                //this.slides.lockSwipeToPrev(true);
            }
            else if (val == 1) {
                _this.icons = "albums";
                //this.slides.lockSwipeToPrev(false);
            }
        });
        //this.navCtrl.navigateRoot("about");
    };
    HomePage.prototype.tabChange = function () {
        if (this.icons === "grid") {
            this.slides.slideTo(0);
            //this.slides.lockSwipeToPrev(true);
        }
        else if (this.icons === "albums") {
            this.slides.slideTo(1);
            //this.slides.lockSwipeToPrev(false);
        }
    };
    HomePage.prototype.slideWillChange = function () {
        this.slidesMoving = true;
        //this.screenshot.URI(100).then(scrUri => { this.masterDetailService.setTabImg(0, scrUri) });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter");
        if (this.masterDetailService.getFilter() != '' && this.masterDetailService.getIsDirty()) {
            //this.presentLoading();
            //this.populateGrid("W1");
            //this.populateGrid("W2");
            //this.populateGrid("W3");
            //this.populateGrid("W4");
            //this.populateGrid("M1");
            //this.populateGrid("M3");
            //this.populateGrid("M2");
            //this.populateGrid("Y1");
            //this.populateGrid("Y2");
            //this.populateGrid("Y3");
            //this.populateGrid("Y4");
            this.masterDetailService.setIsDirty(false);
            //this.loadingCtrl.dismiss();
        }
    };
    HomePage.prototype.presentAlertSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alertController = document.querySelector('ion-alert-controller');
                        return [4 /*yield*/, alertController.componentOnReady()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, alertController.create({
                                header: 'App Settings',
                                inputs: [
                                    {
                                        name: 'imgPerRow',
                                        value: this.masterDetailService.getImgGridCols(),
                                        placeholder: 'Images per Row'
                                    },
                                    {
                                        name: 'imgRowsPerPage',
                                        value: this.masterDetailService.getImgGridRows(),
                                        placeholder: 'Grid rows per page'
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function (data) {
                                            console.log('Confirm Ok');
                                            _this.masterDetailService.setImgGridCols(parseInt(data.imgPerRow));
                                            _this.masterDetailService.setImgGridRows(parseInt(data.imgRowsPerPage));
                                        }
                                    }
                                ]
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.ngOnInit();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.target.complete();
        }, 2000);
    };
    /////////////////////ALBUM PAGE SPECIFIC//////////////////////
    HomePage.prototype.presentAlbumLoading = function (strAlbum) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'loading images...'
                            //,duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        //return await loading.present();
                        return [4 /*yield*/, loading.present().then(function (val) {
                                _this.loadImgLIst(strAlbum);
                            })];
                    case 2:
                        //return await loading.present();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadImgLIst = function (strAlbum) {
        this.masterDetailService.setCurrAlbum(strAlbum);
        this.masterDetailService.setListMode("ALBUM");
        this.navCtrl.navigateForward('imglist');
    };
    HomePage.prototype.loadAlbum = function (strAlbum) {
        this.presentAlbumLoading(strAlbum);
    };
    HomePage.prototype.addAlbum = function () {
        this.presentAlbumPrompt();
    };
    HomePage.prototype.presentAlbumPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Add Album",
                            inputs: [
                                {
                                    name: 'albumname',
                                    placeholder: 'Album Name'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Create',
                                    handler: function (data) {
                                        console.log(data);
                                        console.log(data.albumname);
                                        var strAlbum = data.albumname;
                                        _this.masterDetailService.addAlbum(strAlbum.toUpperCase().replace("-", "_"));
                                        _this.Albums = _this.masterDetailService.getAlbums().split(",");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"])
    ], HomePage.prototype, "slides", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slide"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slide"])
    ], HomePage.prototype, "slide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('img1'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Img"])
    ], HomePage.prototype, "img1", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _app_services_community_service__WEBPACK_IMPORTED_MODULE_6__["CommunityService"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoViewer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"],
            _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_9__["MasterDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
            _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_12__["Screenshot"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map