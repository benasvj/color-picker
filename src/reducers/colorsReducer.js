const initialState = [
    {name:"red", color:[255,0,0], description:"Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.Red is a very emotionally intense color. It enhances human metabolism, increases respiration rate, and raises blood pressure. It has very high visibility, which is why stop signs, stoplights, and fire equipment are usually painted red. In heraldry, red is used to indicate courage. It is a color found in many national flags."},
    {name:"orange", color:[255,165,0], description:"Orange combines the energy of red and the happiness of yellow. It is associated with joy, sunshine, and the tropics. Orange represents enthusiasm, fascination, happiness, creativity, determination, attraction, success, encouragement, and stimulation.To the human eye, orange is a very hot color, so it gives the sensation of heat. Nevertheless, orange is not as aggressive as red. Orange increases oxygen supply to the brain, produces an invigorating effect, and stimulates mental activity. It is highly accepted among young people. As a citrus color, orange is associated with healthy food and stimulates appetite. Orange is the color of fall and harvest. In heraldry, orange is symbolic of strength and endurance."},
    {name:"yellow", color:[255,255,0], description:"Yellow is the color of sunshine. It's associated with joy, happiness, intellect, and energy.Yellow produces a warming effect, arouses cheerfulness, stimulates mental activity, and generates muscle energy. Yellow is often associated with food. Bright, pure yellow is an attention getter, which is the reason taxicabs are painted this color. When overused, yellow may have a disturbing effect; it is known that babies cry more in yellow rooms. Yellow is seen before other colors when placed against black; this combination is often used to issue a warning. In heraldry, yellow indicates honor and loyalty. Later the meaning of yellow was connected with cowardice"},
    {name:"green", color:[0,255,0], description:"Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional correspondence with safety. Dark green is also commonly associated with money.Green has great healing power. It is the most restful color for the human eye; it can improve vision. Green suggests stability and endurance. Sometimes green denotes lack of experience; for example, a 'greenhorn' is a novice. In heraldry, green indicates growth and hope. Green, as opposed to red, means safety; it is the color of free passage in road traffic."},
    {name:"blue", color:[0,0,255], description:"Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven.Blue is considered beneficial to the mind and body. It slows human metabolism and produces a calming effect. Blue is strongly associated with tranquility and calmness. In heraldry, blue is used to symbolize piety and sincerity."},
    {name:"indigo", color:[75,0,130], description:"Indigo is the color of wisdom and intuition. It represents an inner awareness of spirituality, and allows for deep focus during meditation. It gives an ability for planning the future, and brings about a love of rituals. Those who feel connected to indigo are faithful, idealistic, and intuitive. They are truthful by nature and have sincere personalities."},
    {name:"magenta", color:[255,0,255], description:"The color magenta is one of universal harmony and emotional balance. It is spiritual yet practical, encouraging common sense and a balanced outlook on life.This is a color that helps to create harmony and balance in every aspect of life; physically, mentally, emotionally and spiritually.A combination of red and violet, magenta contains the passion, power and energy of red, restrained by the introspection and quiet energy of violet."}
];

const colorReducer = (state=initialState, action)=>{
    return state;
};

export default colorReducer;