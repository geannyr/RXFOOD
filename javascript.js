

document.addEventListener("DOMContentLoaded", function () {

    
    const generateButton = document.getElementById("generate-report");
    const reportText = document.getElementById("report-text");
    const copyButton = document.getElementById("copy-report");
    const clearButton = document.getElementById("clear-report");
    const clearFieldsButton = document.getElementById("clear-fields");

    const savedContent = localStorage.getItem("reportContent");

    if (savedContent) {
        reportText.value = savedContent;
    }


        generateButton.addEventListener("click", function () {
        const ticketInput = document.querySelector("input[name='ticket1']").value;
        const statusSelect = document.querySelector("select[name='status1']").value;
        const derivacaoSelect = document.querySelector("select[name='derivacao1']").value;

        if (statusSelect !== "Aguardando Retorno da Supervisão" && statusSelect !== "Unificação") {
        const reportLine = ` ${ticketInput} - ${statusSelect} (${derivacaoSelect})\n`;
        reportText.value += reportLine;
        localStorage.setItem("reportContent", reportText.value);

    } else {
        const reportLine = ` ${ticketInput} - ${statusSelect}\n`;
        reportText.value += reportLine;
        localStorage.setItem("reportContent", reportText.value);

    }
    });

            copyButton.addEventListener("click", function () {
            reportText.select();
            document.execCommand("copy");
            reportText.setSelectionRange(0, 0);
            alert("Relatório copiado para a área de transferência!");
        });

        clearButton.addEventListener("click", function () {
            // Exibir uma caixa de diálogo de confirmação
            const confirmClear = window.confirm("Tem certeza de que deseja apagar todo o relatório?");
    
            // Se o usuário confirmar, limpe o conteúdo da caixa de texto "report-text" e do localStorage
            if (confirmClear) {
                reportText.value = "";
                localStorage.removeItem("reportContent");
            }
        });

        clearFieldsButton.addEventListener("click", function () {
            // Limpe o campo de entrada de texto
            const ticketInput = document.querySelector("input[name='ticket1']");
            ticketInput.value = "";
    
            // Redefina os selects para a primeira opção
            const statusSelect = document.querySelector("select[name='status1']");
            statusSelect.selectedIndex = 0; // Índice da primeira opção
    
            const derivacaoSelect = document.querySelector("select[name='derivacao1']");
            derivacaoSelect.selectedIndex = 0; // Índice da primeira opção
        });
});