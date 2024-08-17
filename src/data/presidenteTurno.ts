import { turnoDTO } from '../hooks/index';

export enum Palo {
    ORO,
    COPA,
    ESPADA,
    BASTO
}

export const turnoData:turnoDTO = {
    "idGame": "8ylBSw",
    "idMano": -1,
    "jugadores": [
        {
            "uid": "2",
            "nombre": "agustin",
            "puntos": 0,
            "cartas": [
                // {
                //     "numero": 5,
                //     "palo": 0,
                //     "orden": 14
                // },
                {
                    "numero": 10,
                    "palo": 2,
                    "orden": 36
                },
                {
                    "numero": 5,
                    "palo": 2,
                    "orden": 16
                },
                {
                    "numero": 11,
                    "palo": 3,
                    "orden": 39
                },
                {
                    "numero": 7,
                    "palo": 3,
                    "orden": 23
                },
                {
                    "numero": 12,
                    "palo": 2,
                    "orden": 44
                },
                {
                    "numero": 9,
                    "palo": 1,
                    "orden": 29
                },
                {
                    "numero": 11,
                    "palo": 1,
                    "orden": 37
                }
            ],
        },
        {
            "uid": "1",
            "nombre": "mariano",
            "puntos": 0,
            "cartas": [
                {
                    "numero": 9,
                    "palo": 3,
                    "orden": 31
                },
                {
                    "numero": 8,
                    "palo": 1,
                    "orden": 25
                },
                {
                    "numero": 7,
                    "palo": 2,
                    "orden": 24
                },
                // {
                //     "numero": 6,
                //     "palo": "Espada",
                //     "orden": 20
                // },
                {
                    "numero": 1,
                    "palo": 2,
                    "orden": 48
                },
                {
                    "numero": 7,
                    "palo": 1,
                    "orden": 21
                },
                {
                    "numero": 10,
                    "palo": 3,
                    "orden": 35
                },
                {
                    "numero": 2,
                    "palo": 0,
                    "orden": 2
                }
            ]

        },
        {
            "uid": "6",
            "nombre": "ivo",
            "puntos": 0,
            "cartas": [
                {
                    "numero": 8,
                    "palo": 0,
                    "orden": 26
                },
                {
                    "numero": 2,
                    "palo": 1,
                    "orden": 1
                },
                {
                    "numero": 9,
                    "palo": 2,
                    "orden": 32
                },
                {
                    "numero": 5,
                    "palo": 3,
                    "orden": 15
                },
                // {
                //     "numero": 3,
                //     "palo": "Basto",
                //     "orden": 7
                // },
                {
                    "numero": 3,
                    "palo": 2,
                    "orden": 8
                },
                {
                    "numero": 2,
                    "palo": 3,
                    "orden": 3
                },
                {
                    "numero": 1,
                    "palo": 1,
                    "orden": 45
                }
            ]
        },
        {
            "uid": "5",
            "nombre": "franco",
            "puntos": 0,
            "cartas": [
                {
                    "numero": 4,
                    "palo": 3,
                    "orden": 11
                },
                {
                    "numero": 1,
                    "palo": 0,
                    "orden": 46
                },
                {
                    "numero": 1,
                    "palo": 3,
                    "orden": 47
                },
                // {
                //     "numero": 8,
                //     "palo": "Espada",
                //     "orden": 28
                // },
                {
                    "numero": 6,
                    "palo": 0,
                    "orden": 18
                },
                {
                    "numero": 12,
                    "palo": 1,
                    "orden": 41
                },
                {
                    "numero": 3,
                    "palo": 0,
                    "orden": 6
                },
                {
                    "numero": 10,
                    "palo": 1,
                    "orden": 33
                }
            ]
        },
        {
            "uid": "4",
            "nombre": "emiliano",
            "puntos": 0,
            "cartas": [
                {
                    "numero": 4,
                    "palo": 1,
                    "orden": 9
                },
                {
                    "numero": 7,
                    "palo": 0,
                    "orden": 22
                },
                // {
                //     "numero": 8,
                //     "palo": "Basto",
                //     "orden": 27
                // },
                {
                    "numero": 4,
                    "palo": 0,
                    "orden": 10
                },
                {
                    "numero": 5,
                    "palo": 1,
                    "orden": 13
                },
                {
                    "numero": 10,
                    "palo": 0,
                    "orden": 34
                },
                {
                    "numero": 11,
                    "palo": 2,
                    "orden": 40
                },
                {
                    "numero": 4,
                    "palo": 2,
                    "orden": 12
                }
            ]
        },
        {
            "uid": "3",
            "nombre": "francisco",
            "puntos": 0,
            "cartas": [
                {
                    "numero": 11,
                    "palo": 0,
                    "orden": 38
                },
                {
                    "numero": 12,
                    "palo": 0,
                    "orden": 42
                },
                {
                    "numero": 12,
                    "palo": 3,
                    "orden": 43
                },
                {
                    "numero": 2,
                    "palo": 2,
                    "orden": 4
                },
                {
                    "numero": 9,
                    "palo": 0,
                    "orden": 30
                },
                {
                    "numero": 6,
                    "palo": 3,
                    "orden": 19
                },
                {
                    "numero": 3,
                    "palo": 1,
                    "orden": 5
                },
                {
                    "numero": 6,
                    "palo": 1,
                    "orden": 17
                }
            ]
        }
    ],
    "indexTurnoJugador": 2,
    "mazo": [{
        "numero": 5,
        "palo": Palo.ORO,
        "orden": 14
    },                
    {
        "numero": 6,
        "palo": 2,
        "orden": 20
    },                {
        "numero": 3,
        "palo": 3,
        "orden": 7
    },                {
        "numero": 8,
        "palo": 2,
        "orden": 28
    },                
    {
        "numero": 8,
        "palo": 2,
        "orden": 27
    },
],
    "cantCartas": null,
    "escalera": false,
    "primero": false,
    "status": "GAME_INPROGRESS"
}