// Video task response definitions
var prompts = [
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>convinced:</b></td><td>being persuaded by an argument</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>sociable:</b></td><td>to enjoy being in other people's company and talking and listening to them</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>resentful:</b></td><td>feeling  annoyed about something or being ill-used</td></tr>"+
"<tr><td><b>luring:</b></td><td>tempting, enticing others to do something or go somewhere</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>jaded:</b></td><td>to feel tired or bored because one has had too much of something</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>blank:</b></td><td>to show no feeling or interest, to have no thoughts about a particular thing, to be unable to remember</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>resentful:</b></td><td>feeling  annoyed about something or being ill-used</td></tr>"+
"<tr><td><b>oppressive:</b></td><td>to impose one's will on someone, to overpower, to deny him/her choices</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>bewildered:</b></td><td>to feel confused, puzzled</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>resentful:</b></td><td>feeling  annoyed about something or being ill-used</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>modest:</b></td><td>to have a humble opinion of oneself and one's abilities</td></tr>"+
"<tr><td><b>pitying:</b></td><td>having  sympathy towards someone else for their misfortune or sad situation</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>assertive:</b></td><td>to show a very confident personality, to be self-assured</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>calculating:</b></td><td>coldly aiming to achieve something, plotting</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>stern:</b></td><td>to have a harsh or severe attitude; to be firm in dealings with others</td></tr>"+
"<tr><td><b>insincere:</b></td><td>not to mean what one says, to be dishonest</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>stern:</b></td><td>to have a harsh or severe attitude; to be firm in dealings with others</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>sociable:</b></td><td>to enjoy being in other people's company and talking and listening to them</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>distraught:</b></td><td>to be very upset and agitated</td></tr>"+
"<tr><td><b>condemned:</b></td><td>receiving the very strong disapproval of others</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>tortured:</b></td><td>to feel immense physical or mental pain because of the direct actions of someone else</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>resigned:</b></td><td>to feel reluctant to do something, but carry it out without complaint, to reluctantly accept a situation</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>stern:</b></td><td>to have a harsh or severe attitude; to be firm in dealings with others</td></tr>"+
"<tr><td><b>infuriated:</b></td><td>to feel extremely angry, annoyed</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>blank:</b></td><td>to show no feeling or interest, to have no thoughts about a particular thing, to be unable to remember</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>resigned:</b></td><td>to feel reluctant to do something, but carry it out without complaint, to reluctantly accept a situation</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>deserted:</b></td><td>to feel abandoned , left alone</td></tr>"+
"<tr><td><b>grave:</b></td><td>to be serious in manner and thought</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>grave:</b></td><td>to be serious in manner and thought</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>complacent:</b></td><td>to be satisfied with things as they are, not to bother to improve or change things</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>judgmental:</b></td><td>to have a critical opinion of someone or the way he/she lives his/her life</td></tr>"+
"<tr><td><b>seductive:</b></td><td>to feel that one's presence causes sexual desire in someone else</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>condescending:</b></td><td>to treat othes in a manner implying  you are betteror know more than they do</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>blank:</b></td><td>to show no feeling or interest, to have no thoughts about a particular thing, to be unable to remember</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>subdued:</b></td><td>to feel slightly sad and have a lack of excitement or interest</td></tr>"+
"<tr><td><b>invigorated:</b></td><td>to feel enlivened as if your energy has been replenished</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empty:</b></td><td>to feel unhappy, drained, having no meaning in your life</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>jubilant:</b></td><td>to express great happiness</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>subdued:</b></td><td>to feel slightly sad and have a lack of excitement or interest</td></tr>"+
"<tr><td><b>grave:</b></td><td>to be serious in manner and thought</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>rejecting:</b></td><td>to refuse someone or something, to openly disagree with someone or something</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>exonerated:</b></td><td>to feel released from blame</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>vacant:</b></td><td>to appear lacking in thought or knowledge</td></tr>"+
"<tr><td><b>deserted:</b></td><td>to feel abandoned , left alone</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>exonerated:</b></td><td>to feel released from blame</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>terrorised:</b></td><td>to feel very fearful and frightened because of the actions of someone else</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empty:</b></td><td>to feel unhappy, drained, having no meaning in your life</td></tr>"+
"<tr><td><b>discouraging:</b></td><td>suggesting that someone is inadequate to perform a task, making someone lose confidence</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>sentimental:</b></td><td>to think of things in an emotional rather than rational manner</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>assertive:</b></td><td>to show a very confident personality, to be self-assured</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>exonerated:</b></td><td>to feel released from blame</td></tr>"+
"<tr><td><b>fantasising:</b></td><td>imagining something that one would like to happen</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>oppressive:</b></td><td>to impose one's will on someone, to overpower, to deny him/her choices</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>vibrant:</b></td><td>to be lively and energetic in an enthusiastic manner</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>unenthusiastic:</b></td><td>to feel a lack of excitement about something</td></tr>"+
"<tr><td><b>uneasy:</b></td><td>to feel worried or anxious about something, possibly causing restlessness</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>intimidated:</b></td><td>feeling threatened and scared by someone, something or a particular situation, frightened into submission</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>unconcerned:</b></td><td>to be at ease or unworried</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>uneasy:</b></td><td>to feel worried or anxious about something, possibly causing restlessness</td></tr>"+
"<tr><td><b>bewildered:</b></td><td>to feel confused, puzzled</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>vigilant:</b></td><td>to be extremely observant and careful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>grave:</b></td><td>to be serious in manner and thought</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empathic:</b></td><td>to be able to understand others' emotions or state of being</td></tr>"+
"<tr><td><b>resigned:</b></td><td>to feel reluctant to do something, but carry it out without complaint, to reluctantly accept a situation</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>refreshed:</b></td><td>to feel one's energy levels are replenished and one is ready to start or continue once again</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empathic:</b></td><td>to be able to understand others' emotions or state of being</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>resigned:</b></td><td>to feel reluctant to do something, but carry it out without complaint, to reluctantly accept a situation</td></tr>"+
"<tr><td><b>concealing:</b></td><td>hiding something from others</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>overcome:</b></td><td>to feel a powerful mix of happy emotions because of others kindness or something good that has happened</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>inadequate:</b></td><td>to feel one is not good enough, to be unable to cope with  something or a situation, to lack confidence</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empathic:</b></td><td>to be able to understand others' emotions or state of being</td></tr>"+
"<tr><td><b>hysterical:</b></td><td>to be unable to control one's excitement</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>unconcerned:</b></td><td>to be at ease or unworried</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>tortured:</b></td><td>to feel immense physical or mental pain because of the direct actions of someone else</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>tense:</b></td><td>to feel nervous and be unable to relax, often in anticipation of something happening</td></tr>"+
"<tr><td><b>vibrant:</b></td><td>to be lively and energetic in an enthusiastic manner</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>terrorised:</b></td><td>to feel very fearful and frightened because of the actions of someone else</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>condemned:</b></td><td>receiving the very strong disapproval of others</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empathic:</b></td><td>to be able to understand others' emotions or state of being</td></tr>"+
"<tr><td><b>vibrant:</b></td><td>to be lively and energetic in an enthusiastic manner</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>hysterical:</b></td><td>to be unable to control one's excitement</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>lured:</b></td><td>to be tempted by the promise of something appealing and attractive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>provoked:</b></td><td>to feel made to act or reply in an angry or distressed manner because of the actions or words of someone else</td></tr>"+
"<tr><td><b>passive:</b></td><td>to endure something, to show no active interest</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>lured:</b></td><td>to be tempted by the promise of something appealing and attractive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>pitying:</b></td><td>having  sympathy towards someone else for their misfortune or sad situation</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>grave:</b></td><td>to be serious in manner and thought</td></tr>"+
"<tr><td><b>vague:</b></td><td>to be unclear or inexpressive</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>restless:</b></td><td>to feel unable to stay still or remain in one place</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>invigorated:</b></td><td>to feel enlivened as if your energy has been replenished</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>lured:</b></td><td>to be tempted by the promise of something appealing and attractive</td></tr>"+
"<tr><td><b>bitter:</b></td><td>to feel hurt, resentful, to feel ill will towards others</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>subservient:</b></td><td>to be obedient and submissive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>admiring:</b></td><td>demonstrating respect for, or approval of, something or someone</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>miffed:</b></td><td>to feel slightly annoyed, upset</td></tr>"+
"<tr><td><b>provoked:</b></td><td>to feel made to act or reply in an angry or distressed manner because of the actions or words of someone else</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>tense:</b></td><td>to feel nervous and be unable to relax, often in anticipation of something happening</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>subservient:</b></td><td>to be obedient and submissive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empty:</b></td><td>to feel unhappy, drained, having no meaning in your life</td></tr>"+
"<tr><td><b>intimate:</b></td><td>to have a deep  and personal relationship or experience with someone</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>overcome:</b></td><td>to feel a powerful mix of happy emotions because of others kindness or something good that has happened</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>inattentive:</b></td><td>not focusing your attention properly on something or someone, being careless, lacking concentration</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>appalled:</b></td><td>to feel deeply shocked, alarmed</td></tr>"+
"<tr><td><b>complacent:</b></td><td>to be satisfied with things as they are, not to bother to improve or change things</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>appalled:</b></td><td>to feel deeply shocked, alarmed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>modest:</b></td><td>to have a humble opinion of oneself and one's abilities</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>pitiless:</b></td><td>to show no mercy or sympathy towards others</td></tr>"+
"<tr><td><b>cocky:</b></td><td>to be  self-confident or proud, to be a little arrogant</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>cynical:</b></td><td>to distrust the motivation of others</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>pining:</b></td><td>feeling openly unhappy because of the absence  of someone or something; longing for something or someone when they are not present</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>unreceptive:</b></td><td>to be unwilling to listen or respond to someone else</td></tr>"+
"<tr><td><b>appalled:</b></td><td>to feel deeply shocked, alarmed</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>confronted:</b></td><td>to be approached in a critical or threatening way</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>congratulatory:</b></td><td>to show happiness for another person's success or achievement</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>grave:</b></td><td>to be serious in manner and thought</td></tr>"+
"<tr><td><b>agonising:</b></td><td>severely worrying about and thinking through something, in great mental anguish</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>affinity:</b></td><td>feeling of closeness and similarity to someone; having an understanding of a person</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>pitying:</b></td><td>having  sympathy towards someone else for their misfortune or sad situation</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>confronted:</b></td><td>to be approached in a critical or threatening way</td></tr>"+
"<tr><td><b>complacent:</b></td><td>to be satisfied with things as they are, not to bother to improve or change things</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>flattering:</b></td><td>saying nice things about someone, often insincerely</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>confronted:</b></td><td>to be approached in a critical or threatening way</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>reassured:</b></td><td>to have one's worries or fears taken away by the compassion of someone else</td></tr>"+
"<tr><td><b>remote:</b></td><td>to feel deliberately disconnected from a situation; to have no interest in what is going on</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>intimate:</b></td><td>to have a deep  and personal relationship or experience with someone</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>carefree:</b></td><td>to feel no responsibilities or worries</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>tortured:</b></td><td>to feel immense physical or mental pain because of the direct actions of someone else</td></tr>"+
"<tr><td><b>inadequate:</b></td><td>to feel one is not good enough, to be unable to cope with  something or a situation, to lack confidence</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>determined:</b></td><td>to pursue vigorously something one has decided on</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>ruffled:</b></td><td>to feel that someone has interrupted one's concentration or calm state</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>intimate:</b></td><td>to have a deep  and personal relationship or experience with someone</td></tr>"+
"<tr><td><b>daunted:</b></td><td>to be discouraged by something or someone, to become fearful, lose courage</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>demoralised:</b></td><td>to have lost all self-confidence</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>insincere:</b></td><td>not to mean what one says, to be dishonest</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>miffed:</b></td><td>to feel slightly annoyed, upset</td></tr>"+
"<tr><td><b>spellbound:</b></td><td>to have your attention held and to feel entranced</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>distraught:</b></td><td>to be very upset and agitated</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>insincere:</b></td><td>not to mean what one says, to be dishonest</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>unfocused:</b></td><td>to be unable to concentrate; to be easily distracted</td></tr>"+
"<tr><td><b>contradictory:</b></td><td>to take an opposite position or present an opposing opinion to someone else's</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>pestered:</b></td><td>to feel annoyed and harassed particularly about trivial matters and sometimes because of numerous requests from people</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>pitiless:</b></td><td>to show no mercy or sympathy towards others</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>discomforted:</b></td><td>to be troubled by something or someone, to be worried or embarrassed</td></tr>"+
"<tr><td><b>appealing:</b></td><td>eagerly requesting something</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>humble:</b></td><td>to feel  modest, to feel one is not special but ordinary</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>triumphant:</b></td><td>to feel extremely happy and pleased at having achieved something</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>assertive:</b></td><td>to show a very confident personality, to be self-assured</td></tr>"+
"<tr><td><b>appealing:</b></td><td>eagerly requesting something</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empathic:</b></td><td>to be able to understand others' emotions or state of being</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>mortified:</b></td><td>to feel humiliated, extremely embarrassed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>inattentive:</b></td><td>not focusing your attention properly on something or someone, being careless, lacking concentration</td></tr>"+
"<tr><td><b>assertive:</b></td><td>to show a very confident personality, to be self-assured</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>cautious:</b></td><td>to feel careful or wary, thinking of the possible outcome or result and preparing for the worst</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>jaded:</b></td><td>to feel tired or bored because one has had too much of something</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>mortified:</b></td><td>to feel humiliated, extremely embarrassed</td></tr>"+
"<tr><td><b>grieving:</b></td><td>being extremely sad because of loss</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>brazen:</b></td><td>to behave in a disrespectful and reckless manner</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>oppressive:</b></td><td>to impose one's will on someone, to overpower, to deny him/her choices</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>guarded:</b></td><td>to be cautious, to restrain oneself from expressing  emotions,  opinions or information</td></tr>"+
"<tr><td><b>infuriated:</b></td><td>to feel extremely angry, annoyed</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>humble:</b></td><td>to feel  modest, to feel one is not special but ordinary</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>distaste:</b></td><td>to dislike something or someone, to finding something unappealing and offensive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>guarded:</b></td><td>to be cautious, to restrain oneself from expressing  emotions,  opinions or information</td></tr>"+
"<tr><td><b>agonising:</b></td><td>severely worrying about and thinking through something, in great mental anguish</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>offended:</b></td><td>to have ones feelings upset by the remarks or actions of someone else</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>distaste:</b></td><td>to dislike something or someone, to finding something unappealing and offensive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>vigilant:</b></td><td>to be extremely observant and careful</td></tr>"+
"<tr><td><b>complacent:</b></td><td>to be satisfied with things as they are, not to bother to improve or change things</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>admiring:</b></td><td>demonstrating respect for, or approval of, something or someone</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>needled:</b></td><td>to feel angered by a teasing or provoking remark</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>distaste:</b></td><td>to dislike something or someone, to finding something unappealing and offensive</td></tr>"+
"<tr><td><b>inattentive:</b></td><td>not focusing your attention properly on something or someone, being careless, lacking concentration</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>flattering:</b></td><td>saying nice things about someone, often insincerely</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>distaste:</b></td><td>to dislike something or someone, to finding something unappealing and offensive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>blank:</b></td><td>to show no feeling or interest, to have no thoughts about a particular thing, to be unable to remember</td></tr>"+
"<tr><td><b>mystified:</b></td><td>to feel bewildered or puzzled by something</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>exonerated:</b></td><td>to feel released from blame</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>devastated:</b></td><td>to be  overwhelmingly shocked or broken</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>nostalgic:</b></td><td>to feel a sentimental longing and remembrance of things from  the past</td></tr>"+
"<tr><td><b>calculating:</b></td><td>coldly aiming to achieve something, plotting</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>cherishing:</b></td><td>to have a very strong affection for someone or something</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>nostalgic:</b></td><td>to feel a sentimental longing and remembrance of things from  the past</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>hysterical:</b></td><td>to be unable to control one's excitement</td></tr>"+
"<tr><td><b>condemning:</b></td><td>strongly disapproving of someone or something, judging others blameworthy of wrongdoing</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>neglected:</b></td><td>to feel one is not being given enough attention, affection or emotional input</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>invigorated:</b></td><td>to feel enlivened as if your energy has been replenished</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>downtrodden:</b></td><td>to be without the  capacity to fight against something or someone that's oppressing you</td></tr>"+
"<tr><td><b>nostalgic:</b></td><td>to feel a sentimental longing and remembrance of things from  the past</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>luring:</b></td><td>tempting, enticing others to do something or go somewhere</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>empty:</b></td><td>to feel unhappy, drained, having no meaning in your life</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>reassured:</b></td><td>to have one's worries or fears taken away by the compassion of someone else</td></tr>"+
"<tr><td><b>nostalgic:</b></td><td>to feel a sentimental longing and remembrance of things from  the past</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>entrancing:</b></td><td>capable of attracting and holding interest; charming.</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>alert:</b></td><td>to feel watchful and attentive</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>reassured:</b></td><td>to have one's worries or fears taken away by the compassion of someone else</td></tr>"+
"<tr><td><b>blank:</b></td><td>to show no feeling or interest, to have no thoughts about a particular thing, to be unable to remember</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>comprehending:</b></td><td>understanding, grasping, taking in the meaning of something</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>reassured:</b></td><td>to have one's worries or fears taken away by the compassion of someone else</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>vulnerable:</b></td><td>to feel unprotected and open to the possibility of mental or physical harm</td></tr>"+
"<tr><td><b>invigorated:</b></td><td>to feel enlivened as if your energy has been replenished</td></tr>"+
"</table></span></div>"
];