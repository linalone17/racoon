const e=window.mainLoaded.listen(),n=window.scriptsLoaded.listen(),d=window.devicesLoaded.listen();!async function(){let i=createElement("div","main"),t=document.getElementById("app"),[a,o,s]=await Promise.all([e,n,d]),[l,p,c,m]=s;i.append(a,o,l),t.appendChild(i),setTimeout(()=>{p(store[2])&&m.append(c)})}();