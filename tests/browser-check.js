(async()=>{
const results=[];const assert=(name,ok)=>{results.push({name,pass:Boolean(ok)});if(!ok)throw new Error(name);};
assert('13 navigation targets',document.querySelectorAll('.nav-link').length===13);
assert('all fragment links resolve',[...document.querySelectorAll('a[href^="#"]')].every(a=>document.querySelector(a.getAttribute('href'))));
assert('all ten architecture components',document.querySelectorAll('.architecture-node').length===10);
document.querySelectorAll('.architecture-node')[9].click();assert('architecture detail',$('architecture-detail').textContent.includes('Defender and Sentinel'));
document.querySelectorAll('.policy-select')[4].click();assert('policy details',$('policy-detail').textContent.includes('4 hours'));
const set=(id,v)=>{$(id).value=v;};const submit=()=>$('simulator-form').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));
set('sim-user','employee');set('sim-device','compliant');set('sim-risk','low');set('sim-auth','strong');submit();assert('compliant employee allowed',$('sim-result').textContent.includes('Allow access'));
set('sim-device','unmanaged');submit();assert('device requirement',$('sim-result').textContent.includes('Additional controls required'));
set('sim-auth','legacy');submit();assert('legacy blocked',$('sim-result').textContent.includes('Block access'));
set('sim-auth','strong');set('sim-risk','high');submit();assert('high risk blocked',$('sim-result').textContent.includes('Block access'));
set('sim-risk','low');set('sim-user','admin');set('sim-auth','mfa');submit();assert('admin strong MFA requirement',$('sim-result').textContent.includes('phishing-resistant'));
set('sim-user','contractor');set('sim-app','sensitive');submit();assert('contractor sensitive blocked',$('sim-result').textContent.includes('Block access'));
set('sim-app','standard');submit();assert('contractor limited session',$('sim-result').textContent.includes('4 hours'));
set('control-category','Network');$('control-category').dispatchEvent(new Event('change'));assert('category filter',document.querySelectorAll('.control-item').length===1);
set('control-search','no matching control');$('control-search').dispatchEvent(new Event('input'));assert('empty filter state',Boolean(document.querySelector('.empty-state')));
set('control-search','');set('control-category','All');$('control-category').dispatchEvent(new Event('change'));
set('incident-filter','Critical');$('incident-filter').dispatchEvent(new Event('change'));assert('incident filter',$('incident-rows').children.length===1);
set('incident-filter','All');$('incident-filter').dispatchEvent(new Event('change'));
document.querySelectorAll('.maturity-bar')[5].click();assert('maturity detail',$('maturity-detail').textContent.includes('Network'));
document.querySelectorAll('#compliance-categories button')[4].click();assert('compliance detail',$('compliance-detail').textContent.includes('secure boot'));
document.querySelectorAll('#rbac-buttons button')[5].click();assert('RBAC detail',$('rbac-detail').textContent.includes('Emergency'));
document.querySelectorAll('.roadmap-tab')[3].click();assert('roadmap detail',$('roadmap-detail').textContent.includes('Executive security reporting'));
document.querySelector('#phase-3').dispatchEvent(new KeyboardEvent('keydown',{key:'Home',bubbles:true}));assert('roadmap keyboard',$('phase-0').getAttribute('aria-selected')==='true');
document.querySelector('.metric').click();assert('metric dialog',$('detail-dialog').open);$('dialog-close').click();assert('dialog close',!$('detail-dialog').open);
$('capabilities-button').click();assert('capabilities dialog',$('dialog-body').textContent.includes('Sentinel'));$('dialog-close').click();
$('engagement-button').click();assert('engagement CTA',Boolean($('engagement-brief')));$('dialog-close').click();
assert('no horizontal page overflow',document.documentElement.scrollWidth<=window.innerWidth);
assert('local resources only',performance.getEntriesByType('resource').every(r=>new URL(r.name).origin===location.origin));
return results;
function $(id){return document.getElementById(id);}
})()
