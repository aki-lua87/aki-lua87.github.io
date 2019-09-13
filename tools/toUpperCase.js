<!DOCTYPE html>
<meta charset="UTF-8" />
<title>小文字 → 大文字変換</title>

<h3>小文字 → 大文字変換</h3>

<script>
    function init() {
        document.getElementById("input").value = ''
        document.getElementById("output").value = ''
    }
    function doConvertUpper() {
        const inputText = document.getElementById("input").value;
        document.getElementById("output").value = inputText.toUpperCase();
    }
    function doConvertLower() {
        const inputText = document.getElementById("input").value;
        document.getElementById("output").value = inputText.toLowerCase();
    }
</script>

<body>


    <div id="inputDiv">
        <label for="input">入力</label>
        <br />
        <textarea onchange="doConvertUpper()" name="input" cols="100" rows="10" id="input">
</textarea>
    </div>


    <div id="outputDiv">
        <label for="output">出力</label>
        <br />
        <textarea name="output" cols="100" rows="10" id="output"></textarea>
    </div>

    <script>
        init()
    </script>

</body>
