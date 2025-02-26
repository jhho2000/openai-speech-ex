function playText() {
  const apiKey =
    "YOUR-API-KEY"; // OpenAI API 키를 입력하세요

  const text = document.getElementById("text-input").value;
  const voice = document.getElementById("voice-select").value;

  const requestData = {
    model: "tts-1",
    input: text,
    voice: voice, // onyx : 한국어 덜 어색함(구글 tts보단 별로라는 평..)
  };

  fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.blob()) // 오디오 파일을 blob으로 받음
    .then((blob) => {
        // blob 데이터를 사용하여 오디오 파일로 변환
        const url = window.URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
    })
    .catch((error) => {cd 
        console.error("Error:", error);
    });
}
