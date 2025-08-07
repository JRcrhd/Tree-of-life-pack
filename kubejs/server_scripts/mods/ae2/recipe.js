ServerEvents.recipes(treeoflife => {
    treeoflife.remove({id: 'expatternprovider:circuit_cutter'});
    treeoflife.remove({id: 'ae2:inscriber/silicon_press'});
    treeoflife.remove({id: 'ae2:inscriber/silicon_print'});
    treeoflife.remove({id: 'ae2:inscriber/logic_processor_press'});
    treeoflife.remove({id: 'ae2:inscriber/logic_processor_print'});
    treeoflife.remove({id: 'ae2:inscriber/logic_processor'});
    treeoflife.remove({id: 'ae2:inscriber/engeneering_processor_press'});
    treeoflife.remove({id: 'ae2:inscriber/engeneering_processor_print'});
    treeoflife.remove({id: 'ae2:inscriber/engeneering_processor'});
    treeoflife.remove({id: 'ae2:inscriber/calculation_processor_press'});
    treeoflife.remove({id: 'ae2:inscriber/calculation_processor_print'});
    treeoflife.remove({id: 'ae2:inscriber'});
    treeoflife.remove({id: 'expatternprovider:ex_inscriber'});
    treeoflife.remove({id: 'ae2:inscriber/calculation_processor'});
    treeoflife.remove({id: 'ae2:network/blocks/crystal_processing_charger'});
    treeoflife.remove({type: 'expatternprovider:circuit_cutter'});
    treeoflife.remove({type: 'ae2:inscriber'});

    treeoflife.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
            "item": "createaddition:tesla_coil"
        },
        "program": "laser",
        "result": {
            "item": "ae2:charger"
        }
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "c:plastics"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_calculation_processor_press"
        },
        "sequence": [
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor_press"
                    },
                    {
                        "item": "ae2:calculation_processor_press" 
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor_press"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor_press"
                    },
                    {
                        "fluid": "kubejs:clear_water_tier_1",
                        "amount": 10
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor_press"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor_press"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:calculation_processor_press"
            }
        ],
        "loops": 5
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "c:plastics"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_silicon_press"
        },
        "sequence": [
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_press"
                    },
                    {
                        "item": "ae2:silicon_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_press"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_press"
                    },
                    {
                        "fluid": "kubejs:clear_water_tier_1",
                        "amount": 10
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_press"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_press"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:silicon_press"
            }
        ],
        "loops": 5
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "c:plastics"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_engineering_processor_press"
        },
        "sequence": [
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor_press"
                    },
                    {
                        "item": "ae2:engineering_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor_press"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor_press"
                    },
                    {
                        "fluid": "kubejs:clear_water_tier_1",
                        "amount": 10
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor_press"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor_press"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:engineering_processor_press"
            }
        ],
        "loops": 5
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "c:plastics"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_logic_processor_press"
        },
        "sequence": [
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor_press"
                    },
                    {
                        "item": "ae2:logic_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor_press"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor_press"
                    },
                    {
                        "fluid": "kubejs:clear_water_tier_1",
                        "amount": 10
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor_press"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor_press"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:logic_processor_press"
            }
        ],
        "loops": 5
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "forge:silicon"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_silicon_print"
        },
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_print"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_print"
                    }
                ]
            },
            {
                "type": "createmetallurgy:grinding",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_print"
                    }
                ],
                "processingTime": 80,
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_print"
                    }
                ]
            },
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_print"
                    },
                    {
                        "item": "ae2:silicon_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_silicon_print"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:printed_silicon"
            }
        ],
        "loops": 2
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "forge:gems/certus_quartz"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_printed_calculation_circuit"
        },
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_calculation_circuit"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_calculation_circuit"
                    }
                ]
            },
            {
                "type": "createmetallurgy:grinding",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_calculation_circuit"
                    }
                ],
                "processingTime": 80,
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_calculation_circuit"
                    }
                ]
            },
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_calculation_circuit"
                    },
                    {
                        "item": "ae2:calculation_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_calculation_circuit"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:printed_calculation_processor"
            }
        ],
        "loops": 2
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "forge:gems/diamond"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_printed_engineering_circuit"
        },
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_engineering_circuit"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_engineering_circuit"
                    }
                ]
            },
            {
                "type": "createmetallurgy:grinding",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_engineering_circuit"
                    }
                ],
                "processingTime": 80,
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_engineering_circuit"
                    }
                ]
            },
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_engineering_circuit"
                    },
                    {
                        "item": "ae2:engineering_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_engineering_circuit"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:printed_engineering_processor"
            }
        ],
        "loops": 2
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "forge:ingots/gold"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_printed_logic_circuit"
        },
        "sequence": [
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_logic_circuit"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_logic_circuit"
                    }
                ]
            },
            {
                "type": "createmetallurgy:grinding",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_logic_circuit"
                    }
                ],
                "processingTime": 80,
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_logic_circuit"
                    }
                ]
            },
            {
                "keepHeldItem": true,
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_logic_circuit"
                    },
                    {
                        "item": "ae2:logic_processor_press"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_printed_logic_circuit"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:printed_logic_processor"
            }
        ],
        "loops": 2
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ae2:printed_silicon"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_calculation_processor"
        },
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    },
                    {
                        "item": "minecraft:redstone"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    },
                    {
                        "fluid": "kubejs:molten_end_steel",
                        "amount": 10
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    },
                    {
                        "item": "ae2:printed_calculation_processor"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_calculation_processor"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:calculation_processor"
            }
        ],
        "loops": 1
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ae2:printed_silicon"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_engineering_processor"
        },
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    },
                    {
                        "item": "minecraft:redstone"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    },
                    {
                        "fluid": "kubejs:molten_end_steel",
                        "amount": 10
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    },
                    {
                        "item": "ae2:printed_engineering_processor"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_engineering_processor"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:engineering_processor"
            }
        ],
        "loops": 1
    });

    treeoflife.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ae2:printed_silicon"
        },
        "transitionalItem": {
            "item": "createappliedkinetics:incomplete_logic_processor"
        },
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    },
                    {
                        "item": "minecraft:redstone"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    },
                    {
                        "fluid": "kubejs:molten_end_steel",
                        "amount": 10
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    },
                    {
                        "item": "ae2:printed_logic_processor"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    }
                ],
                "results": [
                    {
                        "item": "createappliedkinetics:incomplete_logic_processor"
                    }
                ]
            }
        ],
        "results": [
            {
                "item": "ae2:logic_processor"
            }
        ],
        "loops": 1
    });

})