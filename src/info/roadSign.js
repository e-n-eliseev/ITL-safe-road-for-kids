import abovegroundPedestrianCrossing from "../assets/abovegroundPedestrianCrossing.svg";
import bikePath from "../assets/bikePath.svg";
import busStop from "../assets/busStop.svg";
import footPath from "../assets/footPath.svg";
import kids from "../assets/kids.svg";
import pedestrianCrossing from "../assets/pedestrianCrossing.svg";
import pedestrianTrafficIsProhibited from "../assets/pedestrianTrafficIsProhibited.svg";
import stoplight from "../assets/stoplight.svg";
import undergroundPedestrianCrossing from "../assets/undergroundPedestrianCrossing.svg";

export const roadSign = [
    { pic: abovegroundPedestrianCrossing, name: "Надземный пешеходный переход", desc: "Внутри голубого квадрата, нарисован человек, который поднимается по ступенькам, это значит, что пешеходный переход находится над дорогой.", additional: "Устанавливается  у лестничных сходов пешеходных мостов." },
    { pic: bikePath, name: "Велосипедная дорожка", desc: "Голубой круг с рисунком велосипеда. Значит на этом промежутке дороге, безопасно кататься и учиться кататься на велосипеде.", additional: "По велосипедной дорожке могут двигаться также пешеходы(при отсутствии тротуара или пешеходной дорожки)." },
    { pic: busStop, name: "Место остановки автобуса и (или) троллейбуса", desc: "Автобус в белом квадрате. Значит общественный транспорт можно ждать возле этого знака.", additional: "Место остановки автобуса/троллейбуса, движущихся по маршруту, а также такси." },
    { pic: footPath, name: "Пешеходная дорожка", desc: "Голубой знак, в виде круга, с нарисованным человечком. Значит, что этот промежуток дороге только для пешеходов.", additional: "Знак применяется для обозначения дорожек, предназначенных только для пешеходов" },
    { pic: kids, name: "Дети", desc: "Внутри знака нарисованы бегущие детки. Обычно эти знаки весят рядом с детскими учреждениями, например школы, детские сады, лагерь и т.д.", additional: "Указывает водителю, что следует снизить скорость, повысить вниманиеб так как действия детей неосознанны и не предсказуемы." },
    { pic: pedestrianCrossing, name: "Пешеходный переход", desc: "Внутри знака нарисован человечек, который переходит дорогу по зебре. Рядом с этим знаком, всегда есть пешеходный переход, то есть зебра. Значит можно переходить дорогу. ", additional: "Не забывайте, посмотреть направо и налево, прежде чем сделаете шаг по зебре." },
    { pic: pedestrianTrafficIsProhibited, name: "Движение пешеходов запрещено", desc: "Внутри знака нарисован пешеход, перечеркнутый красной линией. В этом случае на этом промежутке дороги ходить нельзя.", additional: "Действие знака распространяется только на ту сторону дороги, где он установлен." },
    { pic: stoplight, name: "Светофорное регулирование", desc: "Внутри треугольника нарисован светофор. Этот знак предупреждает о приближении к участку дороги, контролируемого светофором. ", additional: "Ни в коем случае не переходите дорогу на красный цвет. Если горит желтый, — нужно подождать, ну, а, когда загорится зеленый, нужно посмотреть по сторонам и спокойно перейти дорогу." },
    { pic: undergroundPedestrianCrossing, name: "Подземный пешеходный переход", desc: "Внутри голубого квадрата, нарисован человечек, шагающий вниз по ступенькам. Это означает то, что рядом с вами не зебра, а подземный переход.", additional: "Устанавливается  у лестничных сходов пешеходных тоннелей." },
]