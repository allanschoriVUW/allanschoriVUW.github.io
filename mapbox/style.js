
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "NewZealandBasemap_0": {
            "type": "geojson",
            "data": json_NewZealandBasemap_0
        }
                    ,
        "Wellington_noise_1": {
            "type": "geojson",
            "data": json_Wellington_noise_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#eaffff"
            }
        },
        {
            "id": "lyr_NewZealandBasemap_0_0",
            "type": "fill",
            "source": "NewZealandBasemap_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#626262'}
        }
,
        {
            "id": "lyr_Wellington_noise_1_0",
            "type": "fill",
            "source": "Wellington_noise_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'gen'], ['-', 0, 150.0]], ['<=', ['get', 'gen'], 0.0]], 1.0, ['all', ['>', ['get', 'gen'], 0.1], ['<=', ['get', 'gen'], 34.4]], 1.0, ['all', ['>', ['get', 'gen'], 34.5], ['<=', ['get', 'gen'], 39.4]], 1.0, ['all', ['>', ['get', 'gen'], 39.5], ['<=', ['get', 'gen'], 44.4]], 1.0, ['all', ['>', ['get', 'gen'], 44.5], ['<=', ['get', 'gen'], 49.4]], 1.0, ['all', ['>', ['get', 'gen'], 49.5], ['<=', ['get', 'gen'], 54.4]], 1.0, ['all', ['>', ['get', 'gen'], 54.5], ['<=', ['get', 'gen'], 59.4]], 1.0, ['all', ['>', ['get', 'gen'], 59.5], ['<=', ['get', 'gen'], 64.4]], 1.0, ['all', ['>', ['get', 'gen'], 64.5], ['<=', ['get', 'gen'], 69.4]], 1.0, ['all', ['>', ['get', 'gen'], 69.5], ['<=', ['get', 'gen'], 74.4]], 1.0, ['all', ['>', ['get', 'gen'], 74.5], ['<=', ['get', 'gen'], 79.4]], 1.0, ['all', ['>', ['get', 'gen'], 79.5], ['<=', ['get', 'gen'], 150.0]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'gen'], ['-', 0, 150.0]], ['<=', ['get', 'gen'], 0.0]], '#d8d8d8', ['all', ['>', ['get', 'gen'], 0.1], ['<=', ['get', 'gen'], 34.4]], '#ffffff', ['all', ['>', ['get', 'gen'], 34.5], ['<=', ['get', 'gen'], 39.4]], '#238443', ['all', ['>', ['get', 'gen'], 39.5], ['<=', ['get', 'gen'], 44.4]], '#78c679', ['all', ['>', ['get', 'gen'], 44.5], ['<=', ['get', 'gen'], 49.4]], '#c2e699', ['all', ['>', ['get', 'gen'], 49.5], ['<=', ['get', 'gen'], 54.4]], '#ffffb2', ['all', ['>', ['get', 'gen'], 54.5], ['<=', ['get', 'gen'], 59.4]], '#fecc5c', ['all', ['>', ['get', 'gen'], 59.5], ['<=', ['get', 'gen'], 64.4]], '#fd8d3c', ['all', ['>', ['get', 'gen'], 64.5], ['<=', ['get', 'gen'], 69.4]], '#ff0909', ['all', ['>', ['get', 'gen'], 69.5], ['<=', ['get', 'gen'], 74.4]], '#b30622', ['all', ['>', ['get', 'gen'], 74.5], ['<=', ['get', 'gen'], 79.4]], '#67033b', ['all', ['>', ['get', 'gen'], 79.5], ['<=', ['get', 'gen'], 150.0]], '#1c0054', '#ffffff']}
        }
],
}