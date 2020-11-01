var y=0;
var h=-1;
var j;

var imagem_coracao = new Array("../imagens/produtos/coracao6.png","../imagens/produtos/coracao5.png","../imagens/produtos/coracao7.png");

var tam=0;

function chama_coracao(x){
    x.src = imagem_coracao[y];
    tam=imagem_coracao.length;
    j=setInterval(trocar_imagem_coracao,1000);    
}

function trocar_imagem_coracao(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_coracao").src=imagem_coracao[y];        
}

function voltar_coracao(x){
    x.src ="../imagens/produtos/coracao6.png"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------

var imagem_bob_sozinho = new Array("../imagens/produtos/sozinho1.jpeg","../imagens/produtos/sozinho2.jpeg","../imagens/produtos/sozinho2.2.jpeg","../imagens/produtos/sozinho3.jpeg");



function chama_bob_sozinho(x){
    x.src = imagem_bob_sozinho[y];
    tam=imagem_bob_sozinho.length;
    j=setInterval(trocar_imagem_bob_sozinho,1000);    
}

function trocar_imagem_bob_sozinho(x){
        y++;
        
        if(y >= tam){
            y=0;
        }
        document.getElementById("img_bob_sozinho").src=imagem_bob_sozinho[y];        
}

function voltar_bob_sozinho(x){
    x.src ="../imagens/produtos/sozinho1.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------

var imagem_bob_trio = new Array("../imagens/produtos/trio1.jpeg","../imagens/produtos/trio2.jpeg","../imagens/produtos/trio3.jpeg","../imagens/produtos/trio4.jpeg","../imagens/produtos/trio5.jpeg");

function chama_bob_trio(x){
    x.src = imagem_bob_trio[y];
    tam=imagem_bob_trio.length;
    j=setInterval(trocar_imagem_bob_trio,1000);    
}

function trocar_imagem_bob_trio(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_bob_trio").src=imagem_bob_trio[y];        
}

function voltar_bob_trio(x){
    x.src ="../imagens/produtos/trio1.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------

var imagem_pc = new Array("../imagens/produtos/pc3.jpeg","../imagens/produtos/pc4.jpeg","../imagens/produtos/pc5.jpeg","../imagens/produtos/pc6.jpeg","../imagens/produtos/pc2.jpeg");

function chama_pc(x){
    x.src = imagem_pc[y];
    tam=imagem_pc.length;
    j=setInterval(trocar_imagem_pc,1000);    
}

function trocar_imagem_pc(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_pc").src=imagem_pc[y];        
}

function voltar_pc(x){
    x.src ="../imagens/produtos/pc3.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------
var imagem_pots = new Array("../imagens/produtos/bule6.jpeg","../imagens/produtos/bule1.jpeg","../imagens/produtos/bule2.jpeg","../imagens/produtos/bule4.jpeg","../imagens/produtos/bule5.jpeg","../imagens/produtos/bule3.jpeg");

function chama_pots(x){
    x.src = imagem_pots[y];
    tam=imagem_pots.length;
    j=setInterval(trocar_imagem_pots,1000);    
}

function trocar_imagem_pots(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_pots").src=imagem_pots[y];        
}

function voltar_pots(x){
    x.src ="../imagens/produtos/bule6.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------

var imagem_fone = new Array("../imagens/produtos/fone5.jpeg","../imagens/produtos/fone4.jpeg","../imagens/produtos/fone3.jpeg","../imagens/produtos/fone2.jpeg","../imagens/produtos/fone1.jpeg");

function chama_fone(x){
    x.src = imagem_fone[y];
    tam=imagem_fone.length;
    j=setInterval(trocar_imagem_fone,1000);    
}

function trocar_imagem_fone(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_fone").src=imagem_fone[y];        
}

function voltar_fone(x){
    x.src ="../imagens/produtos/fone5.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------

var imagem_pc_holder = new Array("../imagens/produtos/pc_holder2.jpeg","../imagens/produtos/pc_holder1.jpeg","../imagens/produtos/pc_holder3.jpeg","../imagens/produtos/pc_holder4.jpeg","../imagens/produtos/pc_holder5.jpeg");

function chama_pc_holder(x){
    x.src = imagem_pc_holder[y];
    tam=imagem_pc_holder.length;
    j=setInterval(trocar_imagem_pc_holder,1000);    
}

function trocar_imagem_pc_holder(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_pc_holder").src=imagem_pc_holder[y];        
}

function voltar_pc_holder(x){
    x.src ="../imagens/produtos/pc_holder2.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------

var imagem_vader = new Array("../imagens/produtos/vader1.jpg","../imagens/produtos/vader2.jpg","../imagens/produtos/vader3.jpg");

function chama_vader(x){
    x.src = imagem_vader[y];
    tam=imagem_vader.length;
    j=setInterval(trocar_imagem_vader,1000);    
}

function trocar_imagem_vader(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_vader").src=imagem_vader[y];        
}

function voltar_vader(x){
    x.src ="../imagens/produtos/vader1.jpg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------

var imagem_among = new Array("../imagens/produtos/among3.jpeg","../imagens/produtos/among2.jpeg","../imagens/produtos/among1.jpeg","../imagens/produtos/among4.jpeg");

function chama_among(x){
    x.src = imagem_among[y];
    tam=imagem_among.length;
    j=setInterval(trocar_imagem_among,1000);    
}

function trocar_imagem_among(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_among").src=imagem_among[y];        
}

function voltar_among(x){
    x.src ="../imagens/produtos/among3.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------
var imagem_chav= new Array("../imagens/produtos/chav2.jpeg","../imagens/produtos/chav1.jpeg","../imagens/produtos/chav3.jpeg","../imagens/produtos/chav4.jpeg","../imagens/produtos/chav5.jpeg");

function chama_chav(x){
    x.src = imagem_chav[y];
    tam=imagem_chav.length;
    j=setInterval(trocar_imagem_chav,1000);    
}

function trocar_imagem_chav(x){
        y++;

        if(y >= tam){
            y=0;
        }
        document.getElementById("img_chav").src=imagem_chav[y];        
}

function voltar_chav(x){
    x.src ="../imagens/produtos/chav2.jpeg"
    clearInterval(j);
    y=0;
}

// =--------------------------------------------------