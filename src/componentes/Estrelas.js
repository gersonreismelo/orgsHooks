import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Estrela from "./Estrela";

export default function Estrelas({ 
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    const [ quantidade, setQuantidade ] = useState(quantidadeAntiga);

    const RenderEstrela = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
            
            <Estrela
                key={i}
                onPress={() => setQuantidade(1 + i)}
                desabilitado={!editavel}
                preenchida={i < quantidade}
                grande={grande}
            />  
            );
        }
        return listaEstrelas;
    }

    return <View style={ estilos.estrelas }>
        <RenderEstrela/>
    </View>

}

const estilos =  StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
});