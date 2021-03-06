var schema101 =
 {
    "type": "object",
    "properties": {
	"Version": {
		"type": "string",
		"minLength": 4,
		"maxLength": 10,
		"description": "Version of the schema"
	},
	"Irn": {
		"type": "string",
		"minLength": 64,
		"maxLength": 64,
		"description": "Invoice Reference Number"
	},
	"TranDtls": {
		"type": "object",
		"properties": {
			"TaxSch": {
				"type": "string",
				"minLength": 3,
				"maxLength": 10,
				"enum": [
					"GST"
				],
				"description": "GST- Goods and Services Tax Scheme"
			},
			"SupTyp": {
				"type": "string",
				"minLength": 3,
				"maxLength": 10,
				"enum": [
					"B2B",
					"SEZWP",
					"SEZWOP",
					"EXPWP",
					"EXPWOP",
					"DEXP"
				],
				"description": "Type of Supply: B2B-Business to Business, SEZWP - SEZ with payment, SEZWOP - SEZ without payment, EXPWP - Export with Payment, EXPWOP - Export without payment,DEXP - Deemed Export"
			},
			"RegRev": {
				"type": "string",
				"minLength": 1,
				"maxLength": 1,
				"enum": [
					"Y", "N"
				],
				"description": "Y- whether the tax liability is payable under reverse charge"
			},
			"EcmGstin": {
				"type": "string",
				"minLength": 15,
				"maxLength": 15,
				"pattern": "([0-9]{2}[0-9A-Z]{13})",
				"description": "GSTIN of e-Commerce operator"
			}
		},
		"required": [
			"TaxSch",
			"SupTyp"
		]
	},
	"DocDtls": {
		"type": "object",
		"properties": {
			"Typ": {
				"type": "string",
				"minLength": 3,
				"maxLength": 11,
				"enum": [
					"INV", "CRN", "DBN"
				],
				"description": "Document Type: INVOICE, CREDIT NOTE, DEBIT NOTE"
			},
			"No": {
				"type": "string",
				"minLength": 1,
				"maxLength": 16,
				"pattern": "^([A-Z1-9]{1}[A-Z0-9/-]{0,15})$",
				"description": "Document Number"
			},
			"Dt": {
				"type": "string",
				"minLength": 10,
				"maxLength": 10,
				"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
				"description": "Document Date"
			}
		},
		"required": [
			"Typ",
			"No",
			"Dt"
		]
	},
	"SellerDtls": {
		"type": "object",
		"properties": {
			"Gstin": {
				"type": "string",
				"minLength": 15,
				"maxLength": 15,
				"pattern": "([0-9]{2}[0-9A-Z]{13})",
				"description": "GSTIN of supplier"
			},
			"LglNm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Legal Name"
			},
			"TrdNm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Tradename"
			},
			"Addr1": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Building/Flat no, Road/Street"
			},
			"Addr2": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Address 2 of the supplier (Floor no., Name of the premises/building)"
			},
			"Loc": {
				"type": "string",
				"minLength": 3,
				"maxLength": 50,
				"description": "Location"
			},
			"Pin": {
				"type": "string",
				"minLength": 6,
				"maxLength": 6,
				"description": "Pincode"
			},
			"State": {
				"type": "string",
				"minimum": 3,
				"maximum": 50,
				"description": "State Name"
			},
			"Ph": {
				"type": "String",
				"minLength": 10,
				"maxLength": 12,
				"description": "Phone or Mobile No."
			},
			"Em": {
				"type": "string",
				"minLength": 6,
				"maxLength": 100,
				"description": "Email-Id"
			}
		},
		"required": [
			"Gstin",
			"LglNm",
			"Addr1",
			"Loc",
			"Pin",
			"State"
		]
	},
	"BuyerDtls": {
		"type": "object",
		"properties": {
			"Gstin": {
				"type": "string",
				"minLength": 3,
				"maxLength": 15,
				"pattern": "^(([0-9]{2}[0-9A-Z]{13})|URP)$",
				"description": "GSTIN of buyer , URP if exporting"
			},
			"LglNm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Legal Name"
			},
			"TrdNm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Trade Name"
			},
			"Pos": {
				"type": "string",
				"minLength": 1,
				"maxLength": 2,
				"description": "State code of Place of supply. If POS lies outside the country, a the code shall be 96."
			},
			"Addr1": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Address 1 of the buyer. (Building/Flat no., Road/Street etc.)"
			},
			"Addr2": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Address 2 of the buyer.(Floor no., Name of the premises/ building)"
			},
			"Loc": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Location"
			},
			"Pin": {
				"type": "string",
				"minLength": 6,
				"maxLength": 6,
				"description": "Pincode"
			},
			"State": {
				"type": "string",
				"minimum": 3,
				"maximum": 50,
				"description": "State Name"
			},
			"Ph": {
				"type": "String",
				"minLength": 10,
				"maxLength": 12,
				"description": "Phone or Mobile No."
			},
			"Em": {
				"type": "string",
				"minLength": 6,
				"maxLength": 100,
				"description": "Email-Id"
			}
		},
		"required": [
			"Gstin",
			"LglNm",
			"Pos",
			"Addr1",
			"Loc"
		]
	},
	"DispDtls": {
		"type": "object",
		"properties": {
			"Nm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 60,
				"description": "Name of the company from which the goods are dispatched"
			},
			"Addr1": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Address 1 of the entity from which goods are dispatched.(Building/Flat no.Road/Street etc.)"
			},
			"Addr2": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Address 2 of the entity from which goods are dispatched. (Floor no., Name of the premises/building)"
			},
			"Loc": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Location"
			},
			"Pin": {
				"type": "string",
				"minLength": 6,
				"maxLength": 6,
				"description": "Pincode"
			},
			"Stcd": {
				"type": "string",
				"minLength": 1,
				"maxLength": 2,
				"description": "State Code"
			}
		},
		"required": [
			"Nm",
			"Addr1",
			"Loc",
			"Pin",
			"Stcd"
		]
	},
	"ShipDtls": {
		"type": "object",
		"properties": {
			"Gstin": {
				"type": "string",
				"maxLength": 15,
				"minLength": 3,
				"pattern": "^(([0-9]{2}[0-9A-Z]{13})|URP)$",
				"description": "GSTIN of entity to whom goods are shipped"
			},
			"LglNm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 60,
				"description": "Legal Name"
			},
			"TrdNm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 60,
				"description": "Trade Name"
			},
			"Addr1": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Address1 of the entity to whom the supplies are shipped to. (Building/Flat no., Road/Street etc.)"
			},
			"Addr2": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Address 2 of the entity to whom the supplies are shipped to. (Floor no., Name of the premises/building)."
			},
			"Loc": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Place (City,Town,Village) entity to whom the supplies are shipped to."
			},
			"Pin": {
				"type": "string",
				"minLength": 6,
				"maxLength": 6,
				"description": "Pincode"
			},
			"Stcd": {
				"type": "string",
				"minLength": 1,
				"maxLength": 2,
				"description": "State Code to which supplies are shipped to."
			}
		},
		"required": [
			"LglNm",
			"Addr1",
			"Loc",
			"Pin",
			"Stcd"
		]
	},
	"ItemList": {
		
			"type": "object",
			"properties": {
				"SlNo": {
					"type": "string",
					"minLength": 1,
					"maxLength": 6,
					"pattern": "^[0-9]*$",
					"description": "Serial No. of Item"
				},
				"PrdDesc": {
					"type": "string",
					"minLength": 3,
					"maxLength": 300,
					"description": "Product Description"
				},
				"IsServc": {
					"type": "string",
					"minLength": 1,
					"maxLength": 1,
					"enum": [
						"Y", "N"
					],
					"description": "Specify whether the supply is service or not. Specify Y-for Service"
				},
				"HsnCd": {
					"type": "string",
					"minLength": 4,
					"maxLength": 8,
					"description": "HSN Code"
				},
				"BchDtls": {
					"type": "object",
					"properties": {
						"Nm": {
							"type": "string",
							"minLength": 3,
							"maxLength": 20,
							"description": "Batch name"
						},
						"ExpDt": {
							"type": "string",
							"maxLength": 10,
							"minLength": 10,
							"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
							"description": "Batch Expiry Date"
						},
						"WrDt": {
							"type": "string",
							"maxLength": 10,
							"minLength": 10,
							"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
							"description": "Warranty Date"
						}
					},
					"required": [
						"Nm"
					]
				},
				"Barcde": {
					"type": "string",
					"minLength": 3,
					"maxLength": 30,
					"description": "Bar Code"
				},
				"Qty": {
					"type": "string",
					"minLength": 1,
					"maxLength": 20,
					"description": "Quantity"
				},
				"FreeQty": {
					"type": "string",
					"minLength": 1,
					"maxLength": 20,
					"description": "Free Quantity"
				},
				"Unit": {
					"type": "string",
					"minLength": 3,
					"maxLength": 8,
					"enum": [
						"BAG",
						"BAL",
						"BDL",
						"BKL",
						"BOU",
						"BOX",
						"BTL",
						"BUN",
						"CAN",
						"CBM",
						"CCM",
						"CMS",
						"CTN",
						"DOZ",
						"DRM",
						"GGK",
						"GMS",
						"GRS",
						"GYD",
						"KGS",
						"KLR",
						"KME",
						"LTR",
						"MTR",
						"MLT",
						"MTS",
						"NOS",
						"OTH",
						"PAC",
						"PCS",
						"PRS",
						"QTL",
						"ROL",
						"SET",
						"SQF",
						"SQM",
						"SQY",
						"TBS",
						"TGM",
						"THD",
						"TON",
						"TUB",
						"UGS",
						"UNT",
						"YDS"
					],
					"description": "Unit"
				},
				"UnitPrice": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "Unit Price - Rate"
				},
				"TotAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "Gross Amount Amount (Unit Price * Quantity)"
				},
				"Discount": {
					"type": "number",
					"minimum": 0,
					"maximum": 9999999999.99,
					"description": "Discount"
				},
				"PreTaxVal": {
					"type": "number",
					"minimum": 0,
					"maximum": 9999999999999.99,
					"description": "Pre tax value"
				},
				"AssAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 9999999999999.99,
					"description": "Taxable Value (Total Amount -Discount)"
				},
				"GstRt": {
					"type": "number",
					"minimum": 0,
					"maximum": 999.999,
					"description": "The GST rate, represented as percentage that applies to the invoiced item. It will IGST rate only."
				},
				"IgstAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": " Amount of IGST payable."
				},
				"CgstAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": " Amount of CGST payable."
				},
				"SgstAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": " Amount of SGST payable."
				},
				"CesRt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "Cess Rate"
				},
				"CesAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "Cess Amount(Advalorem) on basis of rate and quantity of item"
				},
				"CesNonAdvlAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "Cess Non-Advol Amount"
				},
				"StateCesRt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "State CESS Rate"
				},
				"StateCesAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "State CESS Amount"
				},
				"StateCesNonAdvlAmt": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "State CESS Non Adval Amount"
				},
				"OthChrg": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "Other Charges"
				},
				"TotItemVal": {
					"type": "number",
					"minimum": 0,
					"maximum": 99999999999.99,
					"description": "Total Item Value = Assessable Amount + CGST Amt + SGST Amt + Cess Amt + CesNonAdvlAmt + StateCesAmt + StateCesNonAdvlAmt+Otherchrg"
				},
				"OrdLineRef": {
					"type": "string",
					"minLength": 1,
					"maxLength": 50,
					"description": "Order line referencee"
				},
				"OrgCntry": {
					"type": "string",
					"minLength": 2,
					"maxLength": 2,
					"description": "Orgin Country"
				},
				"PrdSlNo": {
					"type": "string",
					"minLength": 1,
					"maxLength": 15,
					"description": "Serial number in case of each item having a unique number."
				},
				"AttribDtls": {	
						"type": "object",
						"properties": {
							"Nm": {
								"type": "string",
								"minLength": 3,
								"maxLength": 100,
								"description": "Attribute details of the item"
							},
							"Val": {
								"type": "string",
								"minLength": 3,
								"maxLength": 100,
								"description": "Attribute value of the item"
							}
						}	
				}
			},
			"required": [
				"SlNo",
				"IsServc",
				"HsnCd",
				"UnitPrice",
				"TotAmt",
				"AssAmt",
				"GstRt",
				"TotItemVal"
			]
		
	},
	"ValDtls": {
		"type": "object",
		"properties": {
			"AssVal": {
				"type": "number",
				"minimum": 0,
				"maximum": 9999999999999.99,
				"description": "Total Assessable value of all items"
			},
			"CgstVal": {
				"type": "number",
				"maximum": 99999999999.99,
				"minimum": 0,
				"description": "Total CGST value of all items"
			},
			"SgstVal": {
				"type": "number",
				"minimum": 0,
				"maximum": 99999999999.99,
				"description": "Total SGST value of all items"
			},
			"IgstVal": {
				"type": "number",
				"minimum": 0,
				"maximum": 99999999999.99,
				"description": "Total IGST value of all items"
			},
			"CesVal": {
				"type": "number",
				"minimum": 0,
				"maximum": 99999999999.99,
				"description": "Total CESS value of all items"
			},
			"StCesVal": {
				"type": "number",
				"minimum": 0,
				"maximum": 99999999999.99,
				"description": "Total State CESS value of all items"
			},
			"RndOffAmt": {
				"type": "number",
				"minimum": -999,
				"maximum": 9999.99,
				"description": "Rounded off amount"
			},
			"TotInvVal": {
				"type": "number",
				"minimum": 0,
				"maximum": 9999999999999.99,
				"description": "Final Invoice value "
			},
			"TotInvValFc": {
				"type": "number",
				"minimum": 0,
				"maximum": 99999999999.99,
				"description": "Final Invoice value in Additional Currency"
			}
		},
		"required": [
			"AssVal",
			"TotInvVal"
		]
	},
	"PayDtls": {
		"type": "object",
		"properties": {
			"Nm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Payee Name"
			},
			"AccDet": {
				"type": "string",
				"minLength": 3,
				"maxLength": 18,
				"description": "Bank account number of payee"
			},
			"Mode": {
				"type": "string",
				"minLength": 3,
				"maxLength": 18,
				"description": "Mode of Payment: Cash, Credit, Direct Transfer"
			},
			"FinInsBr": {
				"type": "string",
				"minLength": 3,
				"maxLength": 11,
				"description": "Branch or IFSC code"
			},
			"PayTerm": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Terms of Payment"
			},
			"PayInstr": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Payment Instruction"
			},
			"CrTrn": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Credit Transfer"
			},
			"DirDr": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Direct Debit"
			},
			"CrDay": {
				"type": "number",
				"minimum": 0,
				"maximum": 9999,
				"description": "Credit Days"
			},
			"PaidAmt": {
				"type": "number",
				"minimum": 0,
				"maximum": 9999999999.99,
				"description": "The sum of amount which have been paid in advance."
			},
			"PaymtDue": {
				"type": "number",
				"minimum": 0,
				"maximum": 9999999999.99,
				"description": "Outstanding amount that is required to be paid."
			}
		}
	},
	"RefDtls": {
		"type": "object",
		"properties": {
			"InvRm": {
				"type": "string",
				"maxLength": 100,
				"minLength": 3,
				"pattern": "^[0-9A-Za-z/-]{3,100}$",
				"description": "Remarks/Note"
			},
			"InvStDt": {
				"type": "string",
				"maxLength": 10,
				"minLength": 10,
				"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
				"description": "Invoice Period Start Date"
			},
			"InvEndDt": {
				"type": "string",
				"maxLength": 10,
				"minLength": 10,
				"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
				"description": "Invoice Period End Date"
			},
			"PrecDocDtls": {
			
					"type": "object",
					"properties": {
						"InvNo": {
							"type": "string",
							"minLength": 3,
							"maxLength": 16,
							"pattern": "^([A-Z1-9]{1}[A-Z0-9/-]{0,15})$",
							"description": "Reference of original invoice, if any."
						},
						"InvDt": {
							"type": "string",
							"maxLength": 10,
							"minLength": 10,
							"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
							"description": "Date of preceding invoice"
						},
						"OthRefNo": {
							"type": "string",
							"minLength": 3,
							"maxLength": 20,
							"description": "Other Reference"
						}
					},
					"required": [
						"InvNo",
						"InvDt"
					]
				
			},
			"ContrDtls": {
				
					"type": "object",
					"properties": {
						"RecAdvRefr": {
							"type": "string",
							"minLength": 3,
							"maxLength": 20,
							"pattern": "^([0-9A-Z-a-z/]){3,20}$",
							"description": "Receipt Advice No."
						},
						"RecAdvDt": {
							"type": "string",
							"minLength": 10,
							"maxLength": 10,
							"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
							"description": "Date of receipt advice"
						},
						"TendRefr": {
							"type": "string",
							"minLength": 3,
							"maxLength": 20,
							"pattern": "^([0-9A-Z-a-z/]){3,20}$",
							"description": "Lot/Batch Reference No."
						},
						"ContrRefr": {
							"type": "string",
							"minLength": 3,
							"maxLength": 20,
							"pattern": "^([0-9A-Z-a-z/]){3,20}$",
							"description": "Contract Reference Number"
						},
						"ExtRefr": {
							"type": "string",
							"minLength": 3,
							"maxLength": 20,
							"pattern": "^([0-9A-Z-a-z/]){3,20}$",
							"description": "Any other reference"
						},
						"ProjRefr": {
							"type": "string",
							"maxLength": 20,
							"minLength": 3,
							"pattern": "^([0-9A-Z-a-z/]){3,20}$",
							"description": "Project Reference Number"
						},
						"PORefr": {
							"type": "string",
							"maxLength": 16,
							"minLength": 3,
							"pattern": "^([0-9A-Z-a-z/]){3,16}$",
							"description": "Vendor PO Reference Number"
						},
						"PORefDt": {
							"type": "string",
							"minLength": 10,
							"maxLength": 10,
							"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
							"description": "Vendor PO Reference date"
						}
					}
			
			}
		},
		"required": [
			"InvStDt",
			"InvEndDt"
		]
	},
	"AddlDocDtls": {
			"type": "object",
			"properties": {
				"Url": {
					"type": "string",
					"minLength": 3,
					"maxLength": 100,
					"description": "Supporting document URL"
				},
				"Docs": {
					"type": "string",
					"minLength": 3,
					"maxLength": 1000,
					"description": "Supporting document in Base64 Format"
				},
				"Info": {
					"type": "string",
					"minLength": 3,
					"maxLength": 1000,
					"description": "Any additional information"
				}
			}
	
	},
	"ExpDtls": {
		"type": "object",
		"properties": {
			"ShipBNo": {
				"type": "string",
				"minLength": 3,
				"maxLength": 20,
				"description": "Shipping Bill No."
			},
			"ShipBDt": {
				"type": "string",
				"minLength": 10,
				"maxLength": 10,
				"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
				"description": "Shipping Bill Date"
			},
			"Port": {
				"type": "string",
				"minLength": 2,
				"maxLength": 10,
				"pattern": "^[0-9A-Za-z]{2,10}$",
				"description": "Port Code"
			},
			"RefClm": {
				"type": "string",
				"minLength": 1,
				"maxLength": 1,
				"description": "Options for supplier for refund. Y/N"
			},
			"ForCur": {
				"type": "string",
				"minLength": 3,
				"maxLength": 16,
				"description": "Additional Currency Code"
			},
			"CntCode": {
				"type": "string",
				"minLength": 2,
				"maxLength": 2,
				"description": "Country Code"
			}
		}
	},
	"EwbDtls": {
		"type": "object",
		"properties": {
			"TransId": {
				"type": "string",
				"minLength": 15,
				"maxLength": 15,
				"description": "Transin/GSTIN"
			},
			"TransName": {
				"type": "string",
				"minLength": 3,
				"maxLength": 100,
				"description": "Name of the transporter"
			},
			"TransMode": {
				"type": "string",
				"maxLength": 1,
				"minLength": 1,
				"enum": ["1", "2", "3", "4"],
				"description": "Mode of transport (Road-1, Rail-2, Air-3, Ship-4)"
			},
			"Distance": {
				"type": "string",
				"maxLength": 4,
				"minLength": 1,
				"description": "Distance between source and destination PIN codes"
			},
			"TransDocNo": {
				"type": "string",
				"minLength": 1,
				"maxLength": 15,
				"pattern": "^([A-Z1-9]{1}[A-Z0-9/-]{0,15})",
				"description": "Tranport Document Number"
			},
			"TransDocDt": {
				"type": "string",
				"minLength": 10,
				"maxLength": 10,
				"pattern": "[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]",
				"description": "Transport Document Date"
			},
			"VehNo": {
				"type": "string",
				"minLength": 4,
				"maxLength": 20,
				"description": "Vehicle Number"
			},
			"VehType": {
				"type": "string",
				"minLength": 1,
				"maxLength": 1,
				"enum": ["O", "R"],
				"description": "Whether O-ODC or R-Regular "
			}
		},
		"required": [
			"Distance",
			"TransMode"
		]
	},
	"required": [
		"Version",
		"TranDtls",
		"DocDtls",
		"SellerDtls",
		"BuyerDtls",
		"ItemList",
		"ValDtls"
    ]
}
}
			
module.exports.schema101 = schema101;