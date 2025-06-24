var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-1andar",
      "name": "ENTRADA 1ANDAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.3758028249908811,
          "pitch": 0.2511675445680073,
          "rotation": 0.7853981633974483,
          "target": "1-elevador-1a"
        },
        {
          "yaw": -1.647043286400148,
          "pitch": 0.12825422063367498,
          "rotation": 6.283185307179586,
          "target": "2-cortes-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-elevador-1a",
      "name": "ELEVADOR 1A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.44057926529142755,
          "pitch": 0.40282456508676745,
          "rotation": 0.7853981633974483,
          "target": "2-cortes-1"
        },
        {
          "yaw": -2.926370903008518,
          "pitch": 0.2628809039073019,
          "rotation": 0.7853981633974483,
          "target": "0-entrada-1andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cortes-1",
      "name": "CORTES 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1106503191878616,
          "pitch": 0.14342095356606244,
          "rotation": 0,
          "target": "3-cortes-2"
        },
        {
          "yaw": 1.2023213977090723,
          "pitch": 0.412323434244783,
          "rotation": 5.497787143782138,
          "target": "1-elevador-1a"
        },
        {
          "yaw": 1.6535016291092184,
          "pitch": 0.16635589823208363,
          "rotation": 0,
          "target": "0-entrada-1andar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cortes-2",
      "name": "CORTES 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.10091542967689,
          "pitch": 0.1794863869396366,
          "rotation": 0,
          "target": "2-cortes-1"
        },
        {
          "yaw": 1.6086389602485323,
          "pitch": 0.17339129607664816,
          "rotation": 0,
          "target": "4-sesmt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sesmt",
      "name": "SESMT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02020045423861916,
        "pitch": 0.10760550188632934,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.015677055052282896,
          "pitch": 0.22256414459680052,
          "rotation": 0,
          "target": "3-cortes-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1 ANDAR HAS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
