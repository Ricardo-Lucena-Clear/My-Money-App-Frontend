import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tablist"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>

                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tablist"><h1>Lista</h1></TabContent>
                            <TabContent id="tabCreate"><h1>Incluir</h1></TabContent>
                            <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
                            <TabContent id="tabDelete"><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
export default BillingCycle

