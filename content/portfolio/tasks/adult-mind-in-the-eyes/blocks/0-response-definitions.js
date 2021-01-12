var prompts = [
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>playful:</b></td><td>full of high spirits and fun</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>comforting:</b></td><td>consoling, compassionate</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>irritated:</b></td><td>exasperated, annoyed</td></tr>"+
"<tr><td><b>bored:</b></td><td>feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>terrified:</b></td><td>alarmed, fearful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>upset:</b></td><td>agitated, worried, uneasy</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>arrogant:</b></td><td>conceited, self-important, having a big opinion of oneself</td></tr>"+
"<tr><td><b>annoyed:</b></td><td>irritated, displeased</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>joking:</b></td><td>being funny, playful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>flustered:</b></td><td>confused, nervous and upset</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>desire:</b></td><td>passion, lust, longing for</td></tr>"+
"<tr><td><b>convinced:</b></td><td>certain, absolutely positive</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>joking:</b></td><td>being funny, playful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>insisting:</b></td><td>demanding, persisting, maintaining</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>amused:</b></td><td>finding something funny</td></tr>"+
"<tr><td><b>relaxed:</b></td><td>taking it easy, calm, carefree</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>irritated:</b></td><td>exasperated, annoyed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>sarcastic:</b></td><td>cynical, mocking, scornful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>worried:</b></td><td>anxious, fretful, troubled</td></tr>"+
"<tr><td><b>friendly:</b></td><td>sociable, amiable</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>aghast:</b></td><td>horrified, astonished, alarmed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>fantasizing:</b></td><td>daydreaming</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>impatient:</b></td><td>restless, wanting something to happen soon</td></tr>"+
"<tr><td><b>alarmed:</b></td><td>fearful, worried, filled with anxiety</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>apologetic:</b></td><td>feeling sorry</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>friendly:</b></td><td>sociable, amiable</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>uneasy:</b></td><td>unsettled, apprehensive, troubled</td></tr>"+
"<tr><td><b>dispirited:</b></td><td>glum, miserable, low</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>despondent:</b></td><td>gloomy, despairing, without hope</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>relieved:</b></td><td>freed from worry or anxiety</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>shy:</b></td><td>nervous or timid in the company of other people.</td></tr>"+
"<tr><td><b>excited:</b></td><td>very enthusiastic and eager</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>annoyed:</b></td><td>irritated, displeased</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>hostile:</b></td><td>unfriendly</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>horrified:</b></td><td>terrified, appalled</td></tr>"+
"<tr><td><b>preoccupied:</b></td><td>absorbed, engrossed in one's own thoughts</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>cautious:</b></td><td>careful, wary</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>insisting:</b></td><td>demanding, persisting, maintaining</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>bored:</b></td><td>feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.</td></tr>"+
"<tr><td><b>aghast:</b></td><td>horrified, astonished, alarmed</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>terrified:</b></td><td>alarmed, fearful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>amused:</b></td><td>finding something funny</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>regretful:</b></td><td>sorry</td></tr>"+
"<tr><td><b>flirtatious:</b></td><td>brazen, saucy, teasing, playful</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>indifferent:</b></td><td>disinterested, unresponsive, don't care</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>embarrassed:</b></td><td>ashamed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>sceptical:</b></td><td>doubtful, suspicious, mistrusting</td></tr>"+
"<tr><td><b>dispirited:</b></td><td>glum, miserable, low</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>decisive:</b></td><td>already made your mind up</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>anticipating:</b></td><td>expecting</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>threatening:</b></td><td>menacing, intimidating</td></tr>"+
"<tr><td><b>shy:</b></td><td>nervous or timid in the company of other people.</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>irritated:</b></td><td>exasperated, annoyed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>disappointed:</b></td><td>displeased, disgruntled</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>depressed:</b></td><td>miserable</td></tr>"+
"<tr><td><b>accusing:</b></td><td>blaming</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>contemplative:</b></td><td>reflective, thoughtful, considering</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>flustered:</b></td><td>confused, nervous and upset</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>encouraging:</b></td><td>hopeful, heartening, supporting</td></tr>"+
"<tr><td><b>amused:</b></td><td>finding something funny</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>irritated:</b></td><td>exasperated, annoyed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>thoughtful:</b></td><td>thinking about something</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>encouraging:</b></td><td>hopeful, heartening, supporting</td></tr>"+
"<tr><td><b>sympathetic:</b></td><td>kind, compassionate</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>doubtful:</b></td><td>dubious, suspicious, not really believing</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>affectionate:</b></td><td>showing fondness towards someone</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>playful:</b></td><td>full of high spirits and fun</td></tr>"+
"<tr><td><b>aghast:</b></td><td>horrified, astonished, alarmed</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>decisive:</b></td><td>already made your mind up</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>amused:</b></td><td>finding something funny</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>aghast:</b></td><td>horrified, astonished, alarmed</td></tr>"+
"<tr><td><b>bored:</b></td><td>feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>arrogant:</b></td><td>conceited, self-important, having a big opinion of oneself</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>grateful:</b></td><td>thankful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>sarcastic:</b></td><td>cynical, mocking, scornful</td></tr>"+
"<tr><td><b>tentative:</b></td><td>hesitant, uncertain, cautious</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>dominant:</b></td><td>commanding, bossy</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>friendly:</b></td><td>sociable, amiable</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>guilty:</b></td><td>feeling sorry for doing something wrong</td></tr>"+
"<tr><td><b>horrified:</b></td><td>terrified, appalled</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>embarrassed:</b></td><td>ashamed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>fantasizing:</b></td><td>daydreaming</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>confused:</b></td><td>puzzled, perplexed</td></tr>"+
"<tr><td><b>panicked:</b></td><td>distraught, feeling of terror or anxiety</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>preoccupied:</b></td><td>absorbed, engrossed in one's own thoughts</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>grateful:</b></td><td>thankful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>insisting:</b></td><td>demanding, persisting, maintaining</td></tr>"+
"<tr><td><b>imploring:</b></td><td>begging, pleading</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>contented:</b></td><td>satisfied</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>apologetic:</b></td><td>feeling sorry</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>defiant:</b></td><td>insolent, bold, don't care what anyone else thinks</td></tr>"+
"<tr><td><b>curious:</b></td><td>inquisitive, inquiring, prying</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>pensive:</b></td><td>thinking about something slightly worrying</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>irritated:</b></td><td>exasperated, annoyed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>excited:</b></td><td>very enthusiastic and eager</td></tr>"+
"<tr><td><b>hostile:</b></td><td>unfriendly</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>panicked:</b></td><td>distraught, feeling of terror or anxiety</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>incredulous:</b></td><td>not believing</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>despondent:</b></td><td>gloomy, despairing, without hope</td></tr>"+
"<tr><td><b>interested:</b></td><td>inquiring, curious</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>alarmed:</b></td><td>fearful, worried, filled with anxiety</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>shy:</b></td><td>nervous or timid in the company of other people.</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>hostile:</b></td><td>unfriendly</td></tr>"+
"<tr><td><b>anxious:</b></td><td>worried, tense, uneasy</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>joking:</b></td><td>being funny, playful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>cautious:</b></td><td>careful, wary</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>arrogant:</b></td><td>conceited, self-important, having a big opinion of oneself</td></tr>"+
"<tr><td><b>reassuring:</b></td><td>supporting, encouraging, giving someone confidence</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>interested:</b></td><td>inquiring, curious</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>joking:</b></td><td>being funny, playful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>affectionate:</b></td><td>showing fondness towards someone</td></tr>"+
"<tr><td><b>contented:</b></td><td>satisfied</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>impatient:</b></td><td>restless, wanting something to happen soon</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>aghast:</b></td><td>horrified, astonished, alarmed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>irritated:</b></td><td>exasperated, annoyed</td></tr>"+
"<tr><td><b>reflective:</b></td><td>contemplative, thoughtful</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>grateful:</b></td><td>thankful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>flirtatious:</b></td><td>brazen, saucy, teasing, playful</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>hostile:</b></td><td>unfriendly</td></tr>"+
"<tr><td><b>disappointed:</b></td><td>displeased, disgruntled</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>ashamed:</b></td><td>overcome with shame or guilt</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>confident:</b></td><td>self-assured, believing in oneself</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>joking:</b></td><td>being funny, playful</td></tr>"+
"<tr><td><b>dispirited:</b></td><td>glum, miserable, low</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>serious:</b></td><td>solemn, grave</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>ashamed:</b></td><td>overcome with shame or guilt</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>bewildered:</b></td><td>utterly confused, puzzled, dazed</td></tr>"+
"<tr><td><b>alarmed:</b></td><td>fearful, worried, filled with anxiety</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>embarrassed:</b></td><td>ashamed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>guilty:</b></td><td>feeling sorry for doing something wrong</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>fantasizing:</b></td><td>daydreaming</td></tr>"+
"<tr><td><b>concerned:</b></td><td>worried, troubled</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>aghast:</b></td><td>horrified, astonished, alarmed</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>baffled:</b></td><td>confused, puzzled, dumbfounded</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>distrustful:</b></td><td>suspicious, doubtful, wary</td></tr>"+
"<tr><td><b>terrified:</b></td><td>alarmed, fearful</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>puzzled:</b></td><td>perplexed, bewildered, confused</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>nervous:</b></td><td>apprehensive, tense, worried</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>insisting:</b></td><td>demanding, persisting, maintaining</td></tr>"+
"<tr><td><b>contemplative:</b></td><td>reflective, thoughtful, considering</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>ashamed:</b></td><td>overcome with shame or guilt</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>nervous:</b></td><td>apprehensive, tense, worried</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>suspicious:</b></td><td>disbelieving, suspecting, doubting</td></tr>"+
"<tr><td><b>indecisive:</b></td><td>unsure, hesitant, unable to make your mind up</td></tr>"+
"</table></span></div>",
"<div class='tooltip'>" +
"*definitions*" +
"<span class =  'tooltiptext'><table>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>jealous:</b></td><td>envious</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>panicked:</b></td><td>distraught, feeling of terror or anxiety</td></tr>"+
"<tr style = 'border-bottom: 1px solid #ccc;'><td><b>arrogant:</b></td><td>conceited, self-important, having a big opinion of oneself</td></tr>"+
"<tr><td><b>hateful:</b></td><td>showing intense dislike</td></tr>"+
"</table></span></div>",
];