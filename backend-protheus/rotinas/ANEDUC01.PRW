#INCLUDE 'TOTVS.CH'
#INCLUDE 'FWMVCDEF.CH'

/*/{Protheus.doc} ANEDUC01
Cadastro da rotina de Alunos

@type  Function
@author aline.navarro	
@since 04/2024
@version P12
/*/

User Function ANEDUC01()

	Local oMBrowse 	:= Nil

	oMBrowse := FWMBrowse():New()
	oMBrowse:SetAlias( 'ZZ1' )
	oMBrowse:SetMenudef( 'ANEDUC01' )
	oMBrowse:SetDescription( 'Alunos' )
	oMBrowse:SetCanSaveArea( .T. )

	oMBrowse:Activate()

Return NIL

/*/{Protheus.doc} MenuDef
Monta o menu

@type function
@author aline.navarro
@since 04/2024
@version P12
/*/
Static Function MenuDef()

	Local aRotina := {}

    ADD OPTION aRotina Title 'Pesquisar'  Action 'PesqBrw'          	OPERATION 1 ACCESS 0
    ADD OPTION aRotina Title 'Visualizar' Action 'VIEWDEF.ANEDUC01'	 	OPERATION 2 ACCESS 0
    ADD OPTION aRotina Title 'Incluir'    Action 'VIEWDEF.ANEDUC01' 	OPERATION 3 ACCESS 0
	ADD OPTION aRotina Title 'Alterar'    Action 'VIEWDEF.ANEDUC01' 	OPERATION 4 ACCESS 0
	ADD OPTION aRotina Title 'Excluir'    Action 'VIEWDEF.ANEDUC01' 	OPERATION 5 ACCESS 0
	ADD OPTION aRotina TITLE 'Imprimir'   Action 'VIEWDEF.ANEDUC01'     OPERATION 8 ACCESS 0

Return aRotina

/*/{Protheus.doc} ModelDef
Define a model

@type function
@author aline.navarro
@since 04/2024
@version P12
/*/

Static Function ModelDef() as Object

    Local oModel	as Object
    Local oStruZZ1	:= FWFormStruct( 1,'ZZ1' )

    oModel := MPFormModel():New( 'XANEDU01' )
   
    oModel:AddFields( 'ZZ1MASTER',, oStruZZ1 )
   
    oModel:SetDescription( 'Alunos' )

	oModel:SetPrimaryKey( {'ZZ1_FILIAL', 'ZZ1_CODIGO'} )

Return oModel

/*/{Protheus.doc} ViewDef
Define a view

@type function
@author aline.navarro
@since 04/2024
@version P12
/*/

Static Function ViewDef()

	//Local oModel 	:= ModelDef()
	Local oModel   := FWLoadModel( 'ANEDUC01' )
	Local oStruZZ1	:= FWFormStruct( 2,'ZZ1' )
	Local oView

	oView := FWFormView():New()

	oView:SetModel( oModel )

	oView:AddField( 'VIEW_ZZ1', oStruZZ1, 'ZZ1MASTER' )

	oView:CreateHorizontalBox( 'GERAL', 100 )
	
Return oView
