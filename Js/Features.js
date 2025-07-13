

document.getElementById('btn-history').addEventListener('click',function(){
       document.getElementById('history-section').classList.remove('hidden');
       document.getElementById('donation-section').classList.add('hidden');
         this.classList.add('bg-[#B4F461]');
        document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');




})

document.getElementById('btn-donation').addEventListener('click',function(){
       document.getElementById('history-section').classList.add('hidden');
       document.getElementById('donation-section').classList.remove('hidden');
        this.classList.add('bg-[#B4F461]');
        document.getElementById('btn-history').classList.remove('bg-[#B4F461]');




})